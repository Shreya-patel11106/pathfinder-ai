import React from 'react';
import { Compass, Sparkles, BookOpen, Map, MessageSquare, HelpCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: 'explore' | 'roadmap' | 'courses' | 'chat' | 'guide';
  setActiveTab: (tab: 'explore' | 'roadmap' | 'courses' | 'chat' | 'guide') => void;
  onOpenAssessment: () => void;
  hasProfile: boolean;
  completedCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAssessment,
  hasProfile,
  completedCount,
  totalCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div 
          onClick={() => setActiveTab('explore')}
          className="flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Compass className="w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
            PathFinder AI
          </span>
        </div>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('explore')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors ${
              activeTab === 'explore'
                ? 'border-indigo-600 text-indigo-600 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Career Paths
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'roadmap'
                ? 'border-indigo-600 text-indigo-600 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <span>My Roadmap</span>
            {totalCount > 0 && (
              <span className="text-xs bg-indigo-50 text-indigo-700 px-1.5 py-0.2 rounded font-mono tabular-nums">
                {completedCount}/{totalCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors ${
              activeTab === 'courses'
                ? 'border-indigo-600 text-indigo-600 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Free Courses & Tools
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'chat'
                ? 'border-indigo-600 text-indigo-600 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>AI Career Mentor</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors flex items-center gap-1 ${
              activeTab === 'guide'
                ? 'border-indigo-600 text-indigo-600 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Free Deploy & GitHub Guide</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAssessment}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{hasProfile ? 'Retake Assessment' : 'Start Free Assessment'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-100 bg-white px-2 py-2 text-xs text-slate-600 overflow-x-auto">
        <button
          onClick={() => setActiveTab('explore')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'explore' ? 'text-indigo-600 font-bold' : ''}`}
        >
          Paths
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'roadmap' ? 'text-indigo-600 font-bold' : ''}`}
        >
          Roadmap ({completedCount}/{totalCount})
        </button>
        <button
          onClick={() => setActiveTab('courses')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'courses' ? 'text-indigo-600 font-bold' : ''}`}
        >
          Free Courses
        </button>
        <button
          onClick={() => setActiveTab('chat')}
          className={`px-2 py-1 whitespace-nowrap flex items-center gap-1 ${activeTab === 'chat' ? 'text-indigo-600 font-bold' : ''}`}
        >
          <Sparkles className="w-3 h-3" />
          <span>AI Mentor</span>
        </button>
        <button
          onClick={() => setActiveTab('guide')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'guide' ? 'text-indigo-600 font-bold' : ''}`}
        >
          Deploy Guide
        </button>
      </div>
    </header>
  );
};
