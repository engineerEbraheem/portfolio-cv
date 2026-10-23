import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { i18n } from '@lingui/core'
import { SupportedLocale } from '@/i18n/i18n'

interface LanguageState {
  locale: SupportedLocale
  direction: 'ltr' | 'rtl'
  isRTL: boolean
  setLocale: (locale: SupportedLocale) => void
  toggleLocale: () => void
  applyLanguage: () => void
}

function syncDomLanguage(locale: SupportedLocale) {
  if (typeof document === 'undefined') return
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('lang', locale)
  document.documentElement.setAttribute('dir', dir)
  i18n.activate(locale)
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      locale: 'en',
      direction: 'ltr',
      isRTL: false,

      setLocale: (locale: SupportedLocale) => {
        const direction = locale === 'ar' ? 'rtl' : 'ltr'
        const isRTL = locale === 'ar'
        syncDomLanguage(locale)
        set({ locale, direction, isRTL })
      },

      toggleLocale: () => {
        const next: SupportedLocale = get().locale === 'en' ? 'ar' : 'en'
        get().setLocale(next)
      },

      applyLanguage: () => {
        const { locale } = get()
        syncDomLanguage(locale)
      },
    }),
    {
      name: 'portfolio-language-store',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.applyLanguage()
        }
      },
    }
  )
)
