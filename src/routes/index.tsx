import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, type Variants } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Trans } from '@lingui/react/macro'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { getPortfolioConfig } from '@/config/portfolio'
import { useLanguage } from '@/hooks/useLanguage'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

function HomePage() {
  const { currentLocale } = useLanguage()
  const { personal, projects, experience, education } = getPortfolioConfig(currentLocale)
  const currentRole = experience.find((e) => e.isCurrent)
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2)

  return (
    <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 w-full space-y-12 sm:space-y-16">
      {/* 1. Centered Hero Section */}
      <section className="text-center space-y-5 pt-4 sm:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {personal.name}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
            {currentLocale === 'ar' ? (
              personal.bio
            ) : (
              <Trans>
                Software Engineer specializing in scalable React ecosystems, state architecture, and enterprise front-end systems.
              </Trans>
            )}
          </p>
        </motion.div>

        {/* Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-1"
        >
          <Button asChild size="default" className="gap-2">
            <Link to="/projects">
              <span>
                <Trans>Explore Projects</Trans>
              </span>
              <Icon icon="lucide:arrow-right" className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="default">
            <Link to="/about">
              <span>
                <Trans>View Full CV & Experience</Trans>
              </span>
            </Link>
          </Button>

          <Button asChild variant="ghost" size="default">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Icon icon="lucide:github" className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </Button>

          {personal.linkedin && (
            <Button asChild variant="ghost" size="default">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Icon icon="lucide:linkedin" className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            </Button>
          )}
        </motion.div>
      </section>

      {/* 2. Responsive Bento Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5"
      >
        {/* Card 1: Commercial Impact (Col-span 8) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-8 rounded-2xl border border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-md shadow-sm flex flex-col justify-between space-y-5"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  <Trans>Commercial Impact</Trans>
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-400 dir-ltr inline-block">
                <bdi dir="ltr">{currentRole?.period || '01/2024 - Present'}</bdi>
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {currentRole?.role} @ {currentRole?.company}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono">
                {currentRole?.location} &bull; {currentRole?.description}
              </p>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {currentRole?.highlights[0] || personal.bio}
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
            {['React', 'Zustand', 'TanStack Query', 'OpenApiFetch', 'React Hook Form', 'Tailwind CSS', 'SASS', 'D3.js', 'GitLab', 'Azure'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Card 2: Tech Matrix (Col-span 4) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-4 rounded-2xl border border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-md shadow-sm flex flex-col justify-between space-y-4"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <Icon icon="lucide:cpu" className="w-3.5 h-3.5 text-zinc-400" />
              <span>
                <Trans>Technical Competency Matrix</Trans>
              </span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {currentLocale === 'ar' ? 'التقنيات المتخصصة' : 'Specialized Stack'}
            </h3>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="space-y-1.5">
              <span className="font-mono text-zinc-400 text-[11px] block uppercase tracking-wider">
                {currentLocale === 'ar' ? 'إدارة الحالة والمعمارية' : 'State & Architecture'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Zustand', 'Redux Toolkit', 'TanStack Router'].map((t) => (
                  <Badge key={t} variant="secondary" className="font-mono text-[11px]">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-zinc-400 text-[11px] block uppercase tracking-wider">
                {currentLocale === 'ar' ? 'البيانات والنماذج' : 'Data & Forms'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['TanStack Query', 'React Hook Form', 'Zod'].map((t) => (
                  <Badge key={t} variant="secondary" className="font-mono text-[11px]">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-zinc-400 text-[11px] block uppercase tracking-wider">
                {currentLocale === 'ar' ? 'التنسيق والمكونات المجردة' : 'Styling & Design Primitives'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Tailwind CSS', 'Radix UI', 'SASS', 'D3.js'].map((t) => (
                  <Badge key={t} variant="secondary" className="font-mono text-[11px]">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Featured Projects (Col-span 7) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-7 rounded-2xl border border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-md shadow-sm space-y-5"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <Icon icon="lucide:layers" className="w-3.5 h-3.5 text-zinc-400" />
              <span>
                <Trans>Foundational & Featured Projects</Trans>
              </span>
            </div>
            <Link
              to="/projects"
              className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 inline-flex items-center gap-1 transition-colors"
            >
              <span>
                <Trans>Projects & Code</Trans>
              </span>
              <Icon icon="lucide:chevron-right" className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-xl border border-zinc-200/70 bg-zinc-50/50 dark:border-zinc-800/70 dark:bg-zinc-950/40 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1.5">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                          aria-label={currentLocale === 'ar' ? 'معاينة حية' : 'Live Demo'}
                        >
                          <Icon icon="lucide:external-link" className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                          aria-label={currentLocale === 'ar' ? 'كود المصدر' : 'GitHub Code'}
                        >
                          <Icon icon="lucide:github" className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 leading-snug">
                    <Link
                      to="/projects/$projectId"
                      params={{ projectId: project.id }}
                      className="hover:underline"
                    >
                      {project.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 4: Academic & Analytical Core (Col-span 5) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-5 rounded-2xl border border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-md shadow-sm flex flex-col justify-between space-y-4"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <Icon icon="lucide:graduation-cap" className="w-3.5 h-3.5 text-zinc-400" />
              <span>
                <Trans>Academic & Analytical Foundation</Trans>
              </span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {currentLocale === 'ar' ? 'الأساس الأكاديمي والتحليلي' : 'Engineering Foundation'}
            </h3>
          </div>

          <div className="space-y-3.5 text-xs">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-zinc-200/60 bg-zinc-50/40 dark:border-zinc-800/60 dark:bg-zinc-950/30 space-y-1"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs leading-snug">
                    {edu.degree}
                  </h4>
                </div>
                <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  {edu.institution} {edu.faculty ? `• ${edu.faculty}` : ''}
                </p>
                <span className="text-[10px] font-mono text-zinc-400 block pt-0.5 dir-ltr inline-block">
                  <bdi dir="ltr">{edu.period}</bdi>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 5: Connect & Availability (Col-span 12) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-12 rounded-2xl border border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-md shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5"
        >
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100">
                {currentLocale === 'ar'
                  ? 'متاح لأدوار هندسة وتطوير الواجهات الأمامية'
                  : 'Available for Engineering & Architecture Roles'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              {currentLocale === 'ar'
                ? 'مستعد للمساهمة في بناء تطبيقات React المعمارية، وتقديم استشارات واجهات المستخدم والقيادة التقنية.'
                : 'Open to high-impact Front-end Development positions, React architecture consulting, and technical leadership.'}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <Icon icon="lucide:map-pin" className="w-3.5 h-3.5 text-zinc-400" />
                <span>{personal.location}</span>
              </span>
              <span>&bull;</span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <Icon icon="lucide:mail" className="w-3.5 h-3.5 text-zinc-400" />
                <bdi dir="ltr">{personal.email}</bdi>
              </a>
              <span>&bull;</span>
              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <Icon icon="lucide:phone" className="w-3.5 h-3.5 text-zinc-400" />
                <bdi dir="ltr">{personal.phone}</bdi>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <Button asChild size="default">
              <Link to="/contact">
                <span>
                  <Trans>Contact & Collaboration</Trans>
                </span>
                <Icon icon="lucide:send" className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
