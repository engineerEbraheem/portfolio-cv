import React from 'react'
import { Icon } from '@iconify/react'
import { portfolioConfig } from '@/config/portfolio.config'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {portfolioConfig.personal.name} &bull; {portfolioConfig.personal.title}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Engineered with React 19, TypeScript, TanStack Router, Tailwind CSS & PrimeReact.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {portfolioConfig.personal.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={social.platform}
            >
              <Icon icon={social.icon} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
