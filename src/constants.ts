export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  summary: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  features: string[];
  architecture: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface MediaItem {
  title: string;
  link: string;
  type: 'movie' | 'music';
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "jamia-connect",
    title: "JamiaConnect",
    description: "An all-in-one community platform for 20,000+ students at JMI.",
    longDescription: "JamiaConnect is a comprehensive social and informational hub built from scratch to serve the student community at JMI. It integrates communication tools with academic resources.",
    summary: "A full-stack MERN platform serving 20,000+ JMI students with real-time chat, blogging, notice board, and academic resource sharing.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Cloudinary", "Socket.io"],
    image: "https://picsum.photos/seed/jamia/800/600",
    demo: "https://jamia-connect.vercel.app/",
    github: "https://github.com/maneeq166",
    features: [
      "Private 1-on-1 real-time chat system",
      "Student blogging platform for sharing stories",
      "Global student search functionality",
      "Live JMI notice board integration",
      "Academic library for Previous Year Questions (PYQs)",
      "Secure file upload system using Multer and Cloudinary"
    ],
    architecture: "Built on the MERN stack with a modular architecture. Real-time features are powered by Socket.io, while media assets are managed through Cloudinary. The frontend uses a responsive React design for seamless mobile and desktop access."
  },
  {
    id: "handicraft-ecommerce",
    title: "Handicraft E-commerce",
    description: "A full-stack marketplace for artisanal products.",
    longDescription: "A complete e-commerce solution featuring product management, secure payments, and a refined shopping experience.",
    summary: "A full-stack artisanal marketplace with role-based access, payment gateway integration, and dynamic product filtering built on Next.js.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
    image: "https://picsum.photos/seed/craft/800/600",
    demo: "https://handicreaft-client.vercel.app/",
    github: "https://github.com/maneeq166",
    features: [
      "Role-based access (User/Admin panels)",
      "Full product CRUD and order management",
      "Integrated payment gateway",
      "Dynamic pagination and advanced filtering",
      "Responsive design optimized for conversions"
    ],
    architecture: "Leverages Next.js for a fast, SEO-friendly frontend. The backend is a separate Express server deployed on Render, communicating with a MongoDB Atlas cluster. Authentication is handled via JWT with secure cookie storage."
  },
  {
    id: "url-shortener",
    title: "Scalable URL Shortener",
    description: "A professional link management platform with advanced analytics.",
    longDescription: "A full-stack URL shortening service that provides custom slugs, QR code generation, and detailed click tracking for users.",
    summary: "A professional link management platform with custom slugs, QR codes, and detailed click analytics powered by a high-concurrency Node.js backend.",
    tags: ["Node.js", "Express", "MongoDB", "React", "JWT", "Recharts"],
    image: "https://picsum.photos/seed/url/800/600",
    demo: "https://url-shortener-aneeq.vercel.app/",
    github: "https://github.com/maneeq166",
    features: [
      "Custom URL slugs and automatic QR code generation",
      "Link expiration and secure access control",
      "Detailed click analytics (device, country, referrer, timestamps)",
      "RESTful API for programmatic link management",
      "JWT-based authentication for user accounts"
    ],
    architecture: "The backend is a Node.js/Express API that handles high-concurrency redirection. MongoDB is used for storing link metadata and analytics. The frontend is a modular React application using custom hooks for data fetching and Recharts for visualization."
  },
  {
    id: "pathpilot",
    title: "PathPilot",
    description: "AI-Powered Career Intelligence Platform for employability improvement.",
    longDescription: "PathPilot is a full-stack AI-powered career intelligence platform designed to help students and early-career professionals improve their employability. The system analyzes uploaded resumes, extracts skills, education, and experience using resume parsing techniques, and provides personalized career recommendations. It also supports job matching, interview preparation, AI-generated feedback, and progress tracking. The platform combines traditional NLP, pattern-based extraction, and AI-powered analysis to deliver actionable career insights. PathPilot aims to bridge the gap between academic learning and industry requirements by helping users identify skill gaps, discover relevant opportunities, and follow structured career roadmaps.",
    summary: "An AI-powered career intelligence platform that parses resumes, extracts skills, and delivers personalized job matching, interview prep, and progress tracking.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    image: "https://picsum.photos/seed/pathpilot/800/600",
    demo: "https://path-pilot-peach.vercel.app/",
    github: "https://github.com/maneeq166",
    features: [
      "Resume Upload & Analysis",
      "Skill Extraction & Classification",
      "Education and Experience Parsing",
      "AI Career Recommendations",
      "Job Matching System",
      "Interview Preparation Module",
      "AI Feedback Generation",
      "Progress Tracking Dashboard"
    ],
    architecture: "The system uses a React frontend with Tailwind CSS for the UI. Express APIs handle business logic and MongoDB stores user profiles, resumes, jobs, and analytics. The AI/NLP layer processes resumes using regex-based parsing, NLP libraries (Natural, Compromise), and LLM integration for generating recommendations. JWT-based authentication secures user accounts and data."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Unthinkable Solutions",
    role: "Software Engineering Intern",
    period: "2026 – Present",
    description: [
      "Selected from Jamia Millia Islamia Polytechnic for a company-sponsored role with integrated BITS Work Integrated Learning Program (BTech).",
      "Building production software and gaining professional industry experience alongside higher education."
    ]
  },
  {
    company: "Freelance / Independent",
    role: "Backend & Full-Stack Developer",
    period: "2023 - Present",
    description: [
      "Architected and deployed multiple full-stack applications using the MERN and Next.js stacks.",
      "Integrating AI capabilities into applications using LLM APIs, embeddings, and RAG pipelines."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "BITS Pilani",
    degree: "BITS Work Integrated Learning Program (BTech) — Company-Sponsored",
    period: "2026 – Present",
    location: "Work Integrated, India"
  },
  {
    institution: "Jamia Millia Islamia",
    degree: "Diploma in Computer Engineering",
    period: "2023 - 2026",
    location: "New Delhi, India"
  }
];

