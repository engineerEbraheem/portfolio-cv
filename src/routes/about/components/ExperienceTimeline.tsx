import React from 'react'
import { portfolioConfig } from '@/config/portfolio.config'

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
      {portfolioConfig.experience.map((exp) => (
        <div key={exp.company} className="relative pl-8 group">
          <div className="absolute left-2 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-indigo-600 bg-white dark:bg-slate-900 group-hover:scale-125 transition-transform" />
          <div className="glass-card p-5 rounded-xl border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {exp.role} <span className="text-indigo-600 dark:text-indigo-400">@ {exp.company}</span>
              </h3>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {exp.period} &bull; {exp.location}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-600 dark:text-slate-300 mb-3">
              {exp.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
