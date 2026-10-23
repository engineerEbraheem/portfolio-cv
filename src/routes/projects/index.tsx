import { useMemo } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Icon } from '@iconify/react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/Dialog'
import { portfolioConfig } from '@/config/portfolio'
import { useProjectStore } from '@/store/useProjectStore'
import { ProjectCard } from './components/ProjectCard'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const { projects } = portfolioConfig
  const {
    selectedCategory,
    searchQuery,
    selectedProject,
    isDetailModalOpen,
    setSelectedCategory,
    setSearchQuery,
    closeProjectModal,
  } = useProjectStore()

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category))
    return ['All', ...Array.from(set)]
  }, [projects])

  // Filter projects based on Zustand store state
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query))

      return matchesCategory && matchesQuery
    })
  }, [projects, selectedCategory, searchQuery])

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects & Code
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Applications built with React, Redux Toolkit, Zustand, and modern front-end tooling.
        </p>
      </div>

      {/* Controls: Search and Category Pills */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              size="sm"
              className="text-xs h-8"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Icon
            icon="lucide:search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none"
          />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or stack..."
            className="pl-9 h-8 text-xs"
          />
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-3">
          <Icon icon="lucide:search-x" className="w-10 h-10 text-zinc-400 mx-auto" />
          <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            No projects found
          </h3>
          <p className="text-xs text-zinc-500">
            Try resetting your search query or category filters.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory('All')
              setSearchQuery('')
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* Radix UI Dialog for Quick Project Preview */}
      <Dialog open={isDetailModalOpen} onOpenChange={(open) => !open && closeProjectModal()}>
        <DialogContent className="max-w-lg">
          {selectedProject && (
            <div className="space-y-4">
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline">{selectedProject.category}</Badge>
                  <span className="text-xs font-mono text-zinc-500">
                    {selectedProject.subtitle}
                  </span>
                </div>
                <DialogTitle className="text-lg">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-xs pt-1 leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                  Architectural Highlights
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-zinc-100 dark:border-zinc-800">
                {selectedProject.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      <Icon icon="lucide:github" className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  </Button>
                )}
                {selectedProject.demoUrl && (
                  <Button asChild size="sm">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      <Icon icon="lucide:external-link" className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
