import { i18n } from '@lingui/core'
// @ts-expect-error - Imported .po catalog processed by @lingui/vite-plugin
import { messages as enMessages } from './locales/en/messages.po'
// @ts-expect-error - Imported .po catalog processed by @lingui/vite-plugin
import { messages as arMessages } from './locales/ar/messages.po'

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
    'hero.headline': 'Software Engineer specializing in scalable React ecosystems, state architecture, and enterprise front-end systems.',
    'hero.cta.projects': 'Explore Projects',
    'hero.cta.about': 'View Full CV & Experience',
    'section.commercial_impact': 'Commercial Impact',
    'section.technical_matrix': 'Technical Competency Matrix',
    'section.foundational_projects': 'Foundational & Featured Projects',
    'section.academic_foundation': 'Academic & Analytical Foundation',
    'projects.title': 'Projects & Code',
    'projects.subtitle': 'Applications built with React, Redux Toolkit, Zustand, and modern front-end tooling.',
    'projects.filter.all': 'All',
    'projects.filter.architecture': 'Architecture',
    'projects.filter.foundational': 'Foundational / State',
    'projects.action.live_demo': 'Live Demo',
    'projects.action.source_code': 'Source Code',
    'projects.action.case_study': 'Specification / Case Study',
    'projects.action.preview': 'Preview Details',
    'projects.action.back': 'Back to Projects',
    'contact.title': 'Contact & Collaboration',
    'contact.subtitle': 'Discuss front-end engineering, React web apps, or technical opportunities.',
    'contact.send_message': 'Send Message',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عني والخبرات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل',
    'hero.badge': 'متاح لفرص هندسة الواجهات الأمامية والبرمجيات',
    'hero.headline': 'مهندس برمجيات متخصص في أنظمة React المعمارية وإدارة الحالة للواجهات المتقدمة.',
    'hero.cta.projects': 'استعراض المشاريع',
    'hero.cta.about': 'السيرة الذاتية والخبرات',
    'section.commercial_impact': 'الأثر التجاري والمهني',
    'section.technical_matrix': 'المصفوفة التقنية',
    'section.foundational_projects': 'المشاريع الأساسية',
    'section.academic_foundation': 'الأساس الأكاديمي والتحليلي',
    'projects.title': 'المشاريع والأكواد البرمجية',
    'projects.subtitle': 'تطبيقات وأنظمة معمارية مبنية بتقنيات React وRedux Toolkit وZustand وأحدث أدوات الواجهات.',
    'projects.filter.all': 'الكل',
    'projects.filter.architecture': 'المعمارية التقنية',
    'projects.filter.foundational': 'المشاريع التأسيسية / إدارة الحالة',
    'projects.action.live_demo': 'معاينة حية',
    'projects.action.source_code': 'كود المصدر',
    'projects.action.case_study': 'المواصفات / دراسة الحالة',
    'projects.action.preview': 'معاينة سريعة',
    'projects.action.back': 'العودة إلى المشاريع',
    'contact.title': 'تواصل وتعاون',
    'contact.subtitle': 'ناقش تطوير الواجهات الأمامية، تطبيقات React، أو الفرص التقنية.',
    'contact.send_message': 'إرسال رسالة',
  },
}

export function initI18n(initialLocale: SupportedLocale = defaultLocale) {
  // Load compiled catalogs merged with fallback mapped keys
  i18n.load({
    en: { ...defaultMessages.en, ...enMessages },
    ar: { ...defaultMessages.ar, ...arMessages },
  })
  i18n.activate(initialLocale)
  return i18n
}

export function t(key: string, locale: SupportedLocale = 'en'): string {
  const catalog = defaultMessages[locale] || defaultMessages.en
  return catalog[key] || defaultMessages.en[key] || key
}
