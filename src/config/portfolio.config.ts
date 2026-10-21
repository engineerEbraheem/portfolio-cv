export interface NavItem {
  label: string
  path: string
  icon?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface ProjectItem {
  id: string
  title: string
  summary: string
  description: string
  category: 'Enterprise' | 'Open Source' | 'AI / Cloud'
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
  metrics?: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  technologies: string[]
}

export interface PortfolioConfig {
  personal: {
    name: string
    title: string
    shortBio: string
    location: string
    status: string
    email: string
    github: string
    linkedin: string
    socials: SocialLink[]
  }
  navigation: NavItem[]
  projects: ProjectItem[]
  experience: ExperienceItem[]
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Ebraheem',
    title: 'Senior Frontend & Software Architect',
    shortBio:
      'Designing mission-critical frontend systems, high-performance web applications, and scalable design architectures with React, TypeScript, and modern ecosystem tooling.',
    location: 'Riyadh / Remote',
    status: 'Available for high-impact architecture & engineering leadership',
    email: 'contact@ebraheem.dev',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    socials: [
      {
        platform: 'GitHub',
        url: 'https://github.com',
        icon: 'lucide:github',
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: 'lucide:linkedin',
      },
      {
        platform: 'Email',
        url: 'mailto:contact@ebraheem.dev',
        icon: 'lucide:mail',
      },
    ],
  },
  navigation: [
    { label: 'Home', path: '/', icon: 'lucide:home' },
    { label: 'About', path: '/about', icon: 'lucide:user' },
    { label: 'Projects', path: '/projects', icon: 'lucide:layers' },
    { label: 'Contact', path: '/contact', icon: 'lucide:send' },
  ],
  projects: [
    {
      id: 'enterprise-design-system',
      title: 'Enterprise Scalable Design System',
      summary: 'Multi-brand design system powering 20+ microfrontends with zero runtime CSS conflicts.',
      description:
        'Engineered an enterprise component library with headless primitives, full WCAG 2.2 AA accessibility, bi-directional RTL support, and automated visual regression testing.',
      category: 'Enterprise',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'PrimeReact', 'Storybook'],
      featured: true,
      metrics: '40% reduction in UI development cycle time across 6 product teams',
      repoUrl: 'https://github.com',
    },
    {
      id: 'high-perf-analytics-dashboard',
      title: 'Real-Time Analytics & Telemetry Engine',
      summary: 'Sub-second real-time streaming dashboard handling 50k+ events/sec.',
      description:
        'Architected real-time visualization platform with TanStack Router, WebSockets, canvas rendering, and client-side memory virtualizations.',
      category: 'AI / Cloud',
      tags: ['React', 'TanStack Router', 'TypeScript', 'WebSockets', 'Framer Motion'],
      featured: true,
      metrics: '60 FPS sustained rendering performance under heavy telemetry loads',
      liveUrl: 'https://demo.example.com',
    },
    {
      id: 'multilingual-portal',
      title: 'Global Multilingual Core Platform',
      summary: 'Bi-directional (LTR/RTL) enterprise portal localized into English and Arabic with compiled catalogs.',
      description:
        'Implemented zero-runtime-overhead internationalization using Lingui, dynamic locale switching, and adaptive bidirectional layouts.',
      category: 'Open Source',
      tags: ['Lingui', 'React 19', 'Zod', 'Tailwind CSS', 'PrimeReact'],
      featured: true,
      metrics: '99.9% bundle tree-shaking efficiency for translation catalogs',
      repoUrl: 'https://github.com',
    },
  ],
  experience: [
    {
      company: 'Apex Cloud Solutions',
      role: 'Lead Frontend Architect',
      period: '2022 - Present',
      location: 'Hybrid',
      highlights: [
        'Spearheaded enterprise frontend migration to modern Vite + React TypeScript architecture.',
        'Instituted strict code quality, type safety, and TanStack Router routing paradigms across 15+ developers.',
        'Mentored engineering teams on performance profiling, microfrontends, and accessible UI standards.',
      ],
      technologies: ['React 19', 'TypeScript', 'TanStack Router', 'Tailwind CSS', 'PrimeReact'],
    },
    {
      company: 'ScaleCraft Technologies',
      role: 'Senior Frontend Engineer',
      period: '2020 - 2022',
      location: 'Remote',
      highlights: [
        'Built dynamic client-facing web applications with reactive form handling and schema validations using Zod.',
        'Implemented bi-directional RTL support and internationalization tooling.',
        'Achieved 98+ Google Lighthouse scores across performance, accessibility, and SEO.',
      ],
      technologies: ['React', 'TypeScript', 'Zod', 'Tailwind CSS', 'Framer Motion'],
    },
  ],
}
