import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { portfolioConfig } from '@/config/portfolio.config'
import { ContactForm } from './components/ContactForm'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const { personal } = portfolioConfig

  return (
    <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Contact & Technical Inquiries
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Have an architectural challenge, contract engagement, or leadership opportunity? Let's connect.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Direct Contact
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Icon icon="lucide:mail" className="w-4 h-4 text-indigo-500" />
                <a href={`mailto:${personal.email}`} className="hover:underline">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Icon icon="lucide:map-pin" className="w-4 h-4 text-indigo-500" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
