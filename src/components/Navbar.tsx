import React, { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Icon } from '@iconify/react'
import { Trans } from '@lingui/react/macro'
import { getPortfolioConfig } from '@/config/portfolio'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useLanguage } from '@/hooks/useLanguage'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { currentLocale } = useLanguage()
  const { personal, navigation } = getPortfolioConfig(currentLocale)

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-4 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full backdrop-blur-md bg-white/75 dark:bg-zinc-900/75 border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm transition-all duration-200">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 font-semibold tracking-tight text-sm group"
          >
            <span className="w-7 h-7 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center text-xs font-bold font-mono">
              E
            </span>
            <span className="hidden sm:inline font-medium text-xs tracking-normal text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
              {personal.name}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                activeOptions={{ exact: item.path === '/' }}
                activeProps={{
                  className:
                    'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 font-semibold',
                }}
                className="px-3 py-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                {item.path === '/' && <Trans>Home</Trans>}
                {item.path === '/about' && <Trans>About & Experience</Trans>}
                {item.path === '/projects' && <Trans>Projects</Trans>}
                {item.path === '/contact' && <Trans>Contact</Trans>}
              </Link>
            ))}
          </nav>

          {/* Toggles & Mobile Menu Button */}
          <div className="flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle navigation"
            >
              <Icon
                icon={mobileMenuOpen ? 'lucide:x' : 'lucide:menu'}
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 rounded-2xl backdrop-blur-md bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/70 dark:border-zinc-800/70 shadow-lg space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                activeOptions={{ exact: item.path === '/' }}
                activeProps={{
                  className:
                    'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 font-semibold',
                }}
                className="block px-3 py-2 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
              >
                {item.path === '/' && <Trans>Home</Trans>}
                {item.path === '/about' && <Trans>About & Experience</Trans>}
                {item.path === '/projects' && <Trans>Projects</Trans>}
                {item.path === '/contact' && <Trans>Contact</Trans>}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
