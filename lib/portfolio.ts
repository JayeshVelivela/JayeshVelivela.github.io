export const profile = {
  name: 'Jayesh Velivela',
  title: 'Computer Science student and systems-minded software engineer',
  location: 'Ann Arbor, Michigan',
  email: 'jvelivel@umich.edu',
  phone: '313-529-0101',
  github: 'https://github.com/JayeshVelivela',
  githubLabel: 'github.com/JayeshVelivela',
  linkedin: 'https://www.linkedin.com/in/jayeshvelivela/',
  linkedinLabel: 'linkedin.com/in/jayeshvelivela',
  resume: '/Jayesh_Velivela_Resume.pdf',
  website: 'jayeshvelivela.github.io',
  headline:
    'I build backend platforms, distributed systems, and product experiences that are designed to hold up in the real world.',
  summary:
    'I am a B.S.E. Computer Science student at the University of Michigan, expected to graduate in May 2027. My work focuses on APIs, data systems, authentication, cloud deployment, testing, and the details that make software reliable after the demo is over.',
}

export const proofPoints = [
  {
    value: '20+',
    label: 'REST APIs designed and optimized across fintech and healthcare systems',
  },
  {
    value: '35%',
    label: 'backend response-time improvement during software engineering internship work',
  },
  {
    value: '150+',
    label: 'automated unit and integration tests authored with JUnit, xUnit, and RTL',
  },
  {
    value: '91%',
    label: 'test coverage reached after expanding regression protection from 57%',
  },
]

export const nowCards = [
  {
    label: 'Currently',
    title: 'Technology Summer Analyst at Accenture',
    detail:
      'Summer 2026 role in San Francisco, connecting software engineering fundamentals with cloud, enterprise, and client-facing technology work.',
  },
  {
    label: 'Studying',
    title: 'B.S.E. in Computer Science at Michigan',
    detail:
      'Expected May 2027, with coursework in distributed systems, computer networks, web systems, UI development, data structures, algorithms, and computer organization.',
  },
  {
    label: 'Building',
    title: 'Production-style systems projects',
    detail:
      'Recent work spans agent execution infrastructure, multi-tenant document processing, and a real-time mobile fitness platform.',
  },
]

export const projects = [
  {
    title: 'Agent Execution Platform',
    date: 'August 2025',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Distributed Systems'],
    summary:
      'A modular platform for secure agent coordination, capability discovery, and sandboxed task execution across distributed systems.',
    impact:
      'Shows systems design depth: identity, reputation, verification, sandbox execution, and a credit-based ledger designed behind clean abstraction layers.',
    details: [
      'Architected a multi-layer execution platform with clear separation between coordination, capability discovery, trust, and execution concerns.',
      'Designed public-key identity, reputation scoring, containerized sandbox execution, verification pipelines, and ledger primitives for future cloud and AI integrations.',
    ],
  },
  {
    title: 'Multi-Tenant Document Processing Platform',
    date: 'December 2025',
    stack: ['FastAPI', 'Redis', 'Docker', 'JWT', 'SQLAlchemy', 'PostgreSQL'],
    summary:
      'A production-focused distributed backend that enforces tenant isolation, secure authentication, and scalable document ingestion.',
    impact:
      'Demonstrates backend ownership across data modeling, authorization boundaries, low-latency caching, and downstream analytics readiness.',
    details: [
      'Implemented JWT authentication, role-based authorization, PostgreSQL schemas, and Redis-backed caching workflows.',
      'Structured the service for multi-user environments with tenant isolation and predictable processing paths.',
    ],
    link: 'https://github.com/JayeshVelivela/multi-tenant-document-processing-platform',
  },
  {
    title: 'Lift Link',
    date: 'July 2025',
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Supabase', 'PostgreSQL'],
    summary:
      'A full-stack mobile fitness app with real-time workout logging, analytics, and a latency-sensitive social feed.',
    impact:
      'Highlights product engineering range: mobile UX, real-time synchronization, relational modeling, auth, and social interactions.',
    details: [
      'Built real-time workout logging, analytics, and social feed flows with React Native and TypeScript.',
      'Integrated Supabase for authentication, role-based access control, real-time data sync, and relational storage.',
    ],
    link: 'https://github.com/JayeshVelivela/LiftLink',
  },
]

export const experiences = [
  {
    role: 'Technology Summer Analyst',
    company: 'Accenture',
    location: 'San Francisco, California',
    dates: 'June 2026 - August 2026',
    current: true,
    bullets: [
      'Summer 2026 technology analyst role focused on applying engineering, cloud, and systems thinking in client-facing enterprise environments.',
      'Bringing a backend-heavy foundation in APIs, testing, data systems, and deployment automation into a consulting and delivery context.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Ghadys LLC',
    location: 'Northville, Michigan',
    dates: 'May 2025 - August 2025',
    bullets: [
      'Designed and optimized 20+ RESTful APIs using Java Spring Boot and C .NET Core, improving backend response time by 35 percent across high-volume fintech and healthcare systems.',
      'Authored 150+ automated unit and integration tests using JUnit, xUnit, and React Testing Library, increasing test coverage from 57% to 91% and reducing regression defects by 60%.',
      'Automated CI/CD pipelines with GitHub Actions and Azure DevOps, reducing deployment time by 85% and enabling consistent daily production pushes across regional cloud environments.',
    ],
  },
  {
    role: 'Outreach Director Intern',
    company: 'M1 Digital',
    location: 'Detroit, Michigan',
    dates: 'March 2024 - December 2024',
    bullets: [
      'Analyzed and cleaned datasets from 10+ digital marketing events using Excel and SQL, then built interactive dashboards with charts, filters, and pivot tables.',
      'Collaborated with product and marketing teams to define and execute OKRs for digital equity initiatives, impacting 100+ participants and expanding access to tech education resources.',
      'Designed Airtable and Zapier registration and feedback workflows, reducing manual coordination time by 50% while enabling real-time attendance tracking and sentiment analysis.',
    ],
  },
]

export const skillGroups = [
  {
    name: 'Languages',
    skills: ['Golang', 'Python', 'C++', 'Java', 'C', 'JavaScript', 'SQL', 'Bash', 'Swift', 'TypeScript'],
  },
  {
    name: 'Backend & Systems',
    skills: [
      'RESTful APIs',
      'Authentication',
      'Authorization',
      'PostgreSQL',
      'Redis',
      'Distributed Systems',
      'Data Engineering',
      'Machine Learning Systems',
      'Algorithms',
      'Performance-aware backend development',
      'FastAPI',
      'Spring Boot',
      '.NET Core',
    ],
  },
  {
    name: 'Infrastructure & DevOps',
    skills: ['CI/CD', 'GitHub Actions', 'Azure DevOps', 'Docker', 'AWS', 'GCP', 'Azure', 'Kubernetes', 'Linux'],
  },
  {
    name: 'Product & Data Tools',
    skills: [
      'React Native',
      'Redux Toolkit',
      'Supabase',
      'Unit Testing',
      'Agile/Scrum',
      'Matplotlib',
      'Power BI',
      'Tableau',
      'Excel',
      'Google Sheets',
      'Airtable',
      'Zapier',
      'Object-oriented programming',
    ],
  },
]

export const coursework = [
  'Data Structures and Algorithms',
  'Computer Organization',
  'Discrete Math',
  'Web Systems',
  'User Interface Development',
  'Computer Networks',
  'Distributed Systems',
]
