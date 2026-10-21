import { createFileRoute } from '@tanstack/react-router'
import { portfolioConfig } from '@/config/portfolio.config'
import { ProjectCard } from './components/ProjectCard'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const { projects } = portfolioConfig

  return (
    <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Architectural Projects & Systems
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">
          Enterprise web architectures, performance systems, and design engineering case studies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
