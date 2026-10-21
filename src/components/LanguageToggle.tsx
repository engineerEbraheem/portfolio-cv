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
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <Icon icon="lucide:languages" className="w-4 h-4 text-indigo-500" />
      <span>{currentLocale === 'en' ? 'AR' : 'EN'}</span>
    </button>
  )
}
