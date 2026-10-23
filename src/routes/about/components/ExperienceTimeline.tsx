import React from 'react'
import { Badge } from '@/components/ui/Badge'
import { portfolioConfig } from '@/config/portfolio'

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
      {portfolioConfig.experience.map((item) => (
        <div key={item.company} className="relative pl-8 group">
          {/* Timeline Dot */}
          <div
            className={`absolute left-3 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 transition-transform ${
              item.isCurrent
                ? 'bg-emerald-500 border-white dark:border-zinc-950 ring-2 ring-emerald-500/20'
                : 'bg-zinc-400 dark:bg-zinc-600 border-white dark:border-zinc-950'
            }`}
          />

          <div className="rounded-xl border border-zinc-200/80 bg-white/70 dark:border-zinc-800/80 dark:bg-zinc-900/50 p-5 space-y-3 shadow-sm backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div className="space-y-0.5">
                <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {item.company} &bull; {item.location}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">
                  {item.period}
                </span>
                {item.isCurrent && (
                  <Badge variant="success" className="text-[10px]">
                    Current
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-400 italic">
              {item.description}
            </p>

            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300 list-disc list-inside">
              {item.highlights.map((highlight, index) => (
                <li key={index} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono"
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
