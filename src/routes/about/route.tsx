import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Trans } from '@lingui/react/macro'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { getPortfolioConfig } from '@/config/portfolio'
import { useLanguage } from '@/hooks/useLanguage'
import { ExperienceTimeline } from './components/ExperienceTimeline'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const { currentLocale } = useLanguage()
  const { personal, education, skillCategories } = getPortfolioConfig(currentLocale)

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-16">
      {/* Header & Executive Summary */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              <Trans>About & Experience</Trans>
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {currentLocale === 'ar'
                ? 'الخلفية الهندسية، سجل الخبرات المهنية في سوق العمل، والمصفوفة المهارية.'
                : 'Background, commercial engineering track record, and technical competencies.'}
            </p>
          </div>

          <div className="shrink-0">
            <Button asChild className="gap-2 group shadow-sm" size="default" variant="outline">
              <a
                href="/Ebraheem_Althobary_CV.pdf"
                target="_blank"
                rel="noreferrer"
                download="Ebraheem_Althobary_CV.pdf"
              >
                <Icon className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" icon="lucide:download" />
                <span>
                  <Trans>Download CV (PDF)</Trans>
                </span>
              </a>
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200/80 bg-white/70 dark:border-zinc-800/80 dark:bg-zinc-900/40 p-6 space-y-4 shadow-sm">
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {personal.profileSummary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs">
            <div>
              <span className="text-zinc-400 block font-mono">
                {currentLocale === 'ar' ? 'الموقع' : 'Location'}
              </span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">
                {personal.address}
              </span>
            </div>
            <div>
              <span className="text-zinc-400 block font-mono">
                {currentLocale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
              >
                <bdi dir="ltr">{personal.email}</bdi>
              </a>
            </div>
            <div>
              <span className="text-zinc-400 block font-mono">
                {currentLocale === 'ar' ? 'الهاتف' : 'Phone'}
              </span>
              <a
                href={`tel:${personal.phone}`}
                className="font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
              >
                <bdi dir="ltr">{personal.phone}</bdi>
              </a>
            </div>
            <div>
              <span className="text-zinc-400 block font-mono">
                {currentLocale === 'ar' ? 'اللغات' : 'Languages'}
              </span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">
                {personal.languages.map((l) => `${l.name} (${l.level})`).join(', ')}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Work Experience */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {currentLocale === 'ar' ? 'الخبرة المهنية والتجارية' : 'Commercial Work Experience'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {currentLocale === 'ar'
              ? 'تطوير الواجهات الأمامية، بناء المعمارية، وضمان جودة البرمجيات'
              : 'Front-end development, architecture, and software quality assurance history'}
          </p>
        </div>

        <ExperienceTimeline />
      </section>

      {/* Education & Courses */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {currentLocale === 'ar' ? 'التعليم والدورات التدريبية' : 'Education & Courses'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {currentLocale === 'ar'
              ? 'المؤهلات الجامعية الهندسية والشهادات التدريبية التخصصية'
              : 'University engineering degree and specialized certifications'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, idx) => (
            <Card key={idx} className="space-y-2">
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-sm font-semibold">
                  {edu.degree}
                </CardTitle>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {edu.institution} {edu.faculty ? `• ${edu.faculty}` : ''} •{' '}
                  <bdi dir="ltr">{edu.period}</bdi>
                </p>
              </CardHeader>
              {edu.description && (
                <CardContent className="p-5 pt-0 text-xs text-zinc-600 dark:text-zinc-300">
                  {edu.description}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {currentLocale === 'ar' ? 'المهارات والتقنيات البرمجية' : 'Technical Skills & Technologies'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {currentLocale === 'ar'
              ? 'المكتبات المتقدمة، أنظمة التنسيق، قواعد البيانات، والأدوات الهندسية'
              : 'Production-tested libraries, styling systems, databases, and tooling'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((cat, idx) => (
            <Card key={idx} className="p-5 space-y-3">
              <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-2 font-mono">
                <Icon icon={cat.icon} className="w-4 h-4 text-zinc-500" />
                <span>{cat.category}</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-[11px] font-mono font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 dark:border-zinc-800/80 dark:bg-zinc-900/40 p-5 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
          {currentLocale === 'ar' ? 'الكفاءات والمهارات الشخصية' : 'Core Competencies & Soft Skills'}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {personal.softSkills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-md text-xs bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
