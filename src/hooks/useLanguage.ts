import { useEffect } from 'react'
import { useLanguageStore } from '@/store/useLanguageStore'
import { SupportedLocale } from '@/i18n/i18n'

export function useLanguage() {
  const currentLocale = useLanguageStore((s) => s.locale)
  const direction = useLanguageStore((s) => s.direction)
  const isRTL = useLanguageStore((s) => s.isRTL)
  const changeLocale = useLanguageStore((s) => s.setLocale)
  const toggleLocale = useLanguageStore((s) => s.toggleLocale)
  const applyLanguage = useLanguageStore((s) => s.applyLanguage)

  useEffect(() => {
    applyLanguage()
  }, [applyLanguage])

  return {
    currentLocale,
    direction,
    isRTL,
    changeLocale: (locale: SupportedLocale) => changeLocale(locale),
    toggleLocale,
  }
}
