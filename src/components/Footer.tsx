import React from 'react'
import { Icon } from '@iconify/react'
import { portfolioConfig } from '@/config/portfolio'

export const Footer: React.FC = () => {
  const { personal } = portfolioConfig

  return (
    <footer className="border-t border-zinc-200/70 dark:border-zinc-800/70 py-10 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            {personal.name} &bull; {personal.title}
          </p>
          <p className="text-zinc-500 dark:text-zinc-400">
            {personal.location} &bull; {personal.email} &bull; {personal.phone}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            aria-label="GitHub Profile"
          >
            <Icon icon="lucide:github" className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            aria-label="Email"
          >
            <Icon icon="lucide:mail" className="w-4 h-4" />
          </a>
          <a
            href={`tel:${personal.phone}`}
            className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            aria-label="Phone"
          >
            <Icon icon="lucide:phone" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
