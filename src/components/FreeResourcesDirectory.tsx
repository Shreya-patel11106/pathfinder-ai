import React, { useState } from 'react';
import { Search, ExternalLink, BookOpen, GraduationCap, Award, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { FreeResource } from '../types';

interface CuratedResourceItem extends FreeResource {
  category: string;
  tags: string[];
  description: string;
  certification: 'Free Certificate' | 'Free Audit / Knowledge' | 'Project Portfolio Proof';
}

const ALL_FREE_RESOURCES: CuratedResourceItem[] = [
  {
    id: 'res-cs50x',
    title: 'CS50x: Introduction to Computer Science',
    provider: 'Harvard University',
    url: 'https://cs50.harvard.edu/x/',
    type: 'Free Course',
    difficulty: 'Beginner',
    durationHours: 60,
    category: 'Software Engineering',
    tags: ['C', 'Python', 'SQL', 'Algorithms', 'Harvard'],
    description: "The world's most acclaimed computer science course. Covers memory management, algorithms, data structures, and web dev. Completely free with free certificate.",
    certification: 'Free Certificate',
  },
  {
    id: 'res-fcc-web',
    title: 'Responsive Web Design Certification',
    provider: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
    type: 'Interactive Tutorial',
    difficulty: 'Beginner',
    durationHours: 30,
    category: 'Software Engineering',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Projects'],
    description: 'Learn modern HTML5 and CSS through hands-on browser exercises and build 5 required portfolio projects to earn your verified certificate.',
    certification: 'Free Certificate',
  },
  {
    id: 'res-odin-project',
    title: 'The Odin Project: Full Stack JavaScript',
    provider: 'The Odin Project',
    url: 'https://www.theodinproject.com/',
    type: 'Free Course',
    difficulty: 'Beginner',
    durationHours: 120,
    category: 'Software Engineering',
    tags: ['JavaScript', 'React', 'NodeJS', 'Git', 'Linux'],
    description: 'Open source curriculum that guides you from complete beginner to job-ready developer by having you build real applications in your local environment.',
    certification: 'Project Portfolio Proof',
  },
  {
    id: 'res-kaggle-python-pandas',
    title: 'Python & Pandas for Data Science',
    provider: 'Kaggle Learn',
    url: 'https://www.kaggle.com/learn/python',
    type: 'Interactive Tutorial',
    difficulty: 'Beginner',
    durationHours: 10,
    category: 'Data & AI',
    tags: ['Python', 'Pandas', 'Dataframes', 'Kaggle'],
    description: 'Bite-sized micro-courses with interactive Jupyter notebooks right in your browser. Complete hands-on coding exercises to earn digital certificates.',
    certification: 'Free Certificate',
  },
  {
    id: 'res-mit-ocw-linear',
    title: '18.06 Linear Algebra by Prof. Gilbert Strang',
    provider: 'MIT OpenCourseWare',
    url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
    type: 'Free Course',
    difficulty: 'Intermediate',
    durationHours: 45,
    category: 'Data & AI',
    tags: ['Linear Algebra', 'Matrices', 'Machine Learning Foundations', 'MIT'],
    description: 'The definitive foundation for AI and Machine Learning math. Includes complete lecture videos, syllabus, assignments, and solution sets.',
    certification: 'Free Audit / Knowledge',
  },
  {
    id: 'res-react-dev',
    title: 'Official React Documentation & Sandboxes',
    provider: 'React.dev',
    url: 'https://react.dev/learn',
    type: 'Documentation',
    difficulty: 'Beginner',
    durationHours: 25,
    category: 'Software Engineering',
    tags: ['React', 'Hooks', 'Components', 'State'],
    description: 'Re-architected from scratch with interactive interactive component sandboxes and comprehensive explanations of modern React architecture.',
    certification: 'Project Portfolio Proof',
  },
  {
    id: 'res-google-ux-audit',
    title: 'Google UX Design Certificate (Free Audit Mode)',
    provider: 'Coursera / Google',
    url: 'https://www.coursera.org/professional-certificates/google-ux-design',
    type: 'Free Course',
    difficulty: 'Beginner',
    durationHours: 40,
    category: 'Product & Design',
    tags: ['UX Research', 'Figma', 'Wireframing', 'Prototypes'],
    description: 'Enroll using the "Audit the Course" button or apply for Coursera 100% Financial Aid. Learn user research, wireframing, and Figma prototypes.',
    certification: 'Free Audit / Knowledge',
  },
  {
    id: 'res-tryhackme-pre',
    title: 'TryHackMe: Pre-Security & Intro to Cybersecurity',
    provider: 'TryHackMe',
    url: 'https://tryhackme.com/path/outline/pre-security',
    type: 'Interactive Tutorial',
    difficulty: 'Beginner',
    durationHours: 25,
    category: 'Cloud & Cybersecurity',
    tags: ['Networking', 'Linux', 'Web Security', 'Hands-on Labs'],
    description: 'Gamified interactive cybersecurity platform where you learn how networks, web servers, and cyber defense mechanisms operate.',
    certification: 'Free Certificate',
  },
  {
    id: 'res-prof-messer-sec',
    title: 'CompTIA Security+ SY0-701 Training Series',
    provider: 'Professor Messer',
    url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/',
    type: 'Free Course',
    difficulty: 'Intermediate',
    durationHours: 35,
    category: 'Cloud & Cybersecurity',
    tags: ['Security+', 'Cryptography', 'SOC Defense', 'Networking'],
    description: 'The complete video training course covering all objectives for the industry-standard Security+ certification, 100% free with no paywall.',
    certification: 'Free Audit / Knowledge',
  },
  {
    id: 'res-linux-journey-site',
    title: 'Linux Journey: Complete Interactive Guide',
    provider: 'Linux Journey',
    url: 'https://linuxjourney.com/',
    type: 'Interactive Tutorial',
    difficulty: 'Beginner',
    durationHours: 15,
    category: 'Cloud & Cybersecurity',
    tags: ['Linux', 'CLI', 'Permissions', 'Processes', 'Bash'],
    description: 'A beautifully structured guide for students to master the Linux terminal, command navigation, system administration, and permissions.',
    certification: 'Project Portfolio Proof',
  },
  {
    id: 'res-neetcode-org',
    title: 'NeetCode 150 Coding Interview Roadmap',
    provider: 'NeetCode.io',
    url: 'https://neetcode.io/roadmap',
    type: 'Interactive Tutorial',
    difficulty: 'Intermediate',
    durationHours: 40,
    category: 'Software Engineering',
    tags: ['Data Structures', 'Algorithms', 'LeetCode', 'Interview Prep'],
    description: 'The golden standard roadmap for college students preparing for software engineering technical interviews. Free video explanations for every pattern.',
    certification: 'Project Portfolio Proof',
  },
  {
    id: 'res-sqlbolt-interactive',
    title: 'SQLBolt: Interactive Lessons and Exercises',
    provider: 'SQLBolt',
    url: 'https://sqlbolt.com/',
    type: 'Interactive Tutorial',
    difficulty: 'Beginner',
    durationHours: 8,
    category: 'Data & AI',
    tags: ['SQL', 'Queries', 'Joins', 'Aggregations', 'Databases'],
    description: 'Interactive browser-based database lessons where you run real SQL queries on interactive datasets with instant automated validation.',
    certification: 'Project Portfolio Proof',
  }
];

export const FreeResourcesDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = ['all', 'Software Engineering', 'Data & AI', 'Product & Design', 'Cloud & Cybersecurity'];

  const filteredResources = ALL_FREE_RESOURCES.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || res.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Title & introduction */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase mb-1">
          <span>Curated Free College Education Hub</span>
          <span aria-hidden="true">·</span>
          <span>Verified Zero Cost</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          100% Free Learning Courses & Tools
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          You don't need a $15,000 coding bootcamp. Every course, interactive tutorial, and platform in this directory is either completely free or includes an official free student audit tier.
        </p>
      </div>

      {/* College Student Perks Callout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-4 text-xs text-indigo-950 space-y-1.5">
          <div className="font-bold flex items-center gap-1.5 text-indigo-900">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span>GitHub Student Developer Pack (Free with College Email)</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Every enrolled college student can get $200k+ in free developer tools: free GitHub Copilot, free JetBrains IDEs, free cloud hosting credits, and free domain registration at <a href="https://education.github.com/pack" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-indigo-700">education.github.com/pack</a>.
          </p>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-4 text-xs text-emerald-950 space-y-1.5">
          <div className="font-bold flex items-center gap-1.5 text-emerald-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Coursera 100% Free Financial Aid Hack</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            On any Coursera course page, click "Financial Aid Available" next to the Enroll button. State your college background and career aspiration—Coursera approves 100% free tuition with verified certificates for students within ~14 days.
          </p>
        </div>
      </div>

      {/* Filter and search toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses, skills (e.g. Python, React, SQL, Linux)..."
            className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-indigo-500 bg-white"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white font-semibold shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat === 'all' ? 'All Tracks' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between overflow-hidden group"
          >
            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-semibold text-indigo-700">{res.provider}</span>
                <span className="font-mono text-slate-400">{res.difficulty}</span>
              </div>

              <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                {res.title}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {res.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                {res.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold text-emerald-700">
                {res.certification}
              </span>

              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                <span>Start Learning Free</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-2" />
          <h4 className="text-base font-bold text-slate-900">No courses match your query</h4>
          <p className="text-xs text-slate-500 mt-1">Try clearing your search keyword or switching the category filter.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-3 px-4 py-2 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
