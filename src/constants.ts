export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
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

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "binbot",
    title: "BinBot",
    description: "AI-powered waste classification SaaS for sustainable disposal.",
    longDescription: "BinBot is a cutting-edge SaaS platform that leverages artificial intelligence to classify waste into categories like recyclable, organic, and hazardous. It aims to simplify waste management for individuals and organizations using advanced image recognition.",
    tags: ["Node.js", "Express", "React", "MongoDB", "Google Gemini"],
    image: "https://picsum.photos/seed/binbot/800/600",
    github: "https://github.com/maneeq166",
    features: [
      "AI-driven waste classification using Google Gemini",
      "Real-time image recognition for waste sorting",
      "User dashboard for tracking disposal history",
      "Educational resources on sustainable waste management",
      "Scalable SaaS architecture for multi-user support"
    ],
    architecture: "The application uses a React frontend for a seamless user experience. The backend is powered by Node.js and Express, with MongoDB as the primary database. Integration with Google Gemini API enables high-accuracy image classification and waste sorting logic."
  },
  {
    id: "jamia-connect",
    title: "JamiaConnect",
    description: "An all-in-one community platform for 20,000+ students at JMI.",
    longDescription: "JamiaConnect is a comprehensive social and informational hub built from scratch to serve the student community at JMI. It integrates communication tools with academic resources.",
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
    id: "slack-meme-bot",
    title: "Slack AI Meme Bot",
    description: "An AI-powered bot for generating memes directly in Slack.",
    longDescription: "Developed a Slack bot using Node.js and Slack Bolt that generates AI-based memes when users tag the bot with a message in Slack channels.",
    tags: ["Node.js", "Slack Bolt", "Magic Hour SDK", "OAuth"],
    image: "https://picsum.photos/seed/slack/800/600",
    github: "https://github.com/maneeq166",
    features: [
      "Dynamic meme generation based on user prompts",
      "Integration with Magic Hour SDK for AI content",
      "Slack OAuth for multi-workspace installation",
      "Automated posting to Slack channels",
      "Interactive bot commands and mentions"
    ],
    architecture: "Built using Node.js and the Slack Bolt framework. It utilizes the Magic Hour SDK for AI-driven image generation and handles multi-workspace authentication via Slack OAuth."
  },
  {
    id: "discord-meme-bot",
    title: "Discord AI Meme Bot",
    description: "An AI-powered bot for generating memes in Discord servers.",
    longDescription: "Developed a Discord bot using Node.js that generates memes when users tag the bot with a prompt in chat, leveraging AI for dynamic content creation.",
    tags: ["Node.js", "Discord.js", "Magic Hour SDK"],
    image: "https://picsum.photos/seed/discord/800/600",
    github: "https://github.com/maneeq166",
    features: [
      "AI-generated memes from user text prompts",
      "Real-time response to Discord mentions",
      "Integration with Magic Hour SDK for image processing",
      "Simple and intuitive bot commands",
      "Scalable bot architecture for multiple servers"
    ],
    architecture: "The bot is built with Discord.js and Node.js. It interfaces with the Magic Hour SDK to generate memes dynamically based on user input received through Discord messages."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "FTK - CIT, Jamia Millia Islamia",
    role: "Full Stack Intern",
    period: "June 2025 – July 2025",
    description: [
      "Developed 'BlogLikho', a secure full-stack blogging platform using PHP and MySQL.",
      "Implemented robust authentication and role-based access control (RBAC) for users and admins.",
      "Engineered a comprehensive Admin Dashboard to manage posts, user moderation, and site activity efficiently."
    ]
  },
  {
    company: "Freelance / Independent",
    role: "Backend & Full-Stack Developer",
    period: "2023 - Present",
    description: [
      "Developed AI-powered Discord and Slack bots using Node.js and the Magic Hour SDK for dynamic meme generation.",
      "Integrated Slack OAuth for multi-workspace installations and automated content delivery.",
      "Architected and deployed multiple full-stack applications using the MERN and Next.js stacks."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Jamia Millia Islamia",
    degree: "Diploma in Computer Engineering",
    period: "2023 - 2026",
    location: "New Delhi, India"
  },
  {
    institution: "Jamia Millia Islamia",
    degree: "Senior Secondary (Class X)",
    period: "2021 - 2023",
    location: "New Delhi, India"
  }
];

export const SKILLS = {
  languages: ["Java", "Python", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS"],
  frameworks: ["React", "Node.js", "Express", "Next.js", "JUnit", "Material-UI", "shadcn"],
  tools: ["Git", "Docker", "VS Code", "IntelliJ", "MongoDB Atlas", "Vercel", "Render"]
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Real-time Applications with Socket.io",
    summary: "A deep dive into architecting real-time systems that can handle thousands of concurrent users.",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    tags: ["WebSockets", "Node.js", "Architecture"]
  },
  {
    id: "2",
    title: "Leveraging Google Gemini for AI-driven SaaS",
    summary: "How we integrated Gemini Pro Vision into BinBot for high-accuracy waste classification.",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    tags: ["AI", "Gemini", "SaaS"]
  },
  {
    id: "3",
    title: "The Future of Full-Stack Development with Next.js 15",
    summary: "Exploring the latest features in Next.js and how they simplify the development lifecycle.",
    date: "Aug 15, 2025",
    readTime: "10 min read",
    tags: ["Next.js", "React", "Frontend"]
  }
];

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
