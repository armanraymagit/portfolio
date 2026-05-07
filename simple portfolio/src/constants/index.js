
const navLinks = [
  {
    name: "Projects",
    link: "#Projects",
  },
  {
    name: "Experience",
    link: "#Experience",
  },
  {
    name: "Education",
    link: "#Education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certifications",
    link: "#Certifications",
  },
  {
    name: "CV DOWNLOAD",
    link: "#Cv",
  },
  {
    name: "About",
    link: "#About",
  },
];

export const skillsData = {
  techSkills: [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Django",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Dart",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "AI & ML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  ],

  coreFundamentals: [
    { name: "DSA", emoji: "🧩" },
    { name: "DBMS", emoji: "🗄️" },
    { name: "OS", emoji: "💻" },
    { name: "Computer Network", emoji: "🌐" },
    { name: "MCP", emoji: "🤖" },
  ],

  tools: [
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Cursor",
      logo: "/images/icons/cursor.svg",
    },
    {
      name: "Claude CLI",
      logo: "/images/icons/claude.svg",
    },
    {
      name: "Gemini CLI",
      logo: "/images/icons/gemini.svg",
    },
    {
      name: "Ollama",
      logo: "/images/icons/ollama.svg",
    },
    {
      name: "Antigravity",
      emoji: "🌌", 
    },
  ],

  softSkills: [
    { name: "Teamwork", emoji: "🤝" },
    { name: "Communication", emoji: "💬" },
    { name: "Problem Solving", emoji: "🧩" },
    { name: "Adaptability", emoji: "⚡" },
  ],
};

const projects = [
  {
    title: "ALLYMIND AI: The Ultimate Full-Stack Study Buddy",
    description: "A state-of-the-art full-stack application that revolutionizes studying by transforming notes, PDFs, and images into interactive tools like AI-generated summaries, quizzes, and flashcards. Features hybrid RAG with pgvector, a local Ollama proxy, and a data-driven performance dashboard.",
    github: "https://github.com/armanraymagit/ALLYMIND_AI.git",
    liveDemo: null,
    date: "Feb 2026",
    video: "/images/allymind.mp4",
    techStack: ["React 19", "Django 5.2", "PostgreSQL", "pgvector", "Ollama", "Llama 3.2", "Docker", "Tailwind CSS"],
    features: [
      "AI Explainer Study Chatbot",
      "PDF & Image Summarizer (Llama 3.2 Vision)",
      "Interactive Flashcard & Quiz Master",
      "Data-driven Performance Dashboard",
      "Hybrid RAG with Vector Search"
    ]
  },
  {
    title: "Rubik’s Cube Solver (3D Desktop App)",
    description: "A real-time 3D Rubik's Cube simulator and solver built with Python and Raylib. This desktop application allows users to interactively rotate cube faces, scramble the cube, and watch an AI-powered solver (using the Kociemba algorithm) find and execute the optimal solution in a background thread with smooth animations.",
    github: "https://github.com/armanraymagit/rubikscubesolver.git",
    liveDemo: null,
    date: "October 2025",
    video: "/images/cube.mp4",
    techStack: ["Python", "Raylib", "Kociemba Algorithm", "Threading"],
    features: [
      "Interactive 3D Rendering",
      "Real-time Input & Controls",
      "AI Solver Integration",
      "Multithreaded Execution",
      "History & Reset capabilities"
    ]
  }
];

export const experienceData = [
  {
    title: "AI/ML Intern",
    company: "Edunet Foundation",
    duration: "Jan 2026 to Feb 2026",
    description: "Participated in the AI/ML Internship program by Edunet foundation in collaboration with AICTE and IBM skills build. Developed hands-on experience in machine learning workflows, data analysis, and AI model implementation.",
    tags: ["AI/ML", "Python", "AICTE", "IBM SkillsBuild"],
  },
];

const certifications = [
  {
    title: "Basic of AI",
    issuer: "Amity university online",
    year: "NOV 2025",
    credentialLink: "https://www.linkedin.com/posts/arman-rayma_ai-fundamentals-activity-7395080351506726912-Hr3H",
    description: "Fundamentals of Artificial Intelligence and Machine Learning concepts."
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    year: "NOV 2025",
    credentialLink: "https://www.linkedin.com/posts/arman-rayma_cybersecurity-fundamentals-was-issued-by-activity-7392129036510056448-0Sdu",
    description: "Core concepts of cybersecurity, threat landscapes, and defensive strategies."
  },
  {
    title: "Certificate Course in Professional and Life Skills",
    issuer: "Amity university online",
    year: "July 2025",
    credentialLink: "https://www.linkedin.com/posts/arman-rayma_certificate-in-professional-and-life-skills-activity-7355079038064836608-qIF4",
    description: "Comprehensive training in professional ethics and life skills."
  },
  {
    title: "Workshop on Personal Branding and Career Development",
    issuer: "Amity university online",
    year: "April 2025",
    credentialLink: "https://www.linkedin.com/posts/arman-rayma_participation-amityuniversityonline-activity-7349063777373323265-SZWJ",
    description: "Intensive workshop on building a personal brand and strategic career growth."
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and Linkedin",
    year: "Nov 2024",
    credentialLink: "https://www.linkedin.com/learning/certificates/254cd508887394ea9df968f54902a0e3264f7fff8771c49d837abe8de5262b48",
    description: "Learning the potential of generative AI and its applications in the modern workspace."
  },
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft and Linkedin",
    year: "Nov 2024",
    credentialLink: "https://www.linkedin.com/learning/certificates/9f1d582dfccb6e3a8ac266c49f39619e7342a7f6f3bda687d8eaf54c36174f82",
    description: "Foundational skills in software engineering and development methodologies."
  }
];

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Amity University Online",
    year: "2025 - 2028",
    description: "Focused on software development, algorithms, and cybersecurity. Gained hands-on experience in building web applications and working with cloud technologies like AWS."
  },
  {
    degree: "High School (Science Stream)",
    institution: "Sanskar School",
    year: "2023 - 2024",
    description: "Studied core subjects including Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills."
  }
];

export {
  navLinks,
  projects,
  certifications,
  educationData,
};