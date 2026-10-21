import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from 'primereact/button'
import { Icon } from '@iconify/react'
import { portfolioConfig } from '@/config/portfolio.config'

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const { projectId } = Route.useParams()
  const project = portfolioConfig.projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Project Specification Not Found
        </h2>
        <p className="text-slate-500">
          The requested project "{projectId}" could not be located.
        </p>
        <Link to="/projects">
          <Button label="Back to Projects" icon="pi pi-arrow-left" />
        </Link>
      </div>
    )
  }

  return (
    <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        <Icon icon="lucide:arrow-left" className="w-4 h-4" />
        <span>Back to Projects</span>
      </Link>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-mono">
            {project.category}
          </span>
          {project.metrics && (
            <span className="text-xs px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono">
              {project.metrics}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          {project.title}
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          Architecture Stack & Technical Specs
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
