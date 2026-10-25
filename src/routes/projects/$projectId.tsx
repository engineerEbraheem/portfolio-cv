import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { getPortfolioConfig } from '@/config/portfolio'
import { useLanguage } from '@/hooks/useLanguage'

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const { projectId } = Route.useParams()
  const { currentLocale } = useLanguage()
  const { projects } = getPortfolioConfig(currentLocale)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          {currentLocale === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}
        </h2>
        <p className="text-xs text-zinc-500">
          {currentLocale === 'ar'
            ? `تعذر العثور على المشروع المطلوب "${projectId}".`
            : `The requested project "${projectId}" could not be located.`}
        </p>
        <Button asChild size="sm">
          <Link to="/projects">
            {currentLocale === 'ar' ? 'العودة إلى المشاريع' : 'Back to Projects'}
          </Link>
        </Button>
      </div>
    )
  }

  const { caseStudy } = project

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-10">
      {/* Back button */}
      <Button asChild variant="ghost" size="sm" className="-ml-2 rtl:-ml-0 rtl:-mr-2 text-xs">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <Icon icon="lucide:arrow-left" className="w-3.5 h-3.5 rtl:rotate-180" />
          <span>{currentLocale === 'ar' ? 'العودة إلى المشاريع' : 'Back to Projects'}</span>
        </Link>
      </Button>

      {/* Header and Summary */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline">{project.category}</Badge>
          <span className="text-xs font-mono text-zinc-500">
            {project.subtitle}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h1>

        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Live Links & Source Code Banner */}
      <div className="p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/60 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>
            {currentLocale === 'ar'
              ? 'معاينة النشر الحي والتحقق من كود المصدر المفتوح'
              : 'Production Deployment & Open Source Verification'}
          </span>
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
                <span>{currentLocale === 'ar' ? 'معاينة حية' : 'Live Demo'}</span>
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
                <span>{currentLocale === 'ar' ? 'كود المصدر' : 'Source Code'}</span>
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Case Study Breakdown */}
      {caseStudy ? (
        <div className="space-y-8">
          {/* 1. Project Overview & Objectives */}
          <Card>
            <CardHeader className="p-6 pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                {currentLocale === 'ar' ? 'نظرة عامة على المشروع والأهداف' : 'Project Overview & Objectives'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {caseStudy.overview}
              </p>
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono block">
                  {currentLocale === 'ar' ? 'الأهداف الهندسية الأساسية' : 'Core Engineering Goals'}
                </span>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  {caseStudy.objectives.map((obj, i) => (
                    <li key={i} className="leading-relaxed">
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 2. Key Architecture Decisions */}
          <Card>
            <CardHeader className="p-6 pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                {currentLocale === 'ar' ? 'القرارات المعمارية الرئيسية' : 'Key Architecture Decisions'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.architectureDecisions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200/70 bg-zinc-50/50 dark:border-zinc-800/70 dark:bg-zinc-950/40 space-y-2"
                  >
                    <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                      <Icon icon="lucide:check-circle-2" className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{item.decision}</span>
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 3. Technical Challenges Solved */}
          <Card>
            <CardHeader className="p-6 pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                {currentLocale === 'ar' ? 'التحديات التقنية التي تم حلها' : 'Technical Challenges Solved'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="space-y-3">
                {caseStudy.challengesSolved.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200/70 bg-zinc-50/50 dark:border-zinc-800/70 dark:bg-zinc-950/40 space-y-2"
                  >
                    <div className="flex items-start gap-2">
                      <Icon
                        icon="lucide:alert-circle"
                        className="w-4 h-4 text-amber-500 mt-0.5 shrink-0"
                      />
                      <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.challenge}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}

      {/* Technologies & Architectural Highlights Card */}
      <Card>
        <CardHeader className="p-6 pb-3">
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500 font-mono">
            {currentLocale === 'ar' ? 'التقنيات والمكونات المعمارية' : 'Core Technologies & Primitives'}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-4">
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

          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
              {currentLocale === 'ar' ? 'الميزات والخصائص الهندسية' : 'Key Features'}
            </h4>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
