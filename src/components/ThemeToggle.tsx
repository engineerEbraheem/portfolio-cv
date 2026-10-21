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
      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <Icon
        icon={isDark ? 'lucide:sun' : 'lucide:moon'}
        className="w-5 h-5 transition-transform duration-300 hover:rotate-12"
      />
    </button>
  )
}
