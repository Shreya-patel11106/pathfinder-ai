import React from 'react';
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { CareerPath } from '../types';

interface CareerCardProps {
  career: CareerPath;
  isSelected: boolean;
  onSelect: (career: CareerPath) => void;
  onAskAboutCareer: (career: CareerPath) => void;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  career,
  isSelected,
  onSelect,
  onAskAboutCareer,
}) => {
  return (
    <div
      className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden bg-white ${
        isSelected
          ? 'border-indigo-600 ring-2 ring-indigo-600/20 shadow-md'
          : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
      }`}
    >
      <div className="p-6">
        {/* Unboxed category metadata with separator */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="font-medium text-slate-700">{career.category}</span>
            <span aria-hidden="true">·</span>
            <span>{career.jobGrowth}</span>
          </div>

          <div className="flex items-center gap-1 font-mono font-bold text-indigo-700 text-xs bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 tabular-nums">
            <span>{career.matchScore}% Match</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
          {career.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
          {career.tagline}
        </p>

        {/* Why this matches student */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-600 mb-4">
          <span className="font-semibold text-slate-800">Why this fits you: </span>
          <span>{career.matchReason}</span>
        </div>

        {/* Salary & Daily task metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
          <div className="border border-slate-100 rounded-lg p-2.5 bg-white">
            <div className="text-[11px] text-slate-500 mb-0.5">Typical Entry Salary</div>
            <div className="font-semibold text-slate-900 font-mono tabular-nums">{career.salaryRange}</div>
          </div>
          <div className="border border-slate-100 rounded-lg p-2.5 bg-white">
            <div className="text-[11px] text-slate-500 mb-0.5">Learning Commitment</div>
            <div className="font-semibold text-slate-900">4 Phases / 20 Weeks</div>
          </div>
        </div>

        {/* Day in the life */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-slate-700 mb-1">A Day in the Life</div>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
            {career.typicalDay}
          </p>
        </div>

        {/* Key skills unboxed */}
        <div>
          <div className="text-xs font-semibold text-slate-700 mb-1.5">Core Skills You'll Learn</div>
          <div className="flex flex-wrap gap-1.5">
            {career.coreSkills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
              >
                {skill}
              </span>
            ))}
            {career.coreSkills.length > 5 && (
              <span className="text-[11px] text-slate-400 self-center">
                +{career.coreSkills.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action footer */}
      <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onAskAboutCareer(career)}
          className="text-xs font-medium text-slate-600 hover:text-indigo-600 flex items-center gap-1 transition-colors whitespace-nowrap"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Ask AI Mentor</span>
        </button>

        <button
          type="button"
          onClick={() => onSelect(career)}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
            isSelected
              ? 'bg-emerald-600 text-white shadow-2xs'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs'
          }`}
        >
          <span>{isSelected ? 'Active Roadmap' : 'Explore Roadmap'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
