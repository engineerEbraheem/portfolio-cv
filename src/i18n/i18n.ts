import { i18n } from '@lingui/core'

export const defaultLocale = 'en'
export const locales = ['en', 'ar'] as const
export type SupportedLocale = (typeof locales)[number]

export const defaultMessages: Record<SupportedLocale, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.badge': 'Available for High-Impact Architecture Consulting',
    'hero.cta.projects': 'View Architecture & Projects',
    'hero.cta.contact': 'Get In Touch',
    'contact.title': 'Start a Conversation',
    'contact.subtitle': 'Discuss frontend architecture, technical leadership, or project collaborations.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل',
    'hero.badge': 'متاح للاستشارات المعمارية والقيادة الهندسية',
    'hero.cta.projects': 'استعراض المشاريع والمعمارية',
    'hero.cta.contact': 'تواصل معي',
    'contact.title': 'ابدأ محادثة',
    'contact.subtitle': 'ناقش المعمارية البرمجية، القيادة التقنية، أو التعاون في المشاريع.',
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
