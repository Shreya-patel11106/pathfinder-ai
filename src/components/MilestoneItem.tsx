import React, { useState } from 'react';
import { Check, Clock, BookOpen, ExternalLink, HelpCircle, ChevronDown, ChevronUp, Code2, Sparkles, Edit3 } from 'lucide-react';
import { Milestone } from '../types';

interface MilestoneItemProps {
  milestone: Milestone;
  onToggleComplete: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onAskAIAboutMilestone: (milestone: Milestone) => void;
}

export const MilestoneItem: React.FC<MilestoneItemProps> = ({
  milestone,
  onToggleComplete,
  onUpdateNotes,
  onAskAIAboutMilestone,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInterviewAnswer, setShowInterviewAnswer] = useState(false);
  const [notes, setNotes] = useState(milestone.notes || '');
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  const handleSaveNotes = () => {
    onUpdateNotes(milestone.id, notes);
    setIsEditingNotes(false);
  };

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden bg-white ${
        milestone.completed
          ? 'border-emerald-300 bg-emerald-50/20'
          : 'border-slate-200 hover:border-slate-300 shadow-2xs'
      }`}
    >
      {/* Milestone Summary Header Row */}
      <div className="p-4 sm:p-5 flex items-start gap-3.5">
        {/* Completion Checkbox */}
        <button
          type="button"
          onClick={() => onToggleComplete(milestone.id)}
          className={`mt-0.5 w-6 h-6 rounded-md flex items-center justify-center transition-all shrink-0 cursor-pointer ${
            milestone.completed
              ? 'bg-emerald-600 text-white shadow-2xs'
              : 'border-2 border-slate-300 hover:border-indigo-600 bg-white'
          }`}
          aria-label={milestone.completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {milestone.completed && <Check className="w-4 h-4 stroke-[3]" />}
        </button>

        {/* Milestone Main Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-indigo-700">Phase {milestone.phaseNumber}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-mono tabular-nums">
                <Clock className="w-3 h-3 text-slate-400" />
                ~{milestone.estimatedHours} hrs study
              </span>
            </div>

            {milestone.completed && (
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Completed
              </span>
            )}
          </div>

          <h4
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-base font-bold cursor-pointer transition-colors ${
              milestone.completed ? 'text-slate-700 line-through decoration-slate-400' : 'text-slate-900 hover:text-indigo-600'
            }`}
          >
            {milestone.title}
          </h4>

          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            {milestone.description}
          </p>

          {/* Key skills preview */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
            {milestone.skillsGained.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Expand / Collapse toggle */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {/* Expanded Details: Free Courses, Projects, Notes, Interview Question */}
      {isExpanded && (
        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/60 space-y-4">
          {/* Free learning resources */}
          <div>
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span>Verified 100% Free Learning Resources</span>
              </span>
              <span className="text-[11px] text-emerald-700 font-semibold">Zero Cost</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {milestone.freeResources.map((res) => (
                <a
                  key={res.id || res.title}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                      <span className="font-semibold text-indigo-700">{res.provider}</span>
                      <span className="text-slate-400 font-mono">{res.difficulty}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1">
                      <span>{res.title}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
                    <span>{res.type}</span>
                    {res.durationHours && <span>~{res.durationHours} hrs</span>}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Practical hands-on project deliverable */}
          {milestone.practicalProject && (
            <div className="p-3.5 bg-white rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                <Code2 className="w-4 h-4 text-emerald-600" />
                <span>Hands-On Milestone Deliverable</span>
              </div>
              <div className="text-xs font-semibold text-slate-900 mb-1">
                {milestone.practicalProject.title}
              </div>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                {milestone.practicalProject.description}
              </p>
              <div className="text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-100 text-slate-700">
                <span className="font-semibold text-slate-900">Proof of Work: </span>
                <span>{milestone.practicalProject.deliverable}</span>
              </div>
            </div>
          )}

          {/* Interview Question */}
          {milestone.interviewQuestion && (
            <div className="p-3.5 bg-white rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  <span>College Internship / Job Interview Question</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowInterviewAnswer(!showInterviewAnswer)}
                  className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  {showInterviewAnswer ? 'Hide Guidance' : 'How to Answer'}
                </button>
              </div>
              <p className="text-xs font-medium text-slate-800 italic">
                "{milestone.interviewQuestion}"
              </p>
              {showInterviewAnswer && (
                <div className="mt-2 text-xs text-slate-600 bg-amber-50/50 p-2.5 rounded-lg border border-amber-100 leading-relaxed">
                  <span className="font-semibold text-amber-900">Pro-Tip for Students: </span>
                  When answering in college interviews, use the STAR format (Situation, Task, Action, Result). 
                  Explain the core tradeoff, how you implemented it in your project, and what you learned when debugging it.
                </div>
              )}
            </div>
          )}

          {/* Personal Student Study Notes */}
          <div className="p-3.5 bg-white rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <Edit3 className="w-3.5 h-3.5 text-slate-500" />
                <span>My Study Notes & Links</span>
              </div>
              {!isEditingNotes && (
                <button
                  type="button"
                  onClick={() => setIsEditingNotes(true)}
                  className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  {notes ? 'Edit Notes' : 'Add Note'}
                </button>
              )}
            </div>

            {isEditingNotes ? (
              <div className="space-y-2">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Jot down key takeaways, link to your GitHub repo, or questions for your professor..."
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-indigo-500 bg-white"
                  rows={3}
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingNotes(false)}
                    className="px-2.5 py-1 text-xs text-slate-500 hover:text-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveNotes}
                    className="px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Save Notes
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">
                {notes ? notes : 'No notes added yet. Click "Add Note" to log your project links or study insights.'}
              </p>
            )}
          </div>

          {/* Ask AI Career Mentor about this milestone */}
          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() => onAskAIAboutMilestone(milestone)}
              className="text-xs font-medium text-indigo-700 hover:text-indigo-900 flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI Mentor: "How do I master this milestone faster?"</span>
            </button>

            <button
              type="button"
              onClick={() => onToggleComplete(milestone.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                milestone.completed
                  ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {milestone.completed ? 'Mark as Incomplete' : 'Mark Milestone Done'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
