import { useMemo } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Icon } from '@iconify/react'
import { Trans } from '@lingui/react/macro'
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
import { getPortfolioConfig } from '@/config/portfolio'
import { useProjectStore } from '@/store/useProjectStore'
import { useLanguage } from '@/hooks/useLanguage'
import { ProjectCard } from './components/ProjectCard'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const { currentLocale } = useLanguage()
  const { projects } = getPortfolioConfig(currentLocale)
  const {
    selectedCategory,
    searchQuery,
    selectedProject,
    isDetailModalOpen,
    setSelectedCategory,
    setSearchQuery,
    closeProjectModal,
  } = useProjectStore()

  // Clean structured categories: All, Architecture, Foundational / State
  const filterOptions = useMemo(
    () => [
      { id: 'All', label: currentLocale === 'ar' ? 'الكل' : 'All' },
      {
        id: currentLocale === 'ar' ? 'معمارية رائدة' : 'Flagship Architecture',
        label: currentLocale === 'ar' ? 'المعمارية التقنية' : 'Architecture',
      },
      {
        id: currentLocale === 'ar' ? 'مشروع تأسيسي' : 'Foundational Milestone',
        label: currentLocale === 'ar' ? 'المشاريع التأسيسية / إدارة الحالة' : 'Foundational / State',
      },
    ],
    [currentLocale]
  )

  // Filter projects based on Zustand store state
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category === selectedCategory ||
        (selectedCategory === 'Flagship Architecture' && project.category === 'معمارية رائدة') ||
        (selectedCategory === 'Foundational Milestone' && project.category === 'مشروع تأسيسي') ||
        (selectedCategory === 'معمارية رائدة' && project.category === 'Flagship Architecture') ||
        (selectedCategory === 'مشروع تأسيسي' && project.category === 'Foundational Milestone')

      const query = searchQuery.toLowerCase().trim()
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query))

      return matchesCategory && matchesQuery
    })
  }, [projects, selectedCategory, searchQuery])

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          <Trans>Projects & Code</Trans>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          {currentLocale === 'ar'
            ? 'تطبيقات وأنظمة معمارية مبنية بتقنيات React و Redux Toolkit و Zustand وأحدث أدوات الواجهات.'
            : 'Applications built with React, Redux Toolkit, Zustand, and modern front-end tooling.'}
        </p>
      </div>

      {/* Controls: Search and Clean Category Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          {filterOptions.map((opt) => (
            <Button
              key={opt.id}
              variant={
                selectedCategory === opt.id ||
                (selectedCategory === 'All' && opt.id === 'All')
                  ? 'default'
                  : 'outline'
              }
              size="sm"
              className="text-xs h-8"
              onClick={() => setSelectedCategory(opt.id)}
            >
              {opt.label}
            </Button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Icon
            icon="lucide:search"
            className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none"
          />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              currentLocale === 'ar'
                ? 'ابحث في المشاريع أو التقنيات...'
                : 'Search projects or stack...'
            }
            className="pl-9 rtl:pl-3 rtl:pr-9 h-8 text-xs"
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
            {currentLocale === 'ar' ? 'لم يتم العثور على مشاريع' : 'No projects found'}
          </h3>
          <p className="text-xs text-zinc-500">
            {currentLocale === 'ar'
              ? 'جرّب إعادة تعيين كلمة البحث أو تصفية التصنيفات.'
              : 'Try resetting your search query or category filters.'}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory('All')
              setSearchQuery('')
            }}
          >
            {currentLocale === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
          </Button>
        </div>
      )}

      {/* Radix UI Dialog for Quick Project Preview */}
      <Dialog open={isDetailModalOpen} onOpenChange={(open) => !open && closeProjectModal()}>
        <DialogContent className="max-w-lg p-6 sm:p-7">
          {selectedProject && (
            <div className="space-y-5">
              <DialogHeader className="pr-8 rtl:pr-0 rtl:pl-8">
                <div className="flex flex-wrap items-center gap-2 mb-1.5 text-start">
                  <Badge variant="outline" className="text-xs font-normal">
                    {selectedProject.category}
                  </Badge>
                  {selectedProject.subtitle && (
                    <span className="text-xs font-mono text-zinc-500">
                      {selectedProject.subtitle.startsWith('معمارية ') ? (
                        <>
                          <span>معمارية </span>
                          <bdi dir="ltr" className="font-mono text-zinc-600 dark:text-zinc-300">
                            {selectedProject.subtitle.replace('معمارية ', '')}
                          </bdi>
                        </>
                      ) : selectedProject.subtitle.startsWith('محرك تصفح الأفلام بـ ') ? (
                        <>
                          <span>محرك تصفح الأفلام بـ </span>
                          <bdi dir="ltr" className="font-mono text-zinc-600 dark:text-zinc-300">
                            {selectedProject.subtitle.replace('محرك تصفح الأفلام بـ ', '')}
                          </bdi>
                        </>
                      ) : (
                        <bdi dir="ltr">{selectedProject.subtitle}</bdi>
                      )}
                    </span>
                  )}
                </div>
                <DialogTitle className="text-lg sm:text-xl font-bold text-start">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm pt-1 leading-relaxed text-start text-zinc-600 dark:text-zinc-300">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider rtl:tracking-normal text-zinc-500 font-mono">
                  {currentLocale === 'ar' ? 'أبرز الملامح المعمارية' : 'Architectural Highlights'}
                </h4>
                <ul className="list-disc list-outside ml-4 rtl:ml-0 rtl:mr-4 space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider rtl:tracking-normal text-zinc-500 font-mono">
                  {currentLocale === 'ar' ? 'التقنيات المستخدمة' : 'Technologies'}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-end gap-2.5 border-t border-zinc-100 dark:border-zinc-800">
                {selectedProject.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      <Icon icon="lucide:github" className="w-4 h-4" />
                      <span>{currentLocale === 'ar' ? 'كود المصدر' : 'Source'}</span>
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
                      <Icon icon="lucide:external-link" className="w-4 h-4" />
                      <span>{currentLocale === 'ar' ? 'معاينة حية' : 'Live Demo'}</span>
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
