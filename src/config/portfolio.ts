export interface SocialLink {
  platform: string
  url: string
  icon: string
  display: string
}

export interface NavItem {
  label: string
  path: string
  icon: string
}

export interface ProjectCaseStudy {
  overview: string
  objectives: string[]
  architectureDecisions: {
    decision: string
    rationale: string
  }[]
  challengesSolved: {
    challenge: string
    solution: string
  }[]
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  summary: string
  description: string
  category: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  highlights: string[]
  featured: boolean
  caseStudy?: ProjectCaseStudy
}

export interface ExperienceItem {
  company: string
  location: string
  role: string
  period: string
  isCurrent?: boolean
  description: string
  highlights: string[]
  technologies: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  faculty?: string
  description?: string
}

export interface SkillCategory {
  category: string
  skills: string[]
  icon: string
}

export interface PortfolioData {
  personal: {
    name: string
    title: string
    location: string
    address: string
    email: string
    phone: string
    github: string
    linkedin: string
    bio: string
    profileSummary: string
    status: string
    languages: { name: string; level: string }[]
    softSkills: string[]
  }
  navigation: NavItem[]
  experience: ExperienceItem[]
  education: EducationItem[]
  skillCategories: SkillCategory[]
  projects: ProjectItem[]
}

export const portfolioConfig: PortfolioData = {
  personal: {
    name: 'Ebraheem Naji Althobary',
    title: 'Software Engineer (Front-end Developer)',
    location: "Sana'a, Yemen",
    address: "Al-Nahdha St., Sana'a, Yemen",
    email: 'ebraheemnaji123@gmail.com',
    phone: '+967 773307514',
    github: 'https://github.com/engineerEbraheem',
    linkedin: 'https://www.linkedin.com/in/ebraheem-althobary-696022245',
    status: 'Available for Engineering & Frontend Architecture Roles',
    bio: 'Highly adaptable Software Engineer specializing in Front-end Development, building robust, scalable web applications with strong problem-solving and analytical thinking.',
    profileSummary:
      'A highly adaptable Software Engineer specializing in Front-end Development, driven by a passion for continuous learning and mastering new technologies. I excel in building robust, scalable web applications and thrive in collaborative, dynamic environments. My approach combines strong problem-solving and analytical thinking with excellent time management and flexibility, ensuring high-quality deliverables and effective teamwork. Confident in my ability to adapt, learn, and overcome challenges, I am committed to excelling in any project.',
    languages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'English', level: 'Intermediate' },
    ],
    softSkills: [
      'Continuous Learning & Adaptability',
      'Problem-Solving & Analytical Thinking',
      'Collaboration & Communication',
      'Time Management & Organization',
      'Networking and Cybersecurity Fundamentals',
      'Control Systems, Automation, Robotics & AI (Working Knowledge)',
      'Microsoft Office Suite (Word, PowerPoint, Excel)',
    ],
  },

  navigation: [
    { label: 'Home', path: '/', icon: 'lucide:home' },
    { label: 'About & Experience', path: '/about', icon: 'lucide:user' },
    { label: 'Projects', path: '/projects', icon: 'lucide:layers' },
    { label: 'Contact', path: '/contact', icon: 'lucide:send' },
  ],

  experience: [
    {
      company: 'DeepSafer - Yemen',
      location: 'Yemen',
      role: 'Software Engineer (Front-end Developer)',
      period: '01/2024 - Present',
      isCurrent: true,
      description:
        'Leading front-end development of enterprise-grade, scalable web applications utilizing modern React architectural paradigms.',
      highlights: [
        'Leading the development of robust, scalable, user-friendly web applications using advanced React concepts and modern front-end technologies.',
        'Implementing efficient state management (Zustand), complex routing (React Router, Remix Router), intuitive forms (React Hook Form), and optimized data fetching (TanStack Query, OpenApiFetch).',
        'Designing responsive UIs with Prime-react, SASS, Tailwind CSS, UNO-css, and D3.js for data visualization, ensuring code quality via ESLint standards.',
        'Collaborating cross-functionally for API integration, leveraging Git/GitLab for version control and Azure for deployments.',
      ],
      technologies: [
        'React',
        'Zustand',
        'TanStack Query',
        'OpenApiFetch',
        'React Hook Form',
        'PrimeReact',
        'Tailwind CSS',
        'SASS',
        'UNO-css',
        'D3.js',
        'GitLab',
        'Azure',
      ],
    },
    {
      company: 'YottaGate Co. - Yemen',
      location: 'Yemen',
      role: 'Quality Assurance Engineer',
      period: '09/2022 - 11/2022',
      isCurrent: false,
      description:
        'Delivered quality assurance, software verification, and test lifecycle execution for production software.',
      highlights: [
        'Conducted comprehensive software testing and support to ensure application quality and functionality.',
        'Analyzed system requirements, identified defects, and collaborated with teams for issue resolution and performance improvement.',
      ],
      technologies: ['QA Testing', 'Bug Tracking', 'Requirements Analysis', 'Software Verification'],
    },
  ],

  education: [
    {
      degree: 'Diploma in Web Design and Programming (Full Stack Developer)',
      institution: 'General Telecommunications Institute',
      period: '01/2023 - 06/2023',
      description: 'Comprehensive Full Stack Web Engineering, Modern JavaScript, Architecture & Database Design.',
    },
    {
      degree: 'Bachelor of Electrical Engineering (Computer and Control Engineering)',
      institution: "Sana'a University",
      faculty: 'Faculty of Engineering',
      period: '03/2017 - 11/2021',
      description: 'Computer Systems, Microcontrollers, Industrial Automation, Control Algorithms & Software Engineering.',
    },
  ],

  skillCategories: [
    {
      category: 'Front-end Development (React Advanced)',
      icon: 'lucide:layout',
      skills: [
        'React.js',
        'Zustand',
        'Redux Toolkit',
        'TanStack Query (React Query)',
        'OpenApiFetch',
        'React Hook Form',
        'PrimeReact',
        'Tailwind CSS',
        'SASS',
        'UNO-css',
        'D3.js Data Visualization',
        'LinguiJS',
        'TypeScript',
        'JavaScript (ESNext)',
        'HTML5 & CSS3',
        'Bootstrap',
      ],
    },
    {
      category: 'Back-end & Databases',
      icon: 'lucide:database',
      skills: ['PHP', 'ASP.NET', 'C#', 'C++', 'Python', 'Java', 'MySQL', 'Oracle', 'Microsoft SQL Server'],
    },
    {
      category: 'Engineering & DevOps Tools',
      icon: 'lucide:terminal',
      skills: ['Git', 'GitLab', 'Azure', 'ESLint', 'REST APIs', 'JSON / AJAX', 'jQuery'],
    },
  ],

  projects: [
    {
      id: 'portfolio-cv-platform',
      title: 'Production-Grade Architectural Developer Portfolio',
      subtitle: 'React 19, TanStack Router, Zustand & Radix UI',
      summary:
        'Production-grade developer portfolio engineered with Vite, React 19, and TypeScript. Implements type-safe file-based routing via TanStack Router, centralized state management with Zustand, headless Radix UI primitives with Tailwind CSS, and zero-runtime bidirectional localization (LTR/RTL) with Lingui.',
      description:
        'Engineered a scalable, production-grade personal developer portfolio utilizing React 19, TypeScript, TanStack Router with file-based routing, Zustand state management, Radix UI headless primitives, and Tailwind CSS. Features clean anti-slop design aesthetics, full bidirectional localization (LTR/RTL) using compiled Lingui catalogs, and self-hosted local typography.',
      category: 'Flagship Architecture',
      technologies: ['React 19', 'TypeScript', 'TanStack Router', 'Zustand', 'Tailwind CSS', 'Radix UI', 'LinguiJS'],
      githubUrl: 'https://github.com/engineerEbraheem/portfolio-cv',
      demoUrl: 'https://ebraheem-althobary.vercel.app/',
      highlights: [
        'Strict end-to-end type safety using TanStack Router with automated file-based route tree generation.',
        'Centralized state management with persistent theme switching and bidirectional language synchronization via Zustand.',
        'Accessible, high-performance UI using headless Radix UI primitives and Tailwind CSS with 100% self-hosted local fonts.',
      ],
      featured: true,
      caseStudy: {
        overview:
          'A flagship, human-engineered developer portfolio platform crafted to showcase enterprise-grade frontend architecture, clean code standards, and rigorous design discipline without relying on AI-generated UI slop.',
        objectives: [
          'Deliver an exceptional user experience adhering strictly to Vercel/Raycast design principles.',
          'Provide compile-time type safety across all routing endpoints and URL search parameters.',
          'Enable seamless bidirectional internationalization (English LTR and Arabic RTL) with compiled offline catalogs.',
          'Eliminate external CDN font dependencies by utilizing bundled modern typography (Inter and Cairo).',
        ],
        architectureDecisions: [
          {
            decision: 'Zustand vs. Redux Toolkit for UI State',
            rationale:
              'Zustand offers a lightweight, boilerplate-free store footprint with granular selectors and seamless LocalStorage persistence, ideal for client-side theme and language preferences without context re-render overhead.',
          },
          {
            decision: 'TanStack Router with File-Based Tree Generation',
            rationale:
              'Guarantees strict parameter validation, type-safe navigation links, and automatic code-splitting per route, preventing runtime 404s and broken URL params.',
          },
          {
            decision: 'Headless Radix UI Primitives with Tailwind CSS',
            rationale:
              'Provides unopinionated, fully accessible ARIA compliance and complete design token customization without bloated monolithic component libraries.',
          },
        ],
        challengesSolved: [
          {
            challenge: 'Bidirectional (LTR/RTL) Layout & Font Orchestration',
            solution:
              'Architected synchronized HTML attribute orchestration (`dir` and `lang`) in Zustand with automated CSS variable switching to activate local Cairo typography for Arabic and Inter for English without cumulative layout shifts.',
          },
          {
            challenge: 'Zero-Runtime i18n Catalog Compilation',
            solution:
              'Configured Lingui CLI compilation to pre-compile message catalogs into ultra-lightweight JavaScript modules, eliminating client-side extraction parsing overhead.',
          },
        ],
      },
    },
    {
      id: 'restaurant-orders-redux',
      title: 'Restaurant Orders Page with Shopping Cart & Filter',
      subtitle: 'React.js & Redux Toolkit Architecture',
      summary:
        'Practical milestone application built during early frontend training to master predictable global state orchestration with Redux Toolkit, real-time cart computations, and multi-criteria client-side filtering.',
      description:
        'Engineered an intuitive restaurant menu and order processing web app using React.js and Redux Toolkit. Features immediate item filtering by categories, real-time search indexing, dynamic cart calculation, and responsive layout for mobile and desktop order placement.',
      category: 'Foundational Milestone',
      technologies: ['React.js', 'Redux Toolkit', 'JavaScript', 'CSS3'],
      githubUrl: 'https://github.com/engineerEbraheem/menu_ProjectRedux',
      demoUrl: 'https://menu-project-redux.vercel.app/',
      highlights: [
        'Centralized state management powered by Redux Toolkit for seamless cart mutations and instant reactive UI updates.',
        'High-performance category filters and search indexing for immediate item retrieval.',
        'Adaptive mobile-first layout with smooth order interaction flow.',
      ],
      featured: true,
      caseStudy: {
        overview:
          'A responsive restaurant order management interface developed to solve real-time client-side order computation, category classification, and rapid search filtering across dynamic menu items.',
        objectives: [
          'Implement predictable unidirectional data flow with Redux Toolkit slices.',
          'Provide instant client-side menu filtering and price aggregation.',
          'Design an accessible mobile-first ordering experience with intuitive quantity modifiers.',
        ],
        architectureDecisions: [
          {
            decision: 'Redux Toolkit Slice Architecture',
            rationale:
              'Leveraged createSlice to encapsulate reducer logic and actions for cart item additions, removals, and total amount calculation with immutable updates guaranteed by Immer.',
          },
          {
            decision: 'Pure Component Separation',
            rationale:
              'Divided UI into presentation-focused menu cards, filter chips, and cart summary drawers to maintain clean separation of concerns and high reusability.',
          },
        ],
        challengesSolved: [
          {
            challenge: 'Real-Time Cart Synchronization & Price Computation',
            solution:
              'Implemented memoized selectors to compute item sub-totals, discounts, and total order prices instantaneously during state mutations without unnecessary component re-renders.',
          },
          {
            challenge: 'Smooth Filter & Search Indexing',
            solution:
              'Engineered a combined filtering pipeline that handles concurrent category selection and text queries with deterministic sorting.',
          },
        ],
      },
    },
    {
      id: 'movie-display-redux',
      title: 'Movie Display Page with Search Capability',
      subtitle: 'React.js & Redux Toolkit Catalog Engine',
      summary:
        'Early foundational project focused on asynchronous REST API integration, query synchronization, and Redux state flows for dynamic search and modal views.',
      description:
        'Architected a movie streaming catalog application showcasing popular releases with real-time search queries, pagination, detail modals, and seamless client-side state handling using Redux Toolkit.',
      category: 'Foundational Milestone',
      technologies: ['React.js', 'Redux Toolkit', 'REST API', 'JavaScript'],
      githubUrl: 'https://github.com/engineerEbraheem/movies_ProjectRedux',
      demoUrl: 'https://movies-project-redux.vercel.app/',
      highlights: [
        'Real-time search debounce with dynamic query dispatch to Redux store.',
        'Responsive media grid layout with rating indicators and detail inspection.',
        'Modular component architecture with reusable cards and error boundaries.',
      ],
      featured: true,
      caseStudy: {
        overview:
          'A rich movie discovery catalog interface engineered to practice asynchronous REST API integration, dynamic search querying, and comprehensive state lifecycle management.',
        objectives: [
          'Consume third-party movie database APIs with robust error handling and loading indicators.',
          'Enable live search querying with debounced state dispatch to avoid unnecessary network queries.',
          'Build an interactive modal inspection view for movie metadata and ratings.',
        ],
        architectureDecisions: [
          {
            decision: 'Asynchronous State Management with createAsyncThunk',
            rationale:
              'Standardized loading, success, and error lifecycles across movie queries, ensuring predictable UI feedback during network latency.',
          },
          {
            decision: 'Axios Instance Abstraction',
            rationale:
              'Configured centralized Axios HTTP clients with base URLs, API keys, and error interceptors for consistent API communications.',
          },
        ],
        challengesSolved: [
          {
            challenge: 'Search Query Debouncing & Request Race Conditions',
            solution:
              'Implemented input debounce and request cancellation tokens to ensure that outdated asynchronous network responses never overwrite newer search results.',
          },
          {
            challenge: 'Responsive Media Layout Performance',
            solution:
              'Optimized image card rendering with aspect-ratio preservation and lightweight modal backdrops for fluid navigation across devices.',
          },
        ],
      },
    },
  ],
}

import { portfolioAr } from './portfolio.ar'

export function getPortfolioConfig(locale: string = 'en'): PortfolioData {
  return locale === 'ar' ? portfolioAr : portfolioConfig
}

