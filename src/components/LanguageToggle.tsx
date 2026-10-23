import React from 'react'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/hooks/useLanguage'

export const LanguageToggle: React.FC = () => {
  const { currentLocale, toggleLocale } = useLanguage()

  return (
    <button
      id="language-toggle-btn"
      type="button"
      onClick={toggleLocale}
      aria-label="Switch language"
      className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-mono font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
    >
      <Icon icon="lucide:languages" className="w-3.5 h-3.5 text-zinc-400" />
      <span>{currentLocale === 'en' ? 'AR' : 'EN'}</span>
    </button>
  )
}
