import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { portfolioConfig } from '@/config/portfolio'
import { ContactForm } from './components/ContactForm'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const { personal } = portfolioConfig

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-2"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Contact & Collaboration
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Available for Front-end Development positions, React web app engineering, and full stack projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Information Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="p-5 pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                Direct Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-0 space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Icon
                  icon="lucide:mail"
                  className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0"
                />
                <div>
                  <span className="text-zinc-400 block font-mono">Email</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Icon
                  icon="lucide:phone"
                  className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0"
                />
                <div>
                  <span className="text-zinc-400 block font-mono">Phone</span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Icon
                  icon="lucide:map-pin"
                  className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0"
                />
                <div>
                  <span className="text-zinc-400 block font-mono">Location</span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                    {personal.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Icon
                  icon="lucide:github"
                  className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0"
                />
                <div>
                  <span className="text-zinc-400 block font-mono">GitHub</span>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
                  >
                    github.com/engineerEbraheem
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
