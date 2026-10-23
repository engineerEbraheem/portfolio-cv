import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  applyTheme: () => void
}

function getSystemDark(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function resolveThemeMode(theme: Theme): ResolvedTheme {
  if (theme === 'system') {
    return getSystemDark() ? 'dark' : 'light'
  }
  return theme
}

function syncDomTheme(resolved: ResolvedTheme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (resolved === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      resolvedTheme: resolveThemeMode('system'),

      setTheme: (theme: Theme) => {
        const resolvedTheme = resolveThemeMode(theme)
        syncDomTheme(resolvedTheme)
        set({ theme, resolvedTheme })
      },

      toggleTheme: () => {
        const current = get().resolvedTheme
        const next: Theme = current === 'dark' ? 'light' : 'dark'
        get().setTheme(next)
      },

      applyTheme: () => {
        const { theme } = get()
        const resolvedTheme = resolveThemeMode(theme)
        syncDomTheme(resolvedTheme)
        set({ resolvedTheme })
      },
    }),
    {
      name: 'portfolio-theme-store',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.applyTheme()
        }
      },
    }
  )
)
