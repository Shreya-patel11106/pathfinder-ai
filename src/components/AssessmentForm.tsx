import React, { useState } from 'react';
import { X, Sparkles, Check, Clock, GraduationCap, Briefcase, Heart } from 'lucide-react';
import { StudentProfile } from '../types';
import { COLLEGE_MAJORS, POPULAR_INTERESTS } from '../data/careerData';

interface AssessmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (profile: StudentProfile) => void;
  initialProfile?: StudentProfile | null;
  isLoading: boolean;
}

export const AssessmentForm: React.FC<AssessmentFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialProfile,
  isLoading,
}) => {
  const [name, setName] = useState(initialProfile?.name || '');
  const [collegeYear, setCollegeYear] = useState<StudentProfile['collegeYear']>(
    initialProfile?.collegeYear || 'Sophomore (2nd Year)'
  );
  const [major, setMajor] = useState(initialProfile?.major || 'Computer Science / IT');
  const [customMajor, setCustomMajor] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    initialProfile?.interests && initialProfile.interests.length > 0
      ? initialProfile.interests
      : ['Web Development', 'Artificial Intelligence & Machine Learning']
  );
  const [preferredWorkStyle, setPreferredWorkStyle] = useState<StudentProfile['preferredWorkStyle']>(
    initialProfile?.preferredWorkStyle || 'Problem-Solving & Coding'
  );
  const [weeklyHours, setWeeklyHours] = useState<number>(initialProfile?.weeklyHours || 10);
  const [targetGoal, setTargetGoal] = useState<StudentProfile['targetGoal']>(
    initialProfile?.targetGoal || 'Summer Internship'
  );

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMajor = major === 'Other' && customMajor.trim() ? customMajor.trim() : major;
    const profile: StudentProfile = {
      name: name.trim() || 'College Scholar',
      collegeYear,
      major: finalMajor,
      interests: selectedInterests.length > 0 ? selectedInterests : ['Technology', 'Problem Solving'],
      strongSubjects: [],
      preferredWorkStyle,
      weeklyHours,
      targetGoal,
    };
    onSubmit(profile);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Student Career Assessment</h2>
              <p className="text-xs text-slate-500">Personalized guidance based on your college stage and goals</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Step 1: Personal info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Your First Name or Nickname
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Current College Year
              </label>
              <select
                value={collegeYear}
                onChange={(e) => setCollegeYear(e.target.value as any)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option value="Freshman (1st Year)">Freshman (1st Year)</option>
                <option value="Sophomore (2nd Year)">Sophomore (2nd Year)</option>
                <option value="Junior (3rd Year)">Junior (3rd Year)</option>
                <option value="Senior (4th Year)">Senior (4th Year)</option>
                <option value="Recent Graduate">Recent Graduate</option>
              </select>
            </div>
          </div>

          {/* Major */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              College Major or Intended Field
            </label>
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white mb-2"
            >
              {COLLEGE_MAJORS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
              <option value="Other">Other (Type below)</option>
            </select>
            {major === 'Other' && (
              <input
                type="text"
                value={customMajor}
                onChange={(e) => setCustomMajor(e.target.value)}
                placeholder="Type your major, e.g. Biomedical Informatics"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              />
            )}
          </div>

          {/* Target Goal */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              What is your primary goal right now?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'Summer Internship', label: 'Summer Internship', desc: 'Prepare for campus recruiting and landing your first internship' },
                { id: 'First Full-Time Job', label: 'First Full-Time Job', desc: 'Build an interview-ready portfolio for graduation' },
                { id: 'Skill Building & Projects', label: 'Skill Building & Projects', desc: 'Gain practical experience and learn modern tools' },
                { id: 'Career Switch / Exploration', label: 'Career Exploration', desc: 'Explore tech roles suited to non-CS or undecided backgrounds' }
              ].map((g) => (
                <button
                  type="button"
                  key={g.id}
                  onClick={() => setTargetGoal(g.id as any)}
                  className={`text-left p-3 rounded-xl border text-xs transition-all ${
                    targetGoal === g.id
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-1 ring-indigo-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <div className="font-semibold text-slate-900">{g.label}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">{g.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Interests multi-select */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold text-slate-700">
                Select Your Key Interests ({selectedInterests.length} selected)
              </label>
              <span className="text-[11px] text-slate-500">Pick 2 or more</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_INTERESTS.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                        : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700 border-slate-200'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                    <span>{interest}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preferred Work Style */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              How do you prefer to work and create value?
            </label>
            <div className="space-y-2">
              {[
                { id: 'Problem-Solving & Coding', label: 'Logical Problem-Solving & Coding', detail: 'Writing clean code, debugging logic, building functional features' },
                { id: 'Visual & Creative Design', label: 'Visual & Creative Design', detail: 'Creating beautiful layouts, user flows, accessibility, aesthetics' },
                { id: 'Data & Statistical Analysis', label: 'Data & Statistical Analysis', detail: 'Finding insights in numbers, querying databases, predictive modeling' },
                { id: 'People & Strategy / Leadership', label: 'Product Strategy & Team Coordination', detail: 'Defining requirements, roadmap planning, stakeholder alignment' },
                { id: 'Hands-on Building / Systems', label: 'Systems & Infrastructure Reliability', detail: 'Automation, servers, security defense, continuous deployments' },
              ].map((style) => (
                <label
                  key={style.id}
                  className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    preferredWorkStyle === style.id
                      ? 'border-indigo-600 bg-indigo-50/50 text-indigo-950 ring-1 ring-indigo-600'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="workStyle"
                    checked={preferredWorkStyle === style.id}
                    onChange={() => setPreferredWorkStyle(style.id as any)}
                    className="mt-0.5 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{style.label}</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">{style.detail}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Time commitment slider */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Weekly Time Available for Career Prep</span>
              </div>
              <span className="text-xs font-mono font-bold text-indigo-700 tabular-nums bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                {weeklyHours} hrs / week
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="25"
              step="1"
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>Light (3-5 hrs)</span>
              <span>Moderate (10-12 hrs)</span>
              <span>Intensive (20+ hrs)</span>
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 disabled:opacity-50 transition-all rounded-lg shadow-sm flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Analyzing with AI Agent...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generate Career Blueprint</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
