import { i18n } from '@lingui/core'

export const defaultLocale = 'en'
export const locales = ['en', 'ar'] as const
export type SupportedLocale = (typeof locales)[number]

export const defaultMessages: Record<SupportedLocale, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About & Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.badge': 'Available for Front-end & Engineering Roles',
    'hero.cta.projects': 'Explore Projects',
    'hero.cta.about': 'View Full CV & Experience',
    'contact.title': 'Contact & Collaboration',
    'contact.subtitle': 'Discuss front-end engineering, React web apps, or technical opportunities.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عني والخبرات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل',
    'hero.badge': 'متاح لفرص هندسة الواجهات الأمامية والبرمجيات',
    'hero.cta.projects': 'استعراض المشاريع',
    'hero.cta.about': 'عرض السيرة الذاتية والخبرات',
    'contact.title': 'تواصل وتعاون',
    'contact.subtitle': 'ناقش تطوير الواجهات الأمامية، تطبيقات React، أو الفرص التقنية.',
  },
}

export function initI18n(initialLocale: SupportedLocale = defaultLocale) {
  i18n.load({
    en: defaultMessages.en,
    ar: defaultMessages.ar,
  })
  i18n.activate(initialLocale)
  return i18n
}
