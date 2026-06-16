export const QA_PAIRS = [
  {
    question: "Tell me about yourself.",
    answer: "I'm Mohammad Aneeq, a Software Engineering Intern and Computer Engineering student. I started with full-stack development and built projects using React, Next.js, Node.js, Express, and MongoDB. Recently, I've been focusing more on backend engineering and AI systems because I enjoy designing APIs, databases, and scalable software. My current learning path includes Python, FastAPI, PostgreSQL, Redis, Docker, and AI-powered applications.",
    featured: true,
  },
  {
    question: "What are you currently working on?",
    answer: "Right now I'm focused on strengthening my backend engineering fundamentals while transitioning from the MERN stack to Python and FastAPI. I'm also building backend-focused projects, learning PostgreSQL and Redis, and exploring AI systems such as RAG pipelines and agent workflows.",
    featured: true,
  },
  {
    question: "Why did you move from MERN toward Python and Backend Engineering?",
    answer: "MERN gave me a solid foundation, but over time I became more interested in backend architecture, databases, APIs, and system design. Python also opens the door to AI engineering, which is an area I want to specialize in. Instead of being only a full-stack developer, I want deeper backend expertise."
  },
  {
    question: "Which project are you most proud of?",
    answer: "Jamia Connect is probably the project I'm most proud of. It combines authentication, real-time communication, file uploads, and user interactions into one platform. It challenged me to think beyond CRUD applications and helped me understand how users interact with a system in real time.",
    featured: true,
  },
  {
    question: "What problem does Jamia Connect solve?",
    answer: "Jamia Connect was built as a campus platform where students can communicate, share resources, and interact more efficiently. The idea was to create a central place for collaboration rather than relying on scattered communication channels."
  },
  {
    question: "How did you build the real-time chat system in Jamia Connect?",
    answer: "I used Socket.IO to establish real-time communication between users. Messages are emitted through socket events and delivered instantly without page refreshes. Building it taught me a lot about event-driven programming, connection management, and handling live user interactions."
  },
  {
    question: "What did you learn from building the URL Shortener?",
    answer: "The URL Shortener taught me a lot about backend design. Besides shortening URLs, I added analytics, expiration logic, and QR code generation. It helped me understand API design, tracking user actions, and structuring backend services around a specific business requirement."
  },
  {
    question: "Tell me about your E-commerce project.",
    answer: "The project is a full-stack e-commerce platform built with Next.js, Node.js, MongoDB, and Razorpay. It includes authentication, product management, shopping cart functionality, and payment integration. It was a good introduction to building larger applications with multiple moving parts."
  },
  {
    question: "What is the Hospital Management System you're building?",
    answer: "It's a backend-focused system designed to manage hospital operations such as patient records, appointments, billing, pharmacy, and laboratory workflows. The goal is to learn production-style backend engineering while solving a real business problem."
  },
  {
    question: "How do you usually design a backend system?",
    answer: "I start by understanding the business workflow first. Then I identify the core entities, design the database schema, define APIs, and think about authentication and permissions. I prefer starting simple and adding complexity only when necessary."
  },
  {
    question: "How do you handle authentication and authorization?",
    answer: "In my projects I've primarily used JWT-based authentication. Users log in, receive a token, and protected routes verify that token before allowing access. I'm currently learning more advanced concepts such as refresh tokens, RBAC, and OAuth."
  },
  {
    question: "How do you design databases for your projects?",
    answer: "I start by identifying the entities and relationships. After that I think about the queries the application will need most often. The goal is to create a schema that is simple, maintainable, and capable of supporting future features."
  },
  {
    question: "Why are you interested in AI Engineering?",
    answer: "I'm interested in the engineering side of AI rather than the research side. What excites me is building useful applications that combine traditional backend systems with AI capabilities such as retrieval, search, automation, and intelligent workflows.",
    featured: true,
  },
  {
    question: "What AI projects are you planning to build?",
    answer: "I plan to build a document search platform, a RAG-based knowledge assistant, and workflow automation systems that use AI for decision making. The focus is on practical systems rather than demo applications."
  },
  {
    question: "What is RAG and why are you learning it?",
    answer: "RAG stands for Retrieval-Augmented Generation. Instead of relying only on an LLM's training data, the system retrieves relevant information before generating a response. It's one of the most practical ways to build AI systems that work with company documents and knowledge bases."
  },
  {
    question: "Are you available for freelance or contract work?",
    answer: "Yes. I'm open to freelance and contract opportunities, especially projects involving backend development, APIs, automation systems, dashboards, internal tools, or full-stack web applications. I prefer projects where I can solve real business problems rather than only build landing pages.",
    featured: true,
  },
  {
    question: "What services can you currently provide to clients?",
    answer: "I can build full-stack web applications, backend APIs, dashboards, authentication systems, real-time applications, admin panels, internal tools, and custom business software. I can also help improve existing applications by adding features or fixing issues."
  },
  {
    question: "What type of projects are you looking for?",
    answer: "I'm most interested in backend-heavy applications, SaaS products, automation systems, internal tools, and platforms that involve meaningful engineering challenges. I enjoy projects where architecture and problem-solving matter."
  },
  {
    question: "Can you build a complete web application from idea to deployment?",
    answer: "Yes. My previous projects involved frontend development, backend APIs, authentication, databases, deployment, and integrations. While I continue improving my backend skills, I'm comfortable handling the entire development process for many web applications."
  },
  {
    question: "Why should someone hire you?",
    answer: "I focus on understanding the problem before writing code. I enjoy building systems that are maintainable and practical rather than rushing to ship features. I'm also continuously learning, which helps me adapt quickly when a project requires technologies I'm not yet familiar with.",
    featured: true,
  },
  {
    question: "What kind of opportunities are you looking for?",
    answer: "I'm interested in internships, freelance work, contract opportunities, and collaborations that allow me to gain experience in backend engineering, AI systems, and product development. Long term, I want to work on scalable software products and challenging engineering problems."
  },
  {
    question: "What's your tech stack?",
    answer: "My core stack spans React, Next.js, Node.js, Express, and MongoDB from extensive full-stack work. I'm transitioning toward Python, FastAPI, PostgreSQL, Redis, and Docker for backend-focused development. I also work with Socket.IO for real-time communication, JWT for authentication, and various cloud platforms. Currently exploring AI engineering tooling including RAG pipelines and agent workflows.",
    featured: true,
  },
  {
    question: "What are your career goals?",
    answer: "I'm pursuing opportunities in backend engineering, AI systems, and product development — through internships, freelance contracts, or full-time roles. Long term, I want to work on scalable software products and challenging engineering problems that combine traditional backend architecture with AI capabilities. I'm particularly interested in roles where I can design APIs, build distributed systems, and develop practical AI applications.",
    featured: true,
  },
  {
    question: "How can I contact you?",
    answer: "The best way to reach me is by [Email](mailto:aneeqmohd1233@gmail.com). You can also connect on [LinkedIn](https://linkedin.com/in/mohammad-aneeq) or [GitHub](https://github.com/maneeq166). Visit the [Contact section](#contact) on this portfolio to get in touch directly.",
    featured: true,
  }
];

export const FEATURED_QA_PAIRS = QA_PAIRS.filter((qa) => qa.featured);
