import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { portfolioConfig } from '@/config/portfolio'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { personal, projects, experience } = portfolioConfig
  const currentRole = experience.find((e) => e.isCurrent)

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-20">
      {/* Hero Section */}
      <section className="space-y-6 pt-4 sm:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {personal.name}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-medium">
              {personal.title}
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
            {personal.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
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
              <span>{personal.email}</span>
            </a>
            <span>&bull;</span>
            <a
              href={`tel:${personal.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Icon icon="lucide:phone" className="w-3.5 h-3.5 text-zinc-400" />
              <span>{personal.phone}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="sm">
              <Link to="/projects">
                <span>View Projects</span>
                <Icon icon="lucide:arrow-right" className="w-3.5 h-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/about">
                <span>Work Experience & CV</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <Icon icon="lucide:github" className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Current Commercial Position Highlight */}
        {currentRole && (
          <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800/80 dark:bg-zinc-900/30 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {currentRole.role} @ {currentRole.company}
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {currentRole.period} &bull; {currentRole.location}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['React', 'Zustand', 'TanStack Query', 'Tailwind CSS'].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-[11px] font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Selected Projects
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Commercial front-end systems, state management architectures, and web tools
            </p>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/projects" className="inline-flex items-center gap-1 text-xs">
              <span>All projects</span>
              <Icon icon="lucide:arrow-right" className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="text-[11px] font-normal">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
                        aria-label="Live Demo"
                      >
                        <Icon icon="lucide:external-link" className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
                        aria-label="Source code"
                      >
                        <Icon icon="lucide:github" className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="text-base font-semibold">
                  <Link
                    to="/projects/$projectId"
                    params={{ projectId: project.id }}
                    className="hover:underline"
                  >
                    {project.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2 text-xs leading-relaxed">
                  {project.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
