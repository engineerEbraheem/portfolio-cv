import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio.config'
import { ExperienceTimeline } from './components/ExperienceTimeline'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const { personal } = portfolioConfig

  return (
    <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          About & Experience
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {personal.shortBio}
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Career & Architectural Track Record
        </h2>
        <ExperienceTimeline />
      </section>
    </div>
  )
}
