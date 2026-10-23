import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { portfolioConfig } from '@/config/portfolio'

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const { projectId } = Route.useParams()
  const project = portfolioConfig.projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Project Not Found
        </h2>
        <p className="text-xs text-zinc-500">
          The requested project "{projectId}" could not be located.
        </p>
        <Button asChild size="sm">
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 w-full space-y-8">
      <Button asChild variant="ghost" size="sm" className="-ml-2 text-xs">
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
          <Icon icon="lucide:arrow-left" className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </Button>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline">{project.category}</Badge>
          <span className="text-xs font-mono text-zinc-500">
            {project.subtitle}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {project.demoUrl && (
          <Button asChild size="sm">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <Icon icon="lucide:external-link" className="w-3.5 h-3.5" />
              <span>Live Demonstration</span>
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <Icon icon="lucide:github" className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          </Button>
        )}
      </div>

      <Card>
        <CardHeader className="p-6 pb-3">
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500 font-mono">
            Key Architecture & Features
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-4">
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
