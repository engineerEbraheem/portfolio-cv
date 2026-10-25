import type { LinguiConfig } from '@lingui/conf'

const config: LinguiConfig = {
  locales: ['en', 'ar'],
  sourceLocale: 'en',
  compileNamespace: 'es',
  catalogs: [
    {
      path: 'src/i18n/locales/{locale}/messages',
      include: ['src'],
    },
  ],
}

export default config
