# PathFinder AI: College Career Guide & Roadmap Agent

An intelligent, 100% free AI Career Guide Agent built specifically for college and university students.

PathFinder helps you discover your ideal career path, crafts a personalized 20-week learning roadmap with verified free courses (Harvard CS50, freeCodeCamp, MIT OpenCourseWare, Kaggle), and tracks your practical learning progress with real projects and interview preparation.

---

## Features
- **Smart Student Assessment:** Understands your college year, major, interests, preferred work style, and weekly study schedule.
- **Tailored Career Match Score:** Recommends high-demand career tracks with realistic starting salaries, industry growth outlook, and day-in-the-life summaries.
- **Interactive 4-Phase Learning Roadmap:**
  - **Phase 1: Foundations & Core Concepts (Weeks 1 - 4)**
  - **Phase 2: Practical Skills & Hands-On Tools (Weeks 5 - 10)**
  - **Phase 3: Real-World Portfolio Projects (Weeks 11 - 16)**
  - **Phase 4: Resume, Interview & Internship Readiness (Weeks 17 - 20)**
- **100% Verified Free Learning Resources:** Curated direct links to Harvard CS50, freeCodeCamp, MIT OCW, Kaggle Learn, React.dev, MDN Web Docs, and Coursera Free Audit.
- **Progress Tracking & Notes:** Check off milestones, track total study hours, and write personal notes saved automatically in your browser.
- **AI Career Mentor Chat:** Ask anything—such as how to get an internship with no experience, resume feedback, or project ideas.
- **Google X-Y-Z Resume Builder:** Create impactful, ATS-friendly resume bullet points in seconds.
- **Roadmap Markdown Export:** Download or copy your roadmap for Notion, Obsidian, or local study plans.

---

## 1. How to Run Locally on Your Computer

### Prerequisites
Make sure you have **Node.js** (version 18 or 20+) installed. Download it for free from [https://nodejs.org/](https://nodejs.org/).

### Steps
1. Open your terminal / command prompt.
2. Clone or download this project, then enter the folder:
   ```bash
   cd pathfinder-career-guide
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run dev
   ```
5. Open your web browser and go to:
   ```
   http://localhost:3000
   ```

---

## 2. How to Test Every Feature

1. **Test the Career Assessment:**
   - Click the **Start Free Assessment** button in the top right.
   - Enter your name, select your year (e.g., *Sophomore*), pick interests (like *Web Development* or *Artificial Intelligence*), and set your study hours.
   - Click **Generate Career Blueprint**. Notice the customized matches appear.
2. **Test Milestone Progress Tracking:**
   - Click **Explore Roadmap** on any career card.
   - Check the box next to any milestone.
   - Notice the progress bar increase and the hours completed update immediately.
   - Click any milestone to expand: review the free course link, the practical project task, and click **How to Answer** under the interview question.
   - Click **Add Note** to write your personal study notes. Refresh the page to verify your notes and checkboxes remain saved!
3. **Test the Free Course Directory:**
   - Click **Free Courses & Tools** in the top navigation.
   - Type *Python* or *React* in the search bar. Click any course to open the official free provider.
4. **Test the AI Career Mentor:**
   - Click **AI Career Mentor**.
   - Click one of the quick suggestions (e.g., *"How do I get an internship with no experience?"*) or type your own question.
5. **Test Roadmap Export:**
   - In **My Roadmap**, click **Export Roadmap (MD)**. A Markdown file of your study plan will download to your computer.

---

## 3. How to Save to GitHub (Beginner-Friendly)

GitHub lets you store your code safely online and share your portfolio with recruiters.

1. Sign up for a free account at [https://github.com/](https://github.com/).
2. Create a new repository:
   - Click the **+** icon in the top right corner and choose **New repository**.
   - Name it: `ai-career-guide-agent`
   - Choose **Public**.
   - Do **NOT** check "Add a README file" (we already have one).
   - Click **Create repository**.
3. In your project terminal, run these commands (replace `YOUR_USERNAME` with your actual GitHub username):
   ```bash
   git init
   git add .
   git commit -m "feat: complete AI career guide agent for college students"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-career-guide-agent.git
   git push -u origin main
   ```
4. Refresh your GitHub page to see your complete code online!

---

## 4. How to Deploy for 100% FREE

### Option A: Render.com (Recommended for Full-Stack)
1. Go to [https://render.com/](https://render.com/) and sign up with your GitHub account.
2. Click **New +** > **Web Service**.
3. Connect your `ai-career-guide-agent` GitHub repository.
4. Fill in these settings:
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
   - **Plan:** `Free` ($0/month)
5. (Optional) Under **Environment Variables**, add:
   - `GEMINI_API_KEY`: *(Your key from Google AI Studio)*
6. Click **Deploy Web Service**. Render will deploy your app and give you a live HTTPS link!

### Option B: Vercel (Fastest 1-Click Deployment)
1. Go to [https://vercel.com/](https://vercel.com/) and sign in with GitHub.
2. Click **Add New Project** and select your repository.
3. Click **Deploy**. Vercel will automatically build and publish your app.

---

## 5. (Optional) Getting a Free Gemini API Key
PathFinder works completely offline using its built-in educational dataset, but you can also connect Google's free Gemini AI model:
1. Visit [https://aistudio.google.com/](https://aistudio.google.com/).
2. Click **Get API key** > **Create API key** (100% free, no credit card required).
3. Create a `.env` file in your root folder:
   ```env
   GEMINI_API_KEY="your-gemini-api-key-here"
   ```

---

## License
Apache-2.0. Built for college students everywhere!
