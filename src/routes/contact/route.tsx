import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Trans } from '@lingui/react/macro'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { getPortfolioConfig } from '@/config/portfolio'
import { useLanguage } from '@/hooks/useLanguage'
import { ContactForm } from './components/ContactForm'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const { currentLocale } = useLanguage()
  const { personal } = getPortfolioConfig(currentLocale)

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-2"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          <Trans>Contact & Collaboration</Trans>
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          {currentLocale === 'ar'
            ? 'ناقش تطوير الواجهات الأمامية، تطبيقات React، أو الفرص التقنية والاستشارية.'
            : 'Discuss front-end engineering, React web apps, or technical opportunities.'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="p-5 pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                {currentLocale === 'ar' ? 'معلومات التواصل المباشر' : 'Direct Channels'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-0 space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Icon
                  icon="lucide:mail"
                  className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0"
                />
                <div>
                  <span className="text-zinc-400 block font-mono">
                    {currentLocale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
                  >
                    <bdi dir="ltr">{personal.email}</bdi>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Icon
                  icon="lucide:phone"
                  className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0"
                />
                <div>
                  <span className="text-zinc-400 block font-mono">
                    {currentLocale === 'ar' ? 'الهاتف' : 'Phone'}
                  </span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
                  >
                    <bdi dir="ltr">{personal.phone}</bdi>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Icon
                  icon="lucide:map-pin"
                  className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0"
                />
                <div>
                  <span className="text-zinc-400 block font-mono">
                    {currentLocale === 'ar' ? 'الموقع' : 'Location'}
                  </span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                    {personal.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Icon
                  icon="lucide:github"
                  className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0"
                />
                <div>
                  <span className="text-zinc-400 block font-mono">GitHub</span>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
                  >
                    <bdi dir="ltr">github.com/engineerEbraheem</bdi>
                  </a>
                </div>
              </div>

              {personal.linkedin && (
                <div className="flex items-start gap-2.5">
                  <Icon
                    icon="lucide:linkedin"
                    className="w-4 h-4 text-[#0A66C2] mt-0.5 shrink-0"
                  />
                  <div>
                    <span className="text-zinc-400 block font-mono">LinkedIn</span>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
                    >
                      <bdi dir="ltr">linkedin.com/in/ebraheem-althobary</bdi>
                    </a>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
