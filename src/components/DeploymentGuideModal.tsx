import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  Github, 
  Cloud, 
  Check, 
  Copy, 
  Download, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const handleDownloadMarkdown = () => {
    const md = `# PathFinder AI - Beginner's Complete Guide
## Run Locally, Test, Save to GitHub, and Deploy for Free

Congratulations on building your AI Career Guide Agent! This guide explains every step in simple English for absolute beginners.

---

### Step 1: Run the Project Locally on Your Computer
Requirements: Install Node.js (version 18 or 20+) from https://nodejs.org/ (it's 100% free).

1. Open your computer terminal (Command Prompt or PowerShell on Windows, Terminal on Mac/Linux).
2. Navigate to your project folder:
   \`\`\`bash
   cd pathfinder-career-guide
   \`\`\`
3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
5. Open your web browser and visit: **http://localhost:3000**

---

### Step 2: How to Test Every Feature
1. **Student Assessment:** Click "Start Free Assessment", select your college year (e.g. Sophomore), pick interests (like Web Development, AI), and set your study hours. Click "Generate Career Blueprint".
2. **Explore Roadmaps:** Review the tailored career cards (e.g. Full Stack Web Developer, Data Analyst & AI Practitioner). Click "Explore Roadmap".
3. **Track Milestones:** Check off completed milestones! Notice the progress bar update automatically in real-time. Click any milestone to see verified free course links (freeCodeCamp, Harvard CS50, MIT OCW) and interview questions.
4. **Take Notes:** Expand any milestone, click "Add Note", and write down your notes or GitHub project link. It automatically saves to your browser.
5. **AI Career Mentor Chat:** Click "AI Career Mentor" in the top bar. Ask: "How do I land my first internship without experience?"
6. **Export Your Roadmap:** Click "Export Roadmap (MD)" to download a Markdown file of your complete study plan.

---

### Step 3: How to Save to GitHub (Beginner Friendly)
GitHub allows you to safely store your code online and show it to recruiters.

1. Go to https://github.com and sign up for a free account if you haven't yet.
2. Create a new repository on GitHub:
   - Click the **+** icon in the top right -> **New repository**
   - Name it \`ai-career-guide-agent\`
   - Keep it **Public** so employers can view it
   - Do NOT check "Initialize with README" (we already have files)
   - Click **Create repository**
3. In your local project terminal, run these commands:
   \`\`\`bash
   git init
   git add .
   git commit -m "feat: complete AI career guide agent for college students"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ai-career-guide-agent.git
   git push -u origin main
   \`\`\`
Your project is now securely saved on GitHub!

---

### Step 4: Deploy for 100% FREE
You don't need a paid server. Here are the two best free hosting platforms:

#### Option A: Deploy on Render.com (Recommended for Full-Stack)
1. Go to https://render.com and sign up for a free account (sign in with your GitHub).
2. Click **New +** -> **Web Service**.
3. Select your GitHub repository (\`ai-career-guide-agent\`).
4. Configure these simple settings:
   - **Environment:** Node
   - **Build Command:** \`npm install && npm run build\`
   - **Start Command:** \`npm run start\`
   - **Instance Type:** Free ($0/month)
5. (Optional) In the **Environment Variables** section:
   - Add Key: \`GEMINI_API_KEY\`
   - Value: Your free key from https://aistudio.google.com/
6. Click **Deploy Web Service**! Within 2 minutes, Render gives you a live public URL (e.g., \`https://ai-career-guide.onrender.com\`).

#### Option B: Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New Project** and select your repository.
3. Click **Deploy**. Vercel will automatically build and publish your app.

---

### Step 5: (Optional) Get Your Free Gemini API Key
PathFinder works completely offline using its built-in educational database, but you can also connect Google's free Gemini AI model:
1. Visit https://aistudio.google.com/
2. Click **Get API key** -> **Create API key** (it is 100% free with no credit card required).
3. Create a file named \`.env\` in your project root with:
   \`GEMINI_API_KEY="your-key-here"\`
`;

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DEPLOYMENT_AND_GITHUB_GUIDE.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-2xs">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Beginner's Guide: Run, Test, Save to GitHub & Deploy Free
              </h2>
              <p className="text-xs text-slate-500">Step-by-step instructions written in simple English</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
          {/* Download button banner */}
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-bold text-indigo-950 block">Keep this guide offline</span>
              <span className="text-xs text-slate-600">Download the complete step-by-step markdown file to your computer.</span>
            </div>
            <button
              type="button"
              onClick={handleDownloadMarkdown}
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Guide (.md)</span>
            </button>
          </div>

          {/* Section 1: Run Locally */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs">1</span>
              <span>How to Run Locally on Your Machine</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Make sure you have Node.js (version 18+) installed from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">nodejs.org</a>. Then open your terminal:
            </p>
            <div className="bg-slate-900 text-slate-100 p-3.5 rounded-xl font-mono text-xs relative group">
              <pre className="overflow-x-auto whitespace-pre">
{`# 1. Install project dependencies
npm install

# 2. Start the full-stack development server
npm run dev

# 3. Open in your browser:
# http://localhost:3000`}
              </pre>
              <button
                onClick={() => copyToClipboard(`npm install\nnpm run dev`, 'local')}
                className="absolute top-2.5 right-2.5 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded border border-slate-700 flex items-center gap-1"
              >
                {copiedSection === 'local' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSection === 'local' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </section>

          {/* Section 2: How to Test */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs">2</span>
              <span>How to Test All Features</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-0.5">1. Test Career Assessment</span>
                <span className="text-slate-600">Click "Start Free Assessment", select your major and interest tags, and click Generate. Verify the tailored match score.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-0.5">2. Test Milestone Tracking</span>
                <span className="text-slate-600">Check off completed milestones in "My Roadmap". Watch the progress bar advance. Add a personal note in any milestone.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-0.5">3. Test Free Courses</span>
                <span className="text-slate-600">Open "Free Courses & Tools". Search for "Python" or "React" and click any direct course link.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-0.5">4. Test AI Career Mentor</span>
                <span className="text-slate-600">Go to "AI Career Mentor" and ask: "How do I get an internship with no experience?" or try one of the quick question chips.</span>
              </div>
            </div>
          </section>

          {/* Section 3: Save to GitHub */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs">3</span>
              <span>How to Save to GitHub (Step-by-Step)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Create a free account on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">GitHub.com</a>, create a new public repository named <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">ai-career-guide</code>, and run these commands:
            </p>
            <div className="bg-slate-900 text-slate-100 p-3.5 rounded-xl font-mono text-xs relative group">
              <pre className="overflow-x-auto whitespace-pre">
{`git init
git add .
git commit -m "feat: complete AI career guide agent for college students"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-career-guide.git
git push -u origin main`}
              </pre>
              <button
                onClick={() => copyToClipboard(`git init\ngit add .\ngit commit -m "feat: complete AI career guide agent for college students"\ngit branch -M main\ngit push -u origin main`, 'git')}
                className="absolute top-2.5 right-2.5 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded border border-slate-700 flex items-center gap-1"
              >
                {copiedSection === 'git' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSection === 'git' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </section>

          {/* Section 4: Deploy for Free */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs">4</span>
              <span>Deploy 100% Free on Render or Vercel</span>
            </div>
            <div className="space-y-3">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Option 1: Render.com (Full-Stack Free Tier)</span>
                <ol className="list-decimal list-inside text-xs text-slate-600 space-y-1">
                  <li>Go to <a href="https://render.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">render.com</a> and sign up with GitHub.</li>
                  <li>Click <strong>New +</strong> and select <strong>Web Service</strong>.</li>
                  <li>Choose your GitHub repository.</li>
                  <li>Set Build Command: <code className="bg-white px-1 border rounded">npm install && npm run build</code></li>
                  <li>Set Start Command: <code className="bg-white px-1 border rounded">npm run start</code></li>
                  <li>Select the <strong>Free</strong> tier and click <strong>Create Web Service</strong>! Your app is live with a free SSL URL.</li>
                </ol>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Option 2: Vercel (Instant 1-Click Deployment)</span>
                <ol className="list-decimal list-inside text-xs text-slate-600 space-y-1">
                  <li>Visit <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">vercel.com</a> and log in with GitHub.</li>
                  <li>Click <strong>Add New Project</strong> and import your repository.</li>
                  <li>Click <strong>Deploy</strong>. Vercel automatically compiles and delivers your application globally.</li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">Need help? Ask the AI Career Mentor in the top bar!</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Got It! Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
