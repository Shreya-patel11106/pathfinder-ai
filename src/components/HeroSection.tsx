import React from 'react';
import { ArrowRight, Compass, CheckCircle2, Sparkles, BookOpen, GraduationCap, Award } from 'lucide-react';
import heroImg from '../assets/images/hero_college_students_1792777866116.jpg';

interface HeroSectionProps {
  onStartAssessment: () => void;
  onExplorePaths: () => void;
  studentName?: string;
  hasProfile: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartAssessment,
  onExplorePaths,
  studentName,
  hasProfile,
}) => {
  return (
    <div className="bg-gradient-to-b from-slate-100/70 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase">
              <span>Free AI Career Guidance For College Students</span>
              <span aria-hidden="true">·</span>
              <span>100% Free Resources Only</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {hasProfile && studentName ? (
                <>Welcome back, <span className="text-indigo-600">{studentName}</span>. Ready to conquer your career?</>
              ) : (
                <>Find your ideal career path. <span className="text-indigo-600">Build real skills</span> without paid bootcamps.</>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Tell your AI mentor about your major, interests, and schedule. Get tailored career recommendations, 
              interactive 20-week learning roadmaps, verified free courses (Harvard CS50, freeCodeCamp, MIT), and track your real milestone progress.
            </p>

            {/* Value props without pills - clean unboxed list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Cost / No Paid Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tailored to Your Year & Major</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Real Portfolio Deliverables</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onStartAssessment}
                className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all rounded-lg shadow-sm flex items-center gap-2 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                <span>{hasProfile ? 'Adjust My Career Interests' : 'Start 3-Minute Assessment'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePaths}
                className="px-5 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all rounded-lg shadow-2xs whitespace-nowrap"
              >
                Browse Curated Pathways
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100 group">
              <img
                src={heroImg}
                alt="College students collaborating on career roadmaps and projects in library"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-84 lg:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>College to Career Blueprint</span>
                </div>
                <p className="text-sm font-semibold leading-snug">
                  "Having a concrete week-by-week roadmap made landing my first summer tech internship feel structured instead of overwhelming."
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-300 mt-2">
                  <span>Student Success Pathway</span>
                  <span aria-hidden="true">·</span>
                  <span>100% Free Open Education</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
