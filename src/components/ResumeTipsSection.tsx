import React, { useState } from 'react';
import { Award, CheckCircle2, Copy, Check, Sparkles, BookOpen } from 'lucide-react';
import { GENERAL_INTERNSHIP_TIPS } from '../data/careerData';

export const ResumeTipsSection: React.FC = () => {
  const [accomplished, setAccomplished] = useState('Increased website performance by 40%');
  const [measured, setMeasured] = useState('measured by Google Lighthouse load scores');
  const [action, setAction] = useState('by refactoring React state and implementing image lazy loading');
  const [copied, setCopied] = useState(false);

  const bulletPoint = `${accomplished.trim()}, as ${measured.trim()}, ${action.trim()}.`;

  const handleCopyBullet = () => {
    navigator.clipboard.writeText(bulletPoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase mb-1">
          <span>Internship Application Accelerator</span>
          <span aria-hidden="true">·</span>
          <span>Google X-Y-Z Formula</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Craft Standout Resume Bullet Points That Recruiters Read
        </h3>
        <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Top tech recruiters reject vague bullets like "Helped build a website". Use the official Google formula: 
          <strong> "Accomplished [X], as measured by [Y], by doing [Z]"</strong>.
        </p>
      </div>

      {/* Interactive Bullet Point Generator */}
      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
        <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Interactive Resume Bullet Point Builder</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              [X] What did you accomplish?
            </label>
            <input
              type="text"
              value={accomplished}
              onChange={(e) => setAccomplished(e.target.value)}
              placeholder="e.g. Built automated customer support bot"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              [Y] How was impact measured?
            </label>
            <input
              type="text"
              value={measured}
              onChange={(e) => setMeasured(e.target.value)}
              placeholder="e.g. reducing response latency by 35%"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              [Z] What specific action took place?
            </label>
            <input
              type="text"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              placeholder="e.g. by integrating Gemini API with Express"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Live Generated Bullet */}
        <div className="p-4 bg-white rounded-xl border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-800 font-medium leading-relaxed">
            <span className="text-indigo-600 font-bold">• </span>
            {bulletPoint}
          </div>
          <button
            type="button"
            onClick={handleCopyBullet}
            className="px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Bullet'}</span>
          </button>
        </div>
      </div>

      {/* 4 Practical College Job Hunt Rules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {GENERAL_INTERNSHIP_TIPS.map((tip) => (
          <div key={tip.title} className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 text-xs space-y-1">
            <h4 className="font-bold text-slate-900">{tip.title}</h4>
            <p className="text-slate-600 leading-relaxed">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
