import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme } from '@/hooks/useTheme'

export const ThemeToggle: React.FC = () => {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
    >
      <Icon
        icon={isDark ? 'lucide:sun' : 'lucide:moon'}
        className="w-4 h-4 transition-transform duration-200"
      />
    </button>
  )
}
