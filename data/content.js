// Edit this file to update the whole site.
export const profile = {
  name: "Shabana",
  title: "Software Engineer & Data Analyst",
  tagline:
    "I build responsive web and mobile applications with Django and MySQL, and turn raw data into dashboards that show what to act on.",
  about: [
    "I am a Computer Science Engineering graduate (B.Tech, KMCT College of Engineering) who builds end to end: a clean front end in HTML, CSS and JavaScript, Python and Django behind it, and MySQL underneath.",
    "I also work with data. I clean it in Python and SQL, and report it in Power BI. I debug and test as I build, and I work in Git-based teams.",
  ],
  location: "Malappuram, Kerala, India",
  email: "shabanakm56@gmail.com",
  phone: "+91 9061975453",
  linkedin: "https://www.linkedin.com/in/shabana03",
  github: "https://github.com/shabanakm56",
};

export const projects = [
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
    name: "Evesta: Location-Based Event Discovery",
    stack: ["Django", "MySQL", "Android Studio"],
    problem: "People find it hard to discover events happening near them.",
    solution: "An AI-based platform that recommends nearby events from the user's location, with a user-friendly interface.",
    contribution: "Designed and built as a team: recommendation logic, UI, and real-time data handling with performance optimization.",
    outcome: "Delivered as a working final-year team project.",
  },
  {
    name: "SAP Tracker: Student Assessment & Performance Tracker",
    stack: ["Python", "MySQL", "Android Studio"],
    problem: "Tracking student academic performance and assessments is hard to do consistently.",
    solution: "A mobile application with assessment management and progress monitoring features.",
    contribution: "Developed the application.",
    outcome: "Research published in IRJMETS (March 2025).",
  },
];

export const skills = {
  "Web Development": ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "REST APIs"],
  "Backend & Data": ["Python", "Django", "SQL", "MySQL", "Power BI", "Excel"],
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
