import React, { useEffect } from 'react'
import { useThemeStore, Theme, ResolvedTheme } from '@/store/useThemeStore'

export type { Theme, ResolvedTheme }

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const applyTheme = useThemeStore((s) => s.applyTheme)

  useEffect(() => {
    applyTheme()
  }, [applyTheme])

  return <>{children}</>
}

export const useTheme = () => {
  const theme = useThemeStore((s) => s.theme)
  const resolvedTheme = useThemeStore((s) => s.resolvedTheme)
  const setTheme = useThemeStore((s) => s.setTheme)
  const toggleTheme = useThemeStore((s) => s.toggleTheme)

  return { theme, resolvedTheme, setTheme, toggleTheme }
}
