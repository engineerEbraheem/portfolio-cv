import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Icon } from '@iconify/react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulated async form dispatch
    await new Promise((resolve) => setTimeout(resolve, 600))
    console.log('Contact form inquiry sent:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <div className="rounded-xl border border-zinc-200/80 bg-white/70 dark:border-zinc-800/80 dark:bg-zinc-900/40 p-6 sm:p-8 space-y-6 shadow-sm">
      {submitted && (
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300">
          <Icon icon="lucide:check-circle" className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Thank you! Your message has been sent successfully. I will respond promptly.</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your Name *
            </label>
            <Input
              id="name"
              {...register('name')}
              placeholder="e.g. John Doe"
              className={errors.name ? 'border-rose-500 focus-visible:ring-rose-500' : ''}
            />
            {errors.name && (
              <span className="text-xs text-rose-500 block">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="john@example.com"
              className={errors.email ? 'border-rose-500 focus-visible:ring-rose-500' : ''}
            />
            {errors.email && (
              <span className="text-xs text-rose-500 block">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="subject"
            className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
          >
            Subject *
          </label>
          <Input
            id="subject"
            {...register('subject')}
            placeholder="Front-end Engineering Collaboration / Inquiries"
            className={errors.subject ? 'border-rose-500 focus-visible:ring-rose-500' : ''}
          />
          {errors.subject && (
            <span className="text-xs text-rose-500 block">
              {errors.subject.message}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
          >
            Message *
          </label>
          <Textarea
            id="message"
            rows={5}
            {...register('message')}
            placeholder="Tell me about your application, requirements, or timeline..."
            className={errors.message ? 'border-rose-500 focus-visible:ring-rose-500' : ''}
          />
          {errors.message && (
            <span className="text-xs text-rose-500 block">
              {errors.message.message}
            </span>
          )}
        </div>

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-1.5">
                <Icon icon="lucide:loader-2" className="w-3.5 h-3.5 animate-spin" />
                <span>Sending...</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5">
                <Icon icon="lucide:send" className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
