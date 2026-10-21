import React from 'react'
import { Link } from '@tanstack/react-router'
import { Card } from 'primereact/card'
import { Icon } from '@iconify/react'
import { ProjectItem } from '@/config/portfolio.config'

export const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <Card
      title={project.title}
      subTitle={
        <div className="flex items-center justify-between text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-1">
          <span>{project.category}</span>
          {project.metrics && <span className="text-emerald-500">{project.metrics}</span>}
        </div>
      }
      className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl flex flex-col justify-between"
    >
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <Link
            to="/projects/$projectId"
            params={{ projectId: project.id }}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Deep Dive Specification</span>
            <Icon icon="lucide:arrow-right" className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                aria-label="Repository"
              >
                <Icon icon="lucide:github" className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                aria-label="Live Demo"
              >
                <Icon icon="lucide:external-link" className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
