import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { portfolioConfig } from '@/config/portfolio.config'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { personal, projects } = portfolioConfig

  return (
    <div className="flex-1 flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section className="text-center md:text-left py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{personal.status}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Architecting{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mission-Critical
            </span>{' '}
            Web Platforms.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {personal.shortBio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <Link to="/projects">
              <Button
                label="View Projects"
                icon="pi pi-arrow-right"
                iconPos="right"
                className="p-button-primary shadow-lg shadow-indigo-500/20"
              />
            </Link>
            <Link to="/contact">
              <Button
                label="Get in Touch"
                icon="pi pi-envelope"
                className="p-button-outlined"
              />
            </Link>
          </div>
        </motion.div>

        {/* Hero Architectural Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-5/12"
        >
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800/60 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono text-slate-400">architecture.spec.ts</span>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-700 dark:text-slate-300">
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">// Architecture Principles</p>
              <div className="bg-slate-100/70 dark:bg-slate-950/70 p-3 rounded-lg space-y-1">
                <p>1. Type-Safe File-Based Routing (TanStack Router)</p>
                <p>2. Micro-Frontend Ready Design Primitives (PrimeReact)</p>
                <p>3. Zero-Runtime Compilation Localization (Lingui)</p>
                <p>4. Dynamic Dark / Light Token System (Tailwind)</p>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500">
                <span>Bundle Score: 99.8/100</span>
                <span>Type Coverage: 100%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Architecture Projects */}
      <section className="py-12 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Systems
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Selected architectural designs and production implementations
            </p>
          </div>
          <Link
            to="/projects"
            className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>All projects</span>
            <Icon icon="lucide:arrow-right" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <Card
              key={proj.id}
              title={proj.title}
              subTitle={proj.category}
              className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl hover:-translate-y-1 transition-transform"
            >
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {proj.summary}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/projects/$projectId"
                params={{ projectId: proj.id }}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Architecture Details</span>
                <Icon icon="lucide:chevron-right" className="w-3.5 h-3.5" />
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
