import { CareerPath } from '../types';

export const POPULAR_INTERESTS = [
  'Web Development',
  'Artificial Intelligence & Machine Learning',
  'Mobile App Development',
  'UI/UX Design',
  'Data Science & Analytics',
  'Cybersecurity & Ethical Hacking',
  'Cloud Computing & DevOps',
  'Product Management',
  'Game Development',
  'Business Analytics',
  'Digital Marketing',
  'Open Source Software',
  'Biotech & Health Informatics',
  'Finance & FinTech'
];

export const COLLEGE_MAJORS = [
  'Computer Science / IT',
  'Data Science / Statistics',
  'Electrical & Computer Engineering',
  'Business Administration / Finance',
  'Graphic Design / Digital Media',
  'Mechanical / Civil Engineering',
  'Psychology / Cognitive Science',
  'Biology / Life Sciences',
  'Economics / Mathematics',
  'Communications / Marketing',
  'Undecided / Exploring'
];

export const PRESET_CAREER_PATHS: CareerPath[] = [
  {
    id: 'full-stack-web-developer',
    title: 'Full Stack Web Developer',
    category: 'Software Engineering',
    matchScore: 96,
    matchReason: 'Excels at building tangible interactive applications and bridging user experience with backend data.',
    tagline: 'Build end-to-end web apps that thousands of people use every day.',
    salaryRange: '$75,000 - $115,000 (Entry Level)',
    jobGrowth: '+25% (Faster than average)',
    typicalDay: 'Collaborating in morning standup meetings, writing TypeScript/React components, designing Express or Node.js API routes, reviewing pull requests on GitHub, and fixing bugs.',
    coreSkills: ['HTML/CSS/Tailwind', 'JavaScript & TypeScript', 'React', 'Node.js/Express', 'PostgreSQL/MongoDB', 'Git & GitHub'],
    freeToolsUsed: ['VS Code', 'GitHub', 'Vite', 'Postman Free', 'Render/Vercel Free Tier'],
    roadmap: [
      {
        phaseNumber: 1,
        phaseTitle: 'Phase 1: Web Fundamentals & Version Control',
        timeframe: 'Weeks 1 - 4',
        summary: 'Master semantic HTML5, modern CSS3 layout systems (Flexbox and Grid), and Git collaboration workflows.',
        milestones: [
          {
            id: 'fs-1-1',
            phaseNumber: 1,
            title: 'Semantic HTML5 & Responsive CSS with Flexbox & Grid',
            description: 'Learn structure, accessibility (a11y), responsive breakpoints, and modern CSS layout techniques without relying on frameworks initially.',
            estimatedHours: 20,
            skillsGained: ['HTML5 Tags', 'Responsive Design', 'CSS Flexbox', 'CSS Grid', 'Web Accessibility'],
            freeResources: [
              {
                id: 'res-fcc-responsive',
                title: 'Responsive Web Design Certification',
                provider: 'freeCodeCamp (100% Free)',
                url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
                type: 'Interactive Tutorial',
                durationHours: 30,
                difficulty: 'Beginner'
              },
              {
                id: 'res-mdn-basics',
                title: 'MDN Web Docs: Learn Web Development',
                provider: 'Mozilla Developer Network',
                url: 'https://developer.mozilla.org/en-US/docs/Learn',
                type: 'Documentation',
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Personal Portfolio Landing Page',
              description: 'Build a fully responsive multi-section portfolio showcasing your bio, hobbies, and contact form using only clean HTML & CSS.',
              deliverable: 'Live GitHub Pages website and repository link'
            },
            interviewQuestion: 'Explain the difference between CSS Flexbox (1D) and CSS Grid (2D), and when you would use each.',
            completed: false
          },
          {
            id: 'fs-1-2',
            phaseNumber: 1,
            title: 'Modern JavaScript (ES6+) Fundamentals & DOM Manipulation',
            description: 'Understand variables (let/const), arrow functions, array methods (map, filter, reduce), async/await, and event listeners.',
            estimatedHours: 25,
            skillsGained: ['ES6 Syntax', 'DOM Manipulation', 'Event Handling', 'Fetch API', 'JSON'],
            freeResources: [
              {
                id: 'res-javascript-info',
                title: 'The Modern JavaScript Tutorial',
                provider: 'javascript.info (Free Open Source)',
                url: 'https://javascript.info/',
                type: 'Interactive Tutorial',
                durationHours: 25,
                difficulty: 'Beginner'
              },
              {
                id: 'res-odin-js',
                title: 'JavaScript Course - The Odin Project',
                provider: 'The Odin Project',
                url: 'https://www.theodinproject.com/paths/foundations/courses/foundations',
                type: 'Free Course',
                durationHours: 20,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Interactive Student Budget & Expense Tracker',
              description: 'Create an app where students can log college expenses, filter by categories, calculate balances, and save items in browser LocalStorage.',
              deliverable: 'Working web app with zero dependencies'
            },
            interviewQuestion: 'What is the JavaScript Event Loop, and how does asynchronous code execute without freezing the UI?',
            completed: false
          },
          {
            id: 'fs-1-3',
            phaseNumber: 1,
            title: 'Git Version Control & Open Source GitHub Workflows',
            description: 'Master branch creation, commits, merging, merge conflicts, pull requests, and pushing code to GitHub repositories.',
            estimatedHours: 12,
            skillsGained: ['Git CLI', 'GitHub Repositories', 'Branching', 'Pull Requests', 'Markdown READMEs'],
            freeResources: [
              {
                id: 'res-github-skills',
                title: 'Introduction to GitHub Hands-on Course',
                provider: 'GitHub Skills',
                url: 'https://skills.github.com/',
                type: 'Guided Project',
                durationHours: 6,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'GitHub Profile README & Repository Showcase',
              description: 'Design a professional GitHub profile with custom Markdown, pinned repositories, and a clean commit history.',
              deliverable: 'Public GitHub profile with customized badges and portfolio link'
            },
            interviewQuestion: 'What is the difference between git fetch and git pull?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseTitle: 'Phase 2: Modern Frontend Frameworks & TypeScript',
        timeframe: 'Weeks 5 - 10',
        summary: 'Learn React, component-driven UI architecture, state management hooks, and type safety with TypeScript.',
        milestones: [
          {
            id: 'fs-2-1',
            phaseNumber: 2,
            title: 'React Core Architecture: Hooks, Props, & State',
            description: 'Learn useState, useEffect, custom hooks, component composition, and handling user inputs reliably.',
            estimatedHours: 30,
            skillsGained: ['React Components', 'useState & useEffect', 'Component Lifecycle', 'Conditional Rendering'],
            freeResources: [
              {
                id: 'res-react-docs',
                title: 'Official React Documentation & Interactive Sandbox',
                provider: 'React.dev (Official)',
                url: 'https://react.dev/learn',
                type: 'Documentation',
                durationHours: 20,
                difficulty: 'Beginner'
              },
              {
                id: 'res-scrimba-react',
                title: 'Learn React for Free',
                provider: 'freeCodeCamp YouTube / Scrimba',
                url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
                type: 'Free Course',
                durationHours: 12,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Interactive Study Planner & Task Board',
              description: 'Build a Kanban-style task board where students can drag or move assignments between To Do, Doing, and Done with local persistence.',
              deliverable: 'React web application with real state management'
            },
            interviewQuestion: 'Why does React require keys when rendering lists of elements, and what happens if you use array indices?',
            completed: false
          },
          {
            id: 'fs-2-2',
            phaseNumber: 2,
            title: 'TypeScript for Frontend & Robust Development',
            description: 'Add static typing to React components: interfaces, type unions, generics, and typed event handlers.',
            estimatedHours: 18,
            skillsGained: ['Type Annotations', 'Interfaces', 'Generics', 'React + TypeScript'],
            freeResources: [
              {
                id: 'res-ts-handbook',
                title: 'TypeScript Handbook for JavaScript Developers',
                provider: 'Microsoft TypeScript Docs',
                url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
                type: 'Documentation',
                durationHours: 15,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'College Course Catalog & GPA Calculator',
              description: 'Create a typed course registry where students input classes, credit hours, and letter grades to calculate real-time cumulative GPAs.',
              deliverable: 'TypeScript React web application with zero `any` types'
            },
            interviewQuestion: 'What are the main advantages of TypeScript over vanilla JavaScript in large codebases?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseTitle: 'Phase 3: Backend APIs, Databases & Server Architecture',
        timeframe: 'Weeks 11 - 16',
        summary: 'Build RESTful API endpoints, connect relational/NoSQL databases, and implement user authentication.',
        milestones: [
          {
            id: 'fs-3-1',
            phaseNumber: 3,
            title: 'Node.js & Express REST API Design',
            description: 'Learn routing, request/response lifecycle, middleware, error handling, and environment variables.',
            estimatedHours: 25,
            skillsGained: ['Node.js', 'Express.js', 'RESTful Endpoints', 'Middleware', 'Postman Testing'],
            freeResources: [
              {
                id: 'res-fcc-backend',
                title: 'Back End Development and APIs Certification',
                provider: 'freeCodeCamp (100% Free)',
                url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
                type: 'Interactive Tutorial',
                durationHours: 35,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'Student Notes & Resource Sharing API',
              description: 'Create an Express API that performs CRUD operations on student study notes with search and tag filtering.',
              deliverable: 'Tested REST API with Postman test collection'
            },
            interviewQuestion: 'What is the role of middleware in Express.js, and how does the `next()` callback work?',
            completed: false
          },
          {
            id: 'fs-3-2',
            phaseNumber: 3,
            title: 'Relational Database Modeling with PostgreSQL & SQL',
            description: 'Learn schema design, primary and foreign keys, table joins (INNER, LEFT), indexing, and SQL queries.',
            estimatedHours: 20,
            skillsGained: ['SQL Queries', 'PostgreSQL', 'Schema Normalization', 'Database Joins'],
            freeResources: [
              {
                id: 'res-sqlbolt',
                title: 'SQLBolt: Interactive Lessons on SQL',
                provider: 'SQLBolt (Free)',
                url: 'https://sqlbolt.com/',
                type: 'Interactive Tutorial',
                durationHours: 10,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Campus Book Exchange Database Schema',
              description: 'Design and query a multi-table database tracking books, student sellers, and transaction statuses.',
              deliverable: 'SQL script creating tables, constraints, and 5 analytical queries'
            },
            interviewQuestion: 'Explain the difference between INNER JOIN, LEFT JOIN, and when you should add a database index.',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 4,
        phaseTitle: 'Phase 4: Capstone Project, Resume & Internship Readiness',
        timeframe: 'Weeks 17 - 20',
        summary: 'Ship a full-stack capstone application on free cloud hosting, prepare your technical resume, and practice coding interviews.',
        milestones: [
          {
            id: 'fs-4-1',
            phaseNumber: 4,
            title: 'Full Stack Capstone Deployment on Free Cloud Hosting',
            description: 'Connect React frontend + Express backend + database and deploy live with automated CI/CD.',
            estimatedHours: 35,
            skillsGained: ['Cloud Deployment', 'Render / Vercel', 'Environment Config', 'Full Stack Integration'],
            freeResources: [
              {
                id: 'res-deploy-guide',
                title: 'Deploy Full-Stack Web Apps for Free',
                provider: 'freeCodeCamp Guide',
                url: 'https://www.freecodecamp.org/news/how-to-deploy-websites-and-web-apps-for-free/',
                type: 'Documentation',
                durationHours: 8,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'Complete Full-Stack Web Application',
              description: 'A production-ready full-stack application (e.g., Campus Event Finder, Peer Tutoring Platform) deployed on free tier hosting with a live URL.',
              deliverable: 'Live working URL + GitHub repo with clear README and demo screenshots'
            },
            interviewQuestion: 'Walk me through how your capstone app works from when a user clicks a button to how the server updates the database.',
            completed: false
          },
          {
            id: 'fs-4-2',
            phaseNumber: 4,
            title: 'Technical Resume & LeetCode/NeetCode Practice for College Internships',
            description: 'Format your tech resume using the Google X-Y-Z formula and master foundational Data Structures & Algorithms (Arrays, Two Pointers, Hash Maps).',
            estimatedHours: 25,
            skillsGained: ['Tech Resume Writing', 'STAR Method', 'Data Structures', 'Algorithmic Problem Solving'],
            freeResources: [
              {
                id: 'res-neetcode-roadmap',
                title: 'NeetCode 150 Free Coding Interview Roadmap',
                provider: 'NeetCode.io (100% Free)',
                url: 'https://neetcode.io/roadmap',
                type: 'Interactive Tutorial',
                durationHours: 30,
                difficulty: 'Intermediate'
              },
              {
                id: 'res-harvard-cs50',
                title: 'CS50: Introduction to Computer Science',
                provider: 'Harvard University (Free on edX)',
                url: 'https://cs50.harvard.edu/x/',
                type: 'Free Course',
                durationHours: 60,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: '1-Page Tech Resume & 20 Solved LeetCode Problems',
              description: 'Create an ATS-friendly single-page resume highlighting your capstone and projects, plus solve 20 beginner/medium algorithmic problems.',
              deliverable: 'PDF Resume + LeetCode profile link with 20+ problems solved'
            },
            interviewQuestion: 'How would you find if a string contains duplicate characters in O(n) time?',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 'data-analyst-ai-specialist',
    title: 'Data Analyst & AI Practitioner',
    category: 'Data & AI',
    matchScore: 94,
    matchReason: 'Thrives when finding patterns in numbers, translating data into visual dashboards, and leveraging machine learning.',
    tagline: 'Transform raw datasets into actionable intelligence and build AI-powered solutions.',
    salaryRange: '$70,000 - $105,000 (Entry Level)',
    jobGrowth: '+33% (Much faster than average)',
    typicalDay: 'Querying business databases with SQL, cleaning datasets in Python/Pandas, building interactive visual dashboards, and prompting AI models for automated insights.',
    coreSkills: ['Python (Pandas, NumPy)', 'SQL & Relational Databases', 'Tableau / Power BI Public', 'Data Storytelling', 'Gemini / LLM Prompt Engineering', 'Statistics'],
    freeToolsUsed: ['Jupyter Notebooks', 'Google Colab Free', 'Kaggle Datasets', 'PostgreSQL', 'Tableau Public Free'],
    roadmap: [
      {
        phaseNumber: 1,
        phaseTitle: 'Phase 1: Python for Data Analysis & Statistical Thinking',
        timeframe: 'Weeks 1 - 4',
        summary: 'Learn Python syntax, control flow, functions, and key statistical concepts used in business decision-making.',
        milestones: [
          {
            id: 'da-1-1',
            phaseNumber: 1,
            title: 'Python for Beginners & Data Manipulation with Pandas',
            description: 'Read CSV/Excel files, filter rows, aggregate values with groupby, and handle missing values.',
            estimatedHours: 25,
            skillsGained: ['Python Basics', 'Pandas DataFrames', 'Data Cleaning', 'Aggregation'],
            freeResources: [
              {
                id: 'res-kaggle-python',
                title: 'Kaggle Learn: Python & Pandas Free Courses',
                provider: 'Kaggle (Free with Certificate)',
                url: 'https://www.kaggle.com/learn/python',
                type: 'Interactive Tutorial',
                durationHours: 15,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'College Tuition vs Graduate Earnings Analysis',
              description: 'Clean and explore an open government dataset of college costs and alumni salaries to find highest-ROI degrees.',
              deliverable: 'Google Colab notebook with charts and insights summary'
            },
            interviewQuestion: 'What is the difference between loc and iloc in Pandas, and how do you handle missing values in a dataset?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseTitle: 'Phase 2: Advanced SQL & Business Intelligence Dashboards',
        timeframe: 'Weeks 5 - 10',
        summary: 'Write complex SQL window functions, CTEs, and build interactive dashboards that tell compelling stories.',
        milestones: [
          {
            id: 'da-2-1',
            phaseNumber: 2,
            title: 'SQL for Data Analysis: CTEs, Subqueries & Window Functions',
            description: 'Master RANK, DENSE_RANK, moving averages, date calculations, and multi-table joins on real business metrics.',
            estimatedHours: 25,
            skillsGained: ['Window Functions', 'Common Table Expressions (CTEs)', 'Cohort Analysis', 'SQL Optimization'],
            freeResources: [
              {
                id: 'res-datalemur',
                title: 'DataLemur SQL Interview Practice (Free)',
                provider: 'DataLemur',
                url: 'https://datalemur.com/',
                type: 'Interactive Tutorial',
                durationHours: 15,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'E-Commerce Sales & Customer Retention SQL Analysis',
              description: 'Write 8 SQL queries analyzing customer churn, average order value, and top product categories.',
              deliverable: 'SQL file and write-up explaining business findings'
            },
            interviewQuestion: 'Explain the difference between ROW_NUMBER(), RANK(), and DENSE_RANK() in SQL.',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseTitle: 'Phase 3: Machine Learning & Generative AI Integration',
        timeframe: 'Weeks 11 - 16',
        summary: 'Learn introductory machine learning algorithms with scikit-learn and build generative AI applications.',
        milestones: [
          {
            id: 'da-3-1',
            phaseNumber: 3,
            title: 'Intro to Machine Learning & scikit-learn',
            description: 'Understand supervised vs unsupervised learning, train-test splits, linear regression, and classification metrics.',
            estimatedHours: 25,
            skillsGained: ['Scikit-Learn', 'Train-Test Split', 'Model Evaluation', 'Confusion Matrix'],
            freeResources: [
              {
                id: 'res-kaggle-intro-ml',
                title: 'Kaggle Intro to Machine Learning',
                provider: 'Kaggle (Free)',
                url: 'https://www.kaggle.com/learn/intro-to-machine-learning',
                type: 'Interactive Tutorial',
                durationHours: 12,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Student Exam Score Predictor Model',
              description: 'Train a regression model predicting student performance based on study hours, attendance, and previous test scores.',
              deliverable: 'Trained model notebook with feature importance evaluation'
            },
            interviewQuestion: 'What is overfitting in machine learning and how do you prevent it?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 4,
        phaseTitle: 'Phase 4: Data Portfolio Website & Internship Interview Prep',
        timeframe: 'Weeks 17 - 20',
        summary: 'Publish 3 portfolio case studies on GitHub and practice behavioral + SQL live coding interviews.',
        milestones: [
          {
            id: 'da-4-1',
            phaseNumber: 4,
            title: 'Data Science Portfolio Case Studies on GitHub',
            description: 'Write clear executive summaries, methodology sections, and interactive visualizations.',
            estimatedHours: 20,
            skillsGained: ['Technical Writing', 'Data Storytelling', 'Portfolio Presentation'],
            freeResources: [
              {
                id: 'res-portfolio-guide',
                title: 'How to Build a Winning Data Analyst Portfolio',
                provider: 'Towards Data Science / Medium Free',
                url: 'https://towardsdatascience.com/',
                type: 'Documentation',
                durationHours: 5,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: '3-Project Public Data Portfolio',
              description: 'A polished GitHub repository with 3 projects: an exploratory SQL project, an interactive dashboard, and a predictive ML model.',
              deliverable: 'GitHub repository with executive summaries and chart screenshots'
            },
            interviewQuestion: 'Walk me through a time when a dataset had unexpected outliers or missing values and how you resolved it.',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 'ui-ux-product-designer',
    title: 'UI/UX & Product Designer',
    category: 'Product & Design',
    matchScore: 91,
    matchReason: 'Combines empathy for user challenges with visual craft, typography, layout hierarchy, and interactive prototypes.',
    tagline: 'Design intuitive, accessible digital experiences and craft interfaces people love.',
    salaryRange: '$68,000 - $98,000 (Entry Level)',
    jobGrowth: '+16% (Faster than average)',
    typicalDay: 'Conducting user interviews, synthesizing feedback into user personas, sketching wireframes in Figma, building interactive clickable prototypes, and handing off specs to developers.',
    coreSkills: ['Figma (Auto Layout & Components)', 'User Research & Journey Mapping', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'Accessibility (WCAG AA)'],
    freeToolsUsed: ['Figma Free Starter', 'FigJam Free', 'Google Forms', 'Coolors.co', 'Lucide Icons'],
    roadmap: [
      {
        phaseNumber: 1,
        phaseTitle: 'Phase 1: Design Principles & Figma Mastery',
        timeframe: 'Weeks 1 - 4',
        summary: 'Learn typography, spacing scales, color theory, contrast accessibility, and Figma auto-layout.',
        milestones: [
          {
            id: 'des-1-1',
            phaseNumber: 1,
            title: 'Visual Hierarchy, Typography & Figma Auto Layout',
            description: 'Master spacing, typography scales, responsive frames, component variants, and interactive states in Figma.',
            estimatedHours: 25,
            skillsGained: ['Figma Auto Layout', 'Component Sets', 'Design Hierarchy', 'Spacing Systems'],
            freeResources: [
              {
                id: 'res-figma-youtube',
                title: 'Figma for Beginners Official Series',
                provider: 'Figma Official YouTube',
                url: 'https://www.youtube.com/c/Figmadesign',
                type: 'Free Course',
                durationHours: 15,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Redesign a Clunky University Portal Page',
              description: 'Take a confusing college registration or dining hall schedule page and redesign it into a clean, modern Figma mobile and desktop view.',
              deliverable: 'Figma public link with before & after comparison'
            },
            interviewQuestion: 'How do you choose typography and color palettes that comply with WCAG accessibility guidelines?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseTitle: 'Phase 2: User Research & Wireframing',
        timeframe: 'Weeks 5 - 10',
        summary: 'Interview real college students, formulate user problem statements, and build low-fidelity wireframes.',
        milestones: [
          {
            id: 'des-2-1',
            phaseNumber: 2,
            title: 'User Interviews & Journey Mapping',
            description: 'Conduct 3-5 structured interviews, extract pain points, create personas, and map the user flow.',
            estimatedHours: 20,
            skillsGained: ['User Research', 'Empathy Mapping', 'Information Architecture', 'User Flows'],
            freeResources: [
              {
                id: 'res-coursera-google-ux-audit',
                title: 'Google UX Design Professional Certificate (Free Audit on Coursera)',
                provider: 'Coursera (Free Audit Option)',
                url: 'https://www.coursera.org/professional-certificates/google-ux-design',
                type: 'Free Course',
                durationHours: 40,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Campus Roommate & Study Buddy Matching App Concept',
              description: 'Document user interviews, define 2 personas, and draw user journey maps.',
              deliverable: 'FigJam research board with synthesized interview takeaways'
            },
            interviewQuestion: 'What is the difference between qualitative and quantitative user research, and when should you use each?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseTitle: 'Phase 3: High-Fidelity Prototyping & Usability Testing',
        timeframe: 'Weeks 11 - 16',
        summary: 'Create clickable prototypes with micro-interactions, run moderated usability tests, and iterate.',
        milestones: [
          {
            id: 'des-3-1',
            phaseNumber: 3,
            title: 'Interactive Figma Prototype & Usability Testing',
            description: 'Add animations, transitions, and test with 5 users to identify usability friction points.',
            estimatedHours: 25,
            skillsGained: ['Prototyping', 'Usability Testing', 'Iteration', 'Design Critique'],
            freeResources: [
              {
                id: 'res-nngroup',
                title: 'Nielsen Norman Group UX Research Articles',
                provider: 'NN/g (Free Articles)',
                url: 'https://www.nngroup.com/articles/',
                type: 'Documentation',
                durationHours: 10,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'Clickable High-Fidelity Mobile App Prototype',
              description: 'A fully clickable Figma prototype with at least 8 screens and interactive micro-interactions.',
              deliverable: 'Shareable Figma interactive prototype link'
            },
            interviewQuestion: 'Can you describe a situation where user testing invalidated an initial design assumption?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 4,
        phaseTitle: 'Phase 4: Case Study Presentation & Portfolio Site',
        timeframe: 'Weeks 17 - 20',
        summary: 'Write 2 in-depth case studies following the Problem-Solution-Outcome framework and publish on a free portfolio site.',
        milestones: [
          {
            id: 'des-4-1',
            phaseNumber: 4,
            title: 'UX Design Portfolio with 2 Complete Case Studies',
            description: 'Format each case study to show problem statement, research findings, sketches, wireframes, iterations, and final prototype.',
            estimatedHours: 30,
            skillsGained: ['Case Study Writing', 'Portfolio Presentation', 'Design Storytelling'],
            freeResources: [
              {
                id: 'res-uxfolio-tips',
                title: 'How to Write a UX Case Study That Gets Interviews',
                provider: 'Free Design Guides',
                url: 'https://uxdesign.cc/',
                type: 'Documentation',
                durationHours: 8,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'Personal UX Design Portfolio',
              description: 'Host your portfolio on GitHub Pages, Notion, or Webflow Free containing 2 end-to-end case studies.',
              deliverable: 'Live portfolio link ready to submit to recruiters'
            },
            interviewQuestion: 'Walk me through your design process from receiving a brief to final developer handoff.',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst & SOC Defender',
    category: 'Cloud & Cybersecurity',
    matchScore: 89,
    matchReason: 'Passionate about protecting digital systems, understanding vulnerabilities, and defending networks against threats.',
    tagline: 'Defend organizations against digital threats and safeguard critical data infrastructure.',
    salaryRange: '$75,000 - $110,000 (Entry Level)',
    jobGrowth: '+32% (Tremendous demand worldwide)',
    typicalDay: 'Monitoring security event logs, investigating suspicious login anomalies, assessing system vulnerabilities, analyzing phishing attempts, and maintaining firewall rules.',
    coreSkills: ['Network Protocols (TCP/IP, DNS, HTTP)', 'Linux Administration', 'Security Information & Event Management (SIEM)', 'Vulnerability Assessment', 'Threat Analysis', 'Wireshark'],
    freeToolsUsed: ['Wireshark', 'VirtualBox', 'Kali Linux Free', 'TryHackMe Free Rooms', 'OverTheWire Wargames'],
    roadmap: [
      {
        phaseNumber: 1,
        phaseTitle: 'Phase 1: Computer Networking & Linux Command Line',
        timeframe: 'Weeks 1 - 4',
        summary: 'Understand the OSI 7-layer model, packet inspection with Wireshark, and essential Linux commands.',
        milestones: [
          {
            id: 'cy-1-1',
            phaseNumber: 1,
            title: 'Computer Networking Foundations & Wireshark Packet Analysis',
            description: 'Learn IP addressing, subnets, DHCP, DNS, TCP handshakes, and capture network packets with Wireshark.',
            estimatedHours: 25,
            skillsGained: ['Networking Fundamentals', 'OSI Model', 'Packet Capture', 'Wireshark'],
            freeResources: [
              {
                id: 'res-prof-messer-net',
                title: 'CompTIA Network+ Free Video Training Course',
                provider: 'Professor Messer (100% Free)',
                url: 'https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course/',
                type: 'Free Course',
                durationHours: 30,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Home Network Security Audit & Packet Capture',
              description: 'Run Wireshark, analyze an unencrypted HTTP traffic capture vs HTTPS, and map your home or lab subnet.',
              deliverable: 'Written network audit report with annotated Wireshark packet screenshots'
            },
            interviewQuestion: 'Explain the 3-way TCP handshake (SYN, SYN-ACK, ACK) and what happens when a connection terminates.',
            completed: false
          },
          {
            id: 'cy-1-2',
            phaseNumber: 1,
            title: 'Linux Command Line & OverTheWire Bandit Wargame',
            description: 'Learn file permissions (chmod, chown), grep, find, SSH, pipes, and shell scripting.',
            estimatedHours: 20,
            skillsGained: ['Linux Commands', 'SSH Keys', 'Bash Scripting', 'File Permissions'],
            freeResources: [
              {
                id: 'res-overthewire',
                title: 'OverTheWire: Bandit Linux Security Wargame',
                provider: 'OverTheWire (Free)',
                url: 'https://overthewire.org/wargames/bandit/',
                type: 'Interactive Tutorial',
                durationHours: 15,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Complete Bandit Levels 0 through 15',
              description: 'Play through the gamified Linux security challenges and write down solutions in a personal cheat sheet.',
              deliverable: 'Public Markdown GitHub repo documenting the Linux commands learned'
            },
            interviewQuestion: 'What does `chmod 755 filename` mean in terms of read, write, and execute permissions?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseTitle: 'Phase 2: Defensive Security, SIEM & Threat Hunting',
        timeframe: 'Weeks 5 - 10',
        summary: 'Explore security logs, analyze malware behavior in safe sandboxes, and configure basic IDS/IPS rules.',
        milestones: [
          {
            id: 'cy-2-1',
            phaseNumber: 2,
            title: 'TryHackMe Pre-Security & SOC Level 1 Free Modules',
            description: 'Practice simulated attacks and defensive incident response in virtual browser-based labs.',
            estimatedHours: 30,
            skillsGained: ['Log Analysis', 'Incident Response', 'Phishing Analysis', 'Security Operations'],
            freeResources: [
              {
                id: 'res-tryhackme',
                title: 'TryHackMe Free Security Pathway',
                provider: 'TryHackMe (Free Tier)',
                url: 'https://tryhackme.com/',
                type: 'Interactive Tutorial',
                durationHours: 25,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Build a Virtual Home Security Lab in VirtualBox',
              description: 'Set up an isolated virtual network with Kali Linux and an Ubuntu target to practice port scanning with Nmap.',
              deliverable: 'Lab topology diagram and setup guide'
            },
            interviewQuestion: 'What are the main stages of the Cyber Kill Chain or MITRE ATT&CK framework?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseTitle: 'Phase 3: Web Application Security & OWASP Top 10',
        timeframe: 'Weeks 11 - 16',
        summary: 'Understand SQL injection, Cross-Site Scripting (XSS), broken authentication, and security headers.',
        milestones: [
          {
            id: 'cy-3-1',
            phaseNumber: 3,
            title: 'OWASP Top 10 Vulnerabilities & PortSwigger Web Security Academy',
            description: 'Master how vulnerabilities occur and how developers remediate them with input sanitization and parameterized queries.',
            estimatedHours: 25,
            skillsGained: ['OWASP Top 10', 'SQLi Prevention', 'XSS Mitigation', 'CSRF Tokens'],
            freeResources: [
              {
                id: 'res-portswigger',
                title: 'PortSwigger Web Security Academy (100% Free)',
                provider: 'PortSwigger (Burp Suite Creators)',
                url: 'https://portswigger.net/web-security',
                type: 'Interactive Tutorial',
                durationHours: 20,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'OWASP Juice Shop Vulnerability Assessment',
              description: 'Test the intentional vulnerabilities in the open-source OWASP Juice Shop web app and document patches.',
              deliverable: 'Vulnerability assessment report with remediation recommendations'
            },
            interviewQuestion: 'What is SQL Injection and how do parameterized queries completely prevent it?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 4,
        phaseTitle: 'Phase 4: Certification Prep, Security Resume & CTFs',
        timeframe: 'Weeks 17 - 20',
        summary: 'Prepare for entry certifications (CompTIA Security+ / Google Cyber) and showcase your lab projects.',
        milestones: [
          {
            id: 'cy-4-1',
            phaseNumber: 4,
            title: 'CompTIA Security+ Free Study & College SOC Interview Prep',
            description: 'Review cryptography, identity management, compliance, and disaster recovery concepts.',
            estimatedHours: 25,
            skillsGained: ['Security+ Domains', 'Cryptography Concepts', 'Security Policies'],
            freeResources: [
              {
                id: 'res-messer-sec',
                title: 'CompTIA Security+ Training Course by Professor Messer',
                provider: 'Professor Messer (Free on YouTube)',
                url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/',
                type: 'Free Course',
                durationHours: 30,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'Cybersecurity Analyst Portfolio & Incident Write-up',
              description: 'Publish documentation of your home lab, 3 TryHackMe room walkthroughs, and security scripts.',
              deliverable: 'GitHub security portfolio ready for college internship applications'
            },
            interviewQuestion: 'What is the CIA Triad in information security and give a real-world example of each pillar?',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 'cloud-devops-engineer',
    title: 'Cloud & DevOps Engineer',
    category: 'Cloud & Cybersecurity',
    matchScore: 88,
    matchReason: 'Loves automation, system reliability, infrastructure as code, and continuous deployment pipelines.',
    tagline: 'Automate deployments, scale cloud architecture, and keep global web services resilient.',
    salaryRange: '$80,000 - $120,000 (Entry Level)',
    jobGrowth: '+28% (Very high demand)',
    typicalDay: 'Writing Dockerfiles, setting up GitHub Actions CI/CD pipelines, provisioning cloud resources, monitoring server metrics, and writing automation scripts in Bash or Python.',
    coreSkills: ['Docker & Containerization', 'Linux Administration', 'Git & GitHub Actions CI/CD', 'Cloud Platforms (AWS/GCP Free Tier)', 'Infrastructure as Code (Terraform)', 'Kubernetes Basics'],
    freeToolsUsed: ['Docker Desktop Free', 'GitHub Actions (Free tier)', 'GCP / AWS Free Tiers', 'VS Code', 'Terraform CLI'],
    roadmap: [
      {
        phaseNumber: 1,
        phaseTitle: 'Phase 1: Linux, Shell Scripting & Git Automation',
        timeframe: 'Weeks 1 - 4',
        summary: 'Master Linux servers, user permissions, networking tools, and automated Bash scripts.',
        milestones: [
          {
            id: 'cdo-1-1',
            phaseNumber: 1,
            title: 'Linux Server Administration & Bash Automation',
            description: 'Learn systemd services, cron jobs, environment variables, SSH tunneling, and writing maintenance scripts.',
            estimatedHours: 25,
            skillsGained: ['Linux Servers', 'systemd', 'Cron Jobs', 'Bash Scripting'],
            freeResources: [
              {
                id: 'res-linux-journey',
                title: 'Linux Journey (100% Free Interactive Guide)',
                provider: 'Linux Journey',
                url: 'https://linuxjourney.com/',
                type: 'Interactive Tutorial',
                durationHours: 15,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Automated System Health & Backup Bash Script',
              description: 'Write a script that monitors disk usage, memory, and automatically backs up a directory to a compressed tar archive.',
              deliverable: 'Tested Bash script hosted on GitHub with instructions'
            },
            interviewQuestion: 'How does a Linux process handle SIGTERM vs SIGKILL signals?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseTitle: 'Phase 2: Docker Containers & Microservices',
        timeframe: 'Weeks 5 - 10',
        summary: 'Package applications into portable containers with Docker and Docker Compose.',
        milestones: [
          {
            id: 'cdo-2-1',
            phaseNumber: 2,
            title: 'Docker Mastery: Multi-stage Builds & Docker Compose',
            description: 'Write optimized Dockerfiles, manage image sizes, create shared networks, and run multi-container applications.',
            estimatedHours: 25,
            skillsGained: ['Dockerfiles', 'Image Optimization', 'Docker Compose', 'Container Networking'],
            freeResources: [
              {
                id: 'res-docker-handbook',
                title: 'Docker Handbook for Beginners',
                provider: 'freeCodeCamp (Free)',
                url: 'https://www.freecodecamp.org/news/the-docker-handbook/',
                type: 'Interactive Tutorial',
                durationHours: 15,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Containerize a Full Stack App with Database',
              description: 'Create a docker-compose.yml running a React app, Node API, and PostgreSQL database with persistent volume storage.',
              deliverable: 'Working docker-compose file reproducible with one `docker compose up` command'
            },
            interviewQuestion: 'Why should you use multi-stage builds in Dockerfiles?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseTitle: 'Phase 3: CI/CD Pipelines & Cloud Deployment',
        timeframe: 'Weeks 11 - 16',
        summary: 'Automate testing, linting, building, and deploying containers using GitHub Actions.',
        milestones: [
          {
            id: 'cdo-3-1',
            phaseNumber: 3,
            title: 'GitHub Actions Automated CI/CD Pipelines',
            description: 'Create YAML workflows triggered on pull requests that run automated tests and build Docker images.',
            estimatedHours: 20,
            skillsGained: ['GitHub Actions', 'CI/CD Pipelines', 'Automated Testing', 'Secret Management'],
            freeResources: [
              {
                id: 'res-github-actions-docs',
                title: 'GitHub Actions Quickstart & Tutorial',
                provider: 'GitHub Official Docs',
                url: 'https://docs.github.com/en/actions',
                type: 'Documentation',
                durationHours: 10,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'Automated CI/CD Pipeline for a Web App',
              description: 'Configure a pipeline that tests code on every push and automatically pushes a container image to GitHub Container Registry.',
              deliverable: 'Public GitHub repo with green checkmark CI/CD workflow runs'
            },
            interviewQuestion: 'What is the difference between Continuous Integration (CI) and Continuous Deployment (CD)?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 4,
        phaseTitle: 'Phase 4: Infrastructure as Code & Cloud Resume Challenge',
        timeframe: 'Weeks 17 - 20',
        summary: 'Learn Terraform fundamentals and deploy a serverless or cloud project on AWS/GCP free tier.',
        milestones: [
          {
            id: 'cdo-4-1',
            phaseNumber: 4,
            title: 'The Cloud Resume Challenge (Open Community Project)',
            description: 'Deploy a live HTML resume hosted on cloud storage, served via CDN HTTPS, with a visitor counter API and CI/CD.',
            estimatedHours: 30,
            skillsGained: ['Cloud Storage', 'Cloud CDN', 'Serverless Functions', 'Infrastructure as Code'],
            freeResources: [
              {
                id: 'res-cloud-resume',
                title: 'The Cloud Resume Challenge Official Guide',
                provider: 'CloudResumeChallenge.dev (Free Guide)',
                url: 'https://cloudresumechallenge.dev/docs/the-challenge/',
                type: 'Guided Project',
                durationHours: 25,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'Live Cloud-Hosted Resume with API Visitor Counter',
              description: 'Complete the Cloud Resume Challenge using free tiers on AWS or GCP with full automated deployment.',
              deliverable: 'Live HTTPS resume website and public GitHub repository'
            },
            interviewQuestion: 'What is Infrastructure as Code (IaC) and what are its key advantages over configuring cloud consoles manually?',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 'product-manager-tech',
    title: 'Associate Product Manager (APM)',
    category: 'Business & Growth',
    matchScore: 87,
    matchReason: 'Exceptional at communicating between engineers, designers, and business stakeholders to turn user problems into shipped products.',
    tagline: 'Define product strategy, prioritize roadmaps, and lead cross-functional teams to launch solutions.',
    salaryRange: '$75,000 - $110,000 (Entry Level)',
    jobGrowth: '+20% (Consistent high demand)',
    typicalDay: 'Writing Product Requirement Documents (PRDs), analyzing user analytics and funnel conversion, leading team backlog grooming, and testing beta feature releases.',
    coreSkills: ['Product Strategy & Vision', 'PRD Writing', 'A/B Testing & Metrics', 'Agile / Scrum Methodologies', 'User Empathy', 'Cross-Functional Leadership'],
    freeToolsUsed: ['Notion Free', 'Trello Free', 'Google Analytics Free', 'Figma Viewer', 'Miro Free'],
    roadmap: [
      {
        phaseNumber: 1,
        phaseTitle: 'Phase 1: Product Thinking & Problem Definition',
        timeframe: 'Weeks 1 - 4',
        summary: 'Learn how to differentiate user problems from solutions, conduct discovery interviews, and write PRDs.',
        milestones: [
          {
            id: 'pm-1-1',
            phaseNumber: 1,
            title: 'Product Requirement Document (PRD) Masterclass',
            description: 'Learn how to write clear problem statements, success metrics (KPIs), user stories, and acceptance criteria.',
            estimatedHours: 20,
            skillsGained: ['PRD Writing', 'User Stories', 'KPI Definition', 'Scoping'],
            freeResources: [
              {
                id: 'res-product-school',
                title: 'Product School Free Resources & Webinars',
                provider: 'Product School (Free Guides)',
                url: 'https://productschool.com/resources',
                type: 'Documentation',
                durationHours: 12,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'PRD for a New Spotify or LinkedIn Feature',
              description: 'Identify a glaring UX frustration in an everyday app and write a 4-page comprehensive Product Requirement Document.',
              deliverable: 'Public Notion document or PDF PRD ready for portfolio'
            },
            interviewQuestion: 'How would you measure the success of Instagram Stories when it was first introduced?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseTitle: 'Phase 2: Product Metrics, Growth & A/B Testing',
        timeframe: 'Weeks 5 - 10',
        summary: 'Understand pirate metrics (AARRR: Acquisition, Activation, Retention, Referral, Revenue) and statistical significance.',
        milestones: [
          {
            id: 'pm-2-1',
            phaseNumber: 2,
            title: 'Product Analytics & Funnel Optimization',
            description: 'Learn cohort retention curves, churn rate calculations, feature adoption rates, and experiment design.',
            estimatedHours: 20,
            skillsGained: ['AARRR Metrics', 'Retention Curves', 'A/B Test Design', 'Data-Informed Decisions'],
            freeResources: [
              {
                id: 'res-amplitude-guide',
                title: 'The Product Analytics Playbook',
                provider: 'Amplitude (Free eBook & Guides)',
                url: 'https://amplitude.com/resources',
                type: 'Documentation',
                durationHours: 10,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'College App Funnel Teardown & Optimization Proposal',
              description: 'Analyze an onboarding flow, map conversion bottlenecks, and design a hypothesis-driven A/B test.',
              deliverable: 'Slide deck presentation analyzing the funnel and test variants'
            },
            interviewQuestion: 'If retention dropped 5% after releasing a new app update, how would you diagnose the root cause?',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseTitle: 'Phase 3: Prioritization Frameworks & Agile Execution',
        timeframe: 'Weeks 11 - 16',
        summary: 'Master RICE scoring, Kano model, MoSCoW, sprint planning, and working effectively with software engineers.',
        milestones: [
          {
            id: 'pm-3-1',
            phaseNumber: 3,
            title: 'RICE Prioritization & Sprint Management',
            description: 'Score competing feature requests by Reach, Impact, Confidence, and Effort to produce an objective backlog.',
            estimatedHours: 15,
            skillsGained: ['RICE Framework', 'Sprint Planning', 'Engineering Collaboration'],
            freeResources: [
              {
                id: 'res-atlassian-agile',
                title: 'Atlassian Agile Coach & Scrum Guide',
                provider: 'Atlassian (Free)',
                url: 'https://www.atlassian.com/agile',
                type: 'Interactive Tutorial',
                durationHours: 10,
                difficulty: 'Beginner'
              }
            ],
            practicalProject: {
              title: 'Feature Prioritization Matrix & Trello Sprint Board',
              description: 'Build an objective RICE scoring spreadsheet evaluating 10 proposed features with a sprint backlog board.',
              deliverable: 'Public spreadsheet model + board link'
            },
            interviewQuestion: 'Tell me about how you handle conflict when engineers say a requested feature is technically impossible in the given timeframe.',
            completed: false
          }
        ]
      },
      {
        phaseNumber: 4,
        phaseTitle: 'Phase 4: APM Interview Prep & Product Teardown Portfolio',
        timeframe: 'Weeks 17 - 20',
        summary: 'Master Product Sense and Analytical Execution questions for tech company APM programs (Google APM, Meta RPM, Uber APM).',
        milestones: [
          {
            id: 'pm-4-1',
            phaseNumber: 4,
            title: 'APM Product Sense Interview Practice & Portfolio',
            description: 'Practice design questions ("Design a microwave for blind people", "Design an alarm clock for college roommates").',
            estimatedHours: 25,
            skillsGained: ['CIRCLES Method', 'Product Sense Interviews', 'Estimation Questions'],
            freeResources: [
              {
                id: 'res-exponent-free',
                title: 'Exponent Free PM Interview Questions & Videos',
                provider: 'TryExponent.com (Free Tier)',
                url: 'https://www.tryexponent.com/questions',
                type: 'Guided Project',
                durationHours: 20,
                difficulty: 'Intermediate'
              }
            ],
            practicalProject: {
              title: 'Complete Product Teardown & Redesign Deck',
              description: 'A 10-slide case study breaking down a product, its target user segment, pain points, proposed solutions, and launch metrics.',
              deliverable: 'PDF slide deck ready to attach to APM applications'
            },
            interviewQuestion: 'What is your favorite product, why is it designed well, and what is one thing you would improve?',
            completed: false
          }
        ]
      }
    ]
  }
];

export const GENERAL_INTERNSHIP_TIPS = [
  {
    title: 'The Google X-Y-Z Resume Formula',
    description: 'Structure every bullet point on your resume as: "Accomplished [X], as measured by [Y], by doing [Z]". For example: "Reduced page load time by 38% [X], as measured by Google Lighthouse [Y], by optimizing image compression and implementing lazy loading [Z]."'
  },
  {
    title: 'Cold Outreach on LinkedIn That Actually Gets Replies',
    description: 'Reach out to university alumni who work at companies you admire. Keep it under 75 words: Mention you attend their alma mater, highlight one specific project they worked on, and ask for a 10-minute informational coffee chat about how they transitioned into their role.'
  },
  {
    title: 'Build in Public & Showcase Live URLs',
    description: 'Recruiters and hiring managers spend an average of 6 seconds skimming a resume. Having a clickable, deployed live URL with a clear 30-second video demo or screenshot on GitHub instantly puts you ahead of 90% of applicants who only submit dead code.'
  },
  {
    title: 'Leverage 100% Free Resources & Financial Aid',
    description: 'Never pay hundreds of dollars for bootcamps or certificates. Coursera offers 100% financial aid for almost every course (approval takes ~14 days), Harvard CS50 is completely free, and freeCodeCamp and Kaggle grant verified free certificates upon completion.'
  }
];
