export interface StudentProfile {
  name: string;
  collegeYear: 'Freshman (1st Year)' | 'Sophomore (2nd Year)' | 'Junior (3rd Year)' | 'Senior (4th Year)' | 'Recent Graduate';
  major: string;
  interests: string[];
  strongSubjects: string[];
  preferredWorkStyle: 'Problem-Solving & Coding' | 'Visual & Creative Design' | 'Data & Statistical Analysis' | 'People & Strategy / Leadership' | 'Hands-on Building / Systems';
  weeklyHours: number;
  targetGoal: 'Summer Internship' | 'First Full-Time Job' | 'Skill Building & Projects' | 'Career Switch / Exploration';
}

export interface FreeResource {
  id: string;
  title: string;
  provider: string; // e.g. "Harvard CS50", "freeCodeCamp", "MIT OCW", "Kaggle", "Coursera Free Audit"
  url: string;
  type: 'Free Course' | 'Interactive Tutorial' | 'Documentation' | 'Guided Project' | 'Certification Pathway';
  durationHours?: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Milestone {
  id: string;
  phaseNumber: number;
  title: string;
  description: string;
  estimatedHours: number;
  skillsGained: string[];
  freeResources: FreeResource[];
  practicalProject: {
    title: string;
    description: string;
    deliverable: string;
  };
  interviewQuestion?: string;
  completed: boolean;
  notes?: string;
}

export interface RoadmapPhase {
  phaseNumber: number;
  phaseTitle: string;
  timeframe: string; // e.g. "Weeks 1 - 4"
  summary: string;
  milestones: Milestone[];
}

export interface CareerPath {
  id: string;
  title: string;
  category: 'Software Engineering' | 'Data & AI' | 'Product & Design' | 'Cloud & Cybersecurity' | 'Business & Growth';
  matchScore: number;
  matchReason: string;
  tagline: string;
  salaryRange: string;
  jobGrowth: string;
  typicalDay: string;
  coreSkills: string[];
  freeToolsUsed: string[];
  roadmap: RoadmapPhase[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  quickReplies?: string[];
}
