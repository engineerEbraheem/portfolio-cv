import React from 'react'
import { Link } from '@tanstack/react-router'
import { Icon } from '@iconify/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ProjectItem } from '@/config/portfolio'
import { useProjectStore } from '@/store/useProjectStore'

export const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const openProjectModal = useProjectStore((s) => s.openProjectModal)

  return (
    <Card className="flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors h-full">
      <CardHeader className="space-y-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline" className="text-[11px] font-normal">
            {project.category}
          </Badge>
          <div className="flex items-center gap-1.5 text-zinc-400">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
                aria-label="Live Demo"
              >
                <Icon icon="lucide:external-link" className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
                aria-label="Source code"
              >
                <Icon icon="lucide:github" className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        <CardTitle className="text-base font-semibold leading-snug">
          <Link
            to="/projects/$projectId"
            params={{ projectId: project.id }}
            className="hover:underline"
          >
            {project.title}
          </Link>
        </CardTitle>

        <CardDescription className="line-clamp-3 text-xs leading-relaxed">
          {project.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-0 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 pt-3">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs px-2 h-7"
          onClick={() => openProjectModal(project)}
        >
          <span>Preview Details</span>
        </Button>

        <Button asChild variant="outline" size="sm" className="text-xs h-7">
          <Link to="/projects/$projectId" params={{ projectId: project.id }}>
            <span>Specification</span>
            <Icon icon="lucide:arrow-right" className="w-3 h-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
