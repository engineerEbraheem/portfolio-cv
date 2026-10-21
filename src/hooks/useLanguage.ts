import { useState, useEffect, useCallback } from 'react'
import { i18n } from '@lingui/core'
import { SupportedLocale, defaultLocale } from '@/i18n/i18n'

const LOCALE_STORAGE_KEY = 'portfolio-locale'

export interface LanguageState {
  currentLocale: SupportedLocale
  isRTL: boolean
  direction: 'ltr' | 'rtl'
  changeLocale: (locale: SupportedLocale) => void
  toggleLocale: () => void
}

export function useLanguage(): LanguageState {
  const [currentLocale, setCurrentLocaleState] = useState<SupportedLocale>(() => {
    if (typeof window === 'undefined') return defaultLocale
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as SupportedLocale | null
    return stored === 'ar' || stored === 'en' ? stored : defaultLocale
  })

  const isRTL = currentLocale === 'ar'
  const direction: 'ltr' | 'rtl' = isRTL ? 'rtl' : 'ltr'

  const applyLocale = useCallback((locale: SupportedLocale) => {
    i18n.activate(locale)
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('lang', locale)
    document.documentElement.setAttribute('dir', dir)
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [])

  useEffect(() => {
    applyLocale(currentLocale)
  }, [currentLocale, applyLocale])

  const changeLocale = (locale: SupportedLocale) => {
    setCurrentLocaleState(locale)
    applyLocale(locale)
  }

  const toggleLocale = () => {
    const next: SupportedLocale = currentLocale === 'en' ? 'ar' : 'en'
    changeLocale(next)
  }

  return {
    currentLocale,
    isRTL,
    direction,
    changeLocale,
    toggleLocale,
  }
}
