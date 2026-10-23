/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Sparkles, 
  BookOpen, 
  Map, 
  MessageSquare, 
  HelpCircle, 
  ArrowRight,
  RefreshCw,
  Award,
  GraduationCap
} from 'lucide-react';

import { CareerPath, Milestone, StudentProfile } from './types';
import { PRESET_CAREER_PATHS } from './data/careerData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AssessmentForm } from './components/AssessmentForm';
import { CareerCard } from './components/CareerCard';
import { RoadmapView } from './components/RoadmapView';
import { FreeResourcesDirectory } from './components/FreeResourcesDirectory';
import { AIChatAgent } from './components/AIChatAgent';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';
import { ResumeTipsSection } from './components/ResumeTipsSection';

const STORAGE_KEY_PROFILE = 'pathfinder_student_profile';
const STORAGE_KEY_CAREERS = 'pathfinder_career_paths';
const STORAGE_KEY_ACTIVE_CAREER_ID = 'pathfinder_active_career_id';

export default function App() {
  // Student Profile State
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return {
      name: 'Taylor',
      collegeYear: 'Sophomore (2nd Year)',
      major: 'Computer Science / IT',
      interests: ['Web Development', 'Artificial Intelligence & Machine Learning'],
      strongSubjects: [],
      preferredWorkStyle: 'Problem-Solving & Coding',
      weeklyHours: 12,
      targetGoal: 'Summer Internship',
    };
  });

  // Career Paths State (Curated + AI-customized)
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_CAREERS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return PRESET_CAREER_PATHS;
      }
    }
    return PRESET_CAREER_PATHS;
  });

  // Active Career Selection
  const [activeCareerId, setActiveCareerId] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEY_ACTIVE_CAREER_ID) || PRESET_CAREER_PATHS[0].id;
  });

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<'explore' | 'roadmap' | 'courses' | 'chat' | 'guide'>('explore');

  // Modal visibility states
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isAssessing, setIsAssessing] = useState(false);
  const [isCustomizingRoadmap, setIsCustomizingRoadmap] = useState(false);
  const [aiAnalysisSummary, setAiAnalysisSummary] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    if (studentProfile) {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(studentProfile));
    }
  }, [studentProfile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CAREERS, JSON.stringify(careerPaths));
  }, [careerPaths]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ACTIVE_CAREER_ID, activeCareerId);
  }, [activeCareerId]);

  const activeCareer = careerPaths.find((c) => c.id === activeCareerId) || careerPaths[0];

  // Milestone Progress Stats
  const activeMilestones = activeCareer?.roadmap.flatMap((p) => p.milestones) || [];
  const completedCount = activeMilestones.filter((m) => m.completed).length;
  const totalCount = activeMilestones.length;

  // Toggle milestone completion
  const handleToggleMilestone = (milestoneId: string) => {
    setCareerPaths((prevPaths) =>
      prevPaths.map((career) => {
        if (career.id !== activeCareer.id) return career;
        const updatedRoadmap = career.roadmap.map((phase) => ({
          ...phase,
          milestones: phase.milestones.map((m) =>
            m.id === milestoneId ? { ...m, completed: !m.completed } : m
          ),
        }));
        return {
          ...career,
          roadmap: updatedRoadmap,
        };
      })
    );
  };

  // Update milestone personal student notes
  const handleUpdateMilestoneNotes = (milestoneId: string, notes: string) => {
    setCareerPaths((prevPaths) =>
      prevPaths.map((career) => {
        if (career.id !== activeCareer.id) return career;
        const updatedRoadmap = career.roadmap.map((phase) => ({
          ...phase,
          milestones: phase.milestones.map((m) =>
            m.id === milestoneId ? { ...m, notes } : m
          ),
        }));
        return {
          ...career,
          roadmap: updatedRoadmap,
        };
      })
    );
  };

  // Submit Assessment Form
  const handleAssessmentSubmit = async (profile: StudentProfile) => {
    setStudentProfile(profile);
    setIsAssessing(true);

    try {
      const response = await fetch('/api/gemini/career-assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentProfile: profile }),
      });

      if (!response.ok) {
        throw new Error('Assessment failed');
      }

      const data = await response.json();
      if (data.aiAnalysis) {
        setAiAnalysisSummary(data.aiAnalysis);
      }

      if (data.recommendations && Array.isArray(data.recommendations) && data.recommendations.length > 0) {
        // Merge AI recommendations with existing roadmaps or build enhanced ones
        const enhancedPaths = data.recommendations.map((rec: any, idx: number) => {
          // Find matching preset for base roadmap milestones if needed
          const presetMatch = PRESET_CAREER_PATHS.find(
            (p) => p.category === rec.category || p.title.toLowerCase().includes(rec.title.toLowerCase())
          ) || PRESET_CAREER_PATHS[idx % PRESET_CAREER_PATHS.length];

          return {
            id: `ai-path-${idx}-${Date.now()}`,
            title: rec.title,
            category: rec.category || presetMatch.category,
            matchScore: rec.matchScore || Math.floor(88 + Math.random() * 10),
            matchReason: rec.matchReason || `Directly leverages your passion for ${profile.interests.join(', ')}.`,
            tagline: rec.tagline || presetMatch.tagline,
            salaryRange: rec.salaryRange || presetMatch.salaryRange,
            jobGrowth: rec.jobGrowth || presetMatch.jobGrowth,
            typicalDay: rec.typicalDay || presetMatch.typicalDay,
            coreSkills: rec.coreSkills || presetMatch.coreSkills,
            freeToolsUsed: rec.freeToolsUsed || presetMatch.freeToolsUsed,
            roadmap: presetMatch.roadmap,
          };
        });

        setCareerPaths(enhancedPaths);
        setActiveCareerId(enhancedPaths[0].id);
      }
    } catch (err) {
      console.error('AI assessment fallback triggered:', err);
      // Smart client-side matching based on student interest
      const interestStr = profile.interests.join(' ').toLowerCase();
      const sorted = [...PRESET_CAREER_PATHS].sort((a, b) => {
        const scoreA = a.coreSkills.filter((s) => interestStr.includes(s.toLowerCase())).length;
        const scoreB = b.coreSkills.filter((s) => interestStr.includes(s.toLowerCase())).length;
        return scoreB - scoreA;
      });
      setCareerPaths(sorted);
      setActiveCareerId(sorted[0].id);
      setAiAnalysisSummary(`Based on your profile in ${profile.major} aiming for a ${profile.targetGoal}, we matched these top tracks for you.`);
    } finally {
      setIsAssessing(false);
      setIsAssessmentOpen(false);
      setActiveTab('explore');
    }
  };

  // AI Customize Roadmap for Schedule
  const handleRegenerateRoadmap = async () => {
    setIsCustomizingRoadmap(true);
    try {
      const response = await fetch('/api/gemini/generate-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerTitle: activeCareer.title,
          studentProfile,
        }),
      });

      if (!response.ok) throw new Error('Roadmap customization failed');

      const data = await response.json();
      if (data.phases && Array.isArray(data.phases) && data.phases.length > 0) {
        setCareerPaths((prev) =>
          prev.map((c) =>
            c.id === activeCareer.id
              ? {
                  ...c,
                  roadmap: data.phases,
                }
              : c
          )
        );
      }
    } catch (err) {
      console.warn('Roadmap customization error:', err);
    } finally {
      setIsCustomizingRoadmap(false);
    }
  };

  // Action from card or milestone to ask AI Mentor
  const handleAskAIAboutItem = (text: string) => {
    setActiveTab('chat');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'guide') {
            setIsGuideOpen(true);
          } else {
            setActiveTab(tab);
          }
        }}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        hasProfile={Boolean(studentProfile)}
        completedCount={completedCount}
        totalCount={totalCount}
      />

      {/* Main View Port Routing */}
      <main className="flex-1">
        {activeTab === 'explore' && (
          <div className="space-y-10">
            {/* Hero Section */}
            <HeroSection
              onStartAssessment={() => setIsAssessmentOpen(true)}
              onExplorePaths={() => {
                const el = document.getElementById('career-paths-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              studentName={studentProfile?.name}
              hasProfile={Boolean(studentProfile)}
            />

            {/* AI Assessment Callout if available */}
            {aiAnalysisSummary && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="p-4 bg-indigo-50/80 border border-indigo-200 rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs text-indigo-950">
                    <span className="font-bold block mb-0.5">AI Career Mentor Assessment Takeaway:</span>
                    <span className="text-slate-700 leading-relaxed">{aiAnalysisSummary}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Career Paths Grid Section */}
            <div id="career-paths-grid" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase mb-1">
                    <span>Personalized College Career Matches</span>
                    <span aria-hidden="true">·</span>
                    <span>High Growth Pathways</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Recommended Career Tracks
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setIsAssessmentOpen(true)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 transition-colors"
                  >
                    Adjust Interests
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsGuideOpen(true)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors flex items-center gap-1"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>How to Deploy Free</span>
                  </button>
                </div>
              </div>

              {/* Grid of Career Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerPaths.map((career) => (
                  <CareerCard
                    key={career.id}
                    career={career}
                    isSelected={career.id === activeCareer.id}
                    onSelect={(c) => {
                      setActiveCareerId(c.id);
                      setActiveTab('roadmap');
                    }}
                    onAskAboutCareer={(c) => {
                      setActiveCareerId(c.id);
                      setActiveTab('chat');
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Resume Tips & Google X-Y-Z Builder */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
              <ResumeTipsSection />
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <RoadmapView
            career={activeCareer}
            onToggleMilestone={handleToggleMilestone}
            onUpdateMilestoneNotes={handleUpdateMilestoneNotes}
            onAskAIAboutMilestone={(m) => handleAskAIAboutItem(`Tell me more about mastering: ${m.title}`)}
            onBackToExplore={() => setActiveTab('explore')}
            studentProfile={studentProfile}
            onRegenerateCustomRoadmap={handleRegenerateRoadmap}
            isRegenerating={isCustomizingRoadmap}
          />
        )}

        {activeTab === 'courses' && <FreeResourcesDirectory />}

        {activeTab === 'chat' && (
          <AIChatAgent
            studentProfile={studentProfile}
            currentCareer={activeCareer}
          />
        )}
      </main>

      {/* Assessment Wizard Modal */}
      <AssessmentForm
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onSubmit={handleAssessmentSubmit}
        initialProfile={studentProfile}
        isLoading={isAssessing}
      />

      {/* Deployment & GitHub Beginner Guide Modal */}
      <DeploymentGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white text-xs text-slate-500 py-8 px-4 sm:px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
              P
            </div>
            <span className="font-semibold text-slate-700">PathFinder AI Career Guide Agent</span>
            <span aria-hidden="true">·</span>
            <span>Dedicated to college students worldwide</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setIsGuideOpen(true)}
              className="hover:text-indigo-600 transition-colors"
            >
              Run Locally & Deploy Guide
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => {
                if (window.confirm('Reset all milestone progress to fresh state?')) {
                  localStorage.removeItem(STORAGE_KEY_CAREERS);
                  setCareerPaths(PRESET_CAREER_PATHS);
                }
              }}
              className="hover:text-red-600 transition-colors"
            >
              Reset Progress
            </button>
            <span aria-hidden="true">·</span>
            <span>100% Free Tools</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
