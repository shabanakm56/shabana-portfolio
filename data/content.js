// Edit this file to update the whole site.
export const profile = {
  name: "Shabana",
  title: "Software Engineer | Front-End, QA Automation & Data",
  tagline:
    "I build responsive web interfaces, automate the tests that keep software reliable, and turn data into decisions.",
  about: [
    "I am a Computer Science Engineering graduate (B.Tech, KMCT College of Engineering) who builds end to end: a clean front end in HTML, CSS and JavaScript, Python and Django behind it, and MySQL underneath.",
    "I care about reliability. I design test cases, automate them with Selenium and pytest, and verify behaviour across browsers with BrowserStack and Selenium Grid.",
    "I also turn raw data into decisions. I clean it in Python and SQL and report it in Power BI. In one retail analysis, that surfaced a clear finding: discounts above 40% push margins negative.",
  ],
  location: "Malappuram, Kerala, India",
  email: "shabanakm56@gmail.com",
  phone: "+91 9061975453",
  linkedin: "https://www.linkedin.com/in/shabana03",
  github: "https://github.com/shabanakm56",
};

export const projects = [
  {
    name: "EVESTA: Location-Based Event Recommendation And Discovery Platform using AI",
    stack: ["Django", "MySQL","Flutter", "Android Studio"],
    problem: "People find it hard to discover events happening near them.",
    solution: "An AI-based platform that recommends nearby events from the user's location, with a user-friendly interface.",
    contribution: "Designed and built as a team: recommendation logic, UI, and real-time data handling with performance optimization.",
    outcome: "Delivered as a working final-year team project.",
  },
  
   {
    name: "QA Test Automation (Codecraft Infotech)",
    stack: ["Python", "Selenium", "pytest", "BrowserStack"],
    problem: "Web applications need to work reliably across browsers, and login flows need repeatable checks.",
    solution: "Wrote test cases for a calculator app, tested a web application on Chrome, Firefox, Edge and Safari, built an automated login suite, and ran cross-browser tests on BrowserStack with Selenium Grid.",
    contribution: "Wrote the test cases and automation and documented the results at Codecraft Infotech (Sep to Oct 2026).",
    outcome: "All 10 automated login tests passing, with results documented in public GitHub repositories.",
  },

  {
    name: "Retail Sales Performance Analysis",
    stack: ["Python", "SQL", "MySQL", "Power BI"],
    problem: "Retail sales data needed to be checked and turned into something a team could read and act on.",
    solution: "Cleaned and validated 9,994 retail transactions, then built a 4-page interactive Power BI dashboard for sales performance reporting.",
    contribution: "Data cleaning, SQL analysis and dashboard design.",
    outcome: "Found that discounts above 40% lead to negative profit margins.",
    featured: true,
  },

  {
    name: "SAP Tracker: Student Assessment & Performance Tracker",
    stack: ["Python", "MySQL", "Android Studio"],
    problem: "Tracking student academic performance and assessments is hard to do consistently.",
    solution: "A mobile application with assessment management and progress monitoring features.",
    contribution: "Developed the application.",
    outcome: "Research published in IRJMETS (March 2025).",
  },
  
  {
    name: "Personal Portfolio Website",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    problem: "Projects across development, QA and data needed one place where a recruiter can see them quickly.",
    solution: "A responsive portfolio site with all content managed from a single data file.",
    contribution: "Designed, built and deployed the site.",
    outcome: "Live at shabana-portfolio-ten.vercel.app.",
    live: "https://shabana-portfolio-ten.vercel.app",
  },
];

export const skills = {
  "Web & Mobile Development": ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Flutter", "Responsive Web Design", "REST APIs"],
  "Back-End & Data": ["Python", "Django", "SQL", "MySQL", "Power BI", "Excel"],
  "QA & Test Automation": ["Selenium", "pytest", "BrowserStack", "Test Case Design", "Cross-Browser Testing"],
  "Tools": ["Git", "GitHub", "VS Code", "Android Studio"],
};

export const education = [
  { title: "B.Tech, Computer Science and Engineering", place: "KMCT College of Engineering, KTU", when: "2026", note: "CGPA 7.06" },
  { title: "Higher Secondary Education", place: "GHSS Thadathilparamba, Kerala", when: "2022" },
  { title: "SSLC", place: "EMEA Higher Secondary School, Kerala", when: "2020" },
];

export const certifications = [
  { title: "Data Analytics Job Simulation", place: "Deloitte Australia (Forage)", when: "Jun 2026" },
  { title: "GenAI Powered Data Analytics Job Simulation", place: "Tata (Forage)", when: "Jun 2026" },
  { title: "Cyber Security and Ethical Hacking", place: "Metaloop Global IT Services", when: "Jun 2025" },
];
