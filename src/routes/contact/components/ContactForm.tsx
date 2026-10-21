import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Message } from 'primereact/message'

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
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log('Form submission received:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
      {submitted && (
        <div className="mb-6">
          <Message
            severity="success"
            text="Thank you! Your message has been sent successfully. I will get back to you shortly."
            className="w-full"
          />
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Your Name
            </label>
            <InputText
              id="name"
              {...register('name')}
              placeholder="e.g. Jane Doe"
              className={`w-full ${errors.name ? 'p-invalid' : ''}`}
            />
            {errors.name && (
              <span className="text-xs text-rose-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Email Address
            </label>
            <InputText
              id="email"
              type="email"
              {...register('email')}
              placeholder="jane@company.com"
              className={`w-full ${errors.email ? 'p-invalid' : ''}`}
            />
            {errors.email && (
              <span className="text-xs text-rose-500">{errors.email.message}</span>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Subject
          </label>
          <InputText
            id="subject"
            {...register('subject')}
            placeholder="Frontend Architecture Consultation / Project Inquiries"
            className={`w-full ${errors.subject ? 'p-invalid' : ''}`}
          />
          {errors.subject && (
            <span className="text-xs text-rose-500">{errors.subject.message}</span>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Message
          </label>
          <InputTextarea
            id="message"
            rows={5}
            {...register('message')}
            placeholder="Share details about your architectural challenges, timelines, and requirements..."
            className={`w-full ${errors.message ? 'p-invalid' : ''}`}
          />
          {errors.message && (
            <span className="text-xs text-rose-500">{errors.message.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            label={isSubmitting ? 'Sending...' : 'Send Message'}
            icon={isSubmitting ? 'pi pi-spin pi-spinner' : 'pi pi-send'}
            disabled={isSubmitting}
            className="w-full sm:w-auto p-button-primary px-6"
          />
        </div>
      </form>
    </div>
  )
}