export const SKILLS = {
  languages: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "SQL", "HTML/CSS"],
  frameworks: ["React", "Node.js", "Express", "Next.js", "FastAPI"],
  tools: ["Git", "Docker", "Linux", "PostgreSQL", "Redis", "MongoDB", "Vercel", "Render"]
};

export const MEDIA: MediaItem[] = [
  { title: "Inception", link: "https://www.imdb.com/title/tt1375666/", type: "movie" },
  { title: "The Dark Knight", link: "https://www.imdb.com/title/tt0468569/", type: "movie" },
  { title: "Interstellar", link: "https://www.imdb.com/title/tt0816692/", type: "movie" },
  { title: "The Prestige", link: "https://www.imdb.com/title/tt0482571/", type: "movie" },
  { title: "Memento", link: "https://www.imdb.com/title/tt0209144/", type: "movie" },
  { title: "Dunkirk", link: "https://www.imdb.com/title/tt5013056/", type: "movie" },
  { title: "Tenet", link: "https://www.imdb.com/title/tt6723592/", type: "movie" },
  { title: "Oppenheimer", link: "https://www.imdb.com/title/tt15398776/", type: "movie" },
  { title: "The Matrix", link: "https://www.imdb.com/title/tt0133093/", type: "movie" },
  { title: "Fight Club", link: "https://www.imdb.com/title/tt0137523/", type: "movie" },
  { title: "Pulp Fiction", link: "https://www.imdb.com/title/tt0110912/", type: "movie" },
  { title: "The Shawshank Redemption", link: "https://www.imdb.com/title/tt0111161/", type: "movie" },
  { title: "The Godfather", link: "https://www.imdb.com/title/tt0068646/", type: "movie" },
  { title: "Goodfellas", link: "https://www.imdb.com/title/tt0099685/", type: "movie" },
  { title: "The Departed", link: "https://www.imdb.com/title/tt0407887/", type: "movie" },
  { title: "Whiplash", link: "https://www.imdb.com/title/tt3464902/", type: "movie" },
  { title: "Parasite", link: "https://www.imdb.com/title/tt6751668/", type: "movie" },
  { title: "Blade Runner 2049", link: "https://www.imdb.com/title/tt1856101/", type: "movie" },
  { title: "Arrival", link: "https://www.imdb.com/title/tt2543164/", type: "movie" },
  { title: "The Social Network", link: "https://www.imdb.com/title/tt1285016/", type: "movie" },
  { title: "Blinding Lights - The Weeknd", link: "https://www.youtube.com/watch?v=4NRXx6U8ABQ", type: "music" },
  { title: "Bohemian Rhapsody - Queen", link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ", type: "music" },
  { title: "Starboy - The Weeknd", link: "https://www.youtube.com/watch?v=34Na4j8AVgA", type: "music" },
  { title: "Circles - Post Malone", link: "https://www.youtube.com/watch?v=wXhTHyIgQ_U", type: "music" },
  { title: "Save Your Tears - The Weeknd", link: "https://www.youtube.com/watch?v=XXYlFuWEuKI", type: "music" }
];
