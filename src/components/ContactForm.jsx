import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { company } from '../data/company'

const initial = { name: '', email: '', message: '' }

/**
 * Contact form with client-side validation.
 * Submits to Formspree — replace company.formspreeId (FORM_ID placeholder).
 */
export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Name is required.'
    if (!values.email.trim()) {
      next.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Enter a valid email address.'
    }
    if (!values.message.trim()) {
      next.message = 'Message is required.'
    } else if (values.message.trim().length < 10) {
      next.message = 'Please write at least 10 characters.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status === 'error' || status === 'success') {
      setStatus('idle')
      setServerError('')
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setServerError('')

    if (!validate()) {
      setStatus('error')
      return
    }

    if (!company.formspreeId || company.formspreeId === 'FORM_ID') {
      setStatus('error')
      setServerError('Replace FORM_ID in src/data/company.js with your Formspree form id.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch(`https://formspree.io/f/${company.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _subject: `Codryn inquiry from ${values.name.trim()}`,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setStatus('success')
      setValues(initial)
      setErrors({})
    } catch (err) {
      setStatus('error')
      setServerError(
        err.message || 'Unable to send message right now. Please try again later.'
      )
    }
  }

  const fieldClass =
    'mt-2 w-full rounded-md border border-codryn-border bg-codryn-elevated px-3 py-2.5 text-sm text-codryn-text outline-none transition placeholder:text-codryn-muted/50 focus:border-codryn-accent disabled:opacity-60'

  return (
    <section id="contact" className="border-t border-codryn-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-codryn-accent">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-codryn-text sm:text-4xl">
              Let’s build something
            </h2>
            <p className="mt-4 text-base leading-relaxed text-codryn-muted">
              Tell us about your project. We’ll get back to you as soon as we can.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <span className="block text-xs uppercase tracking-wider text-codryn-muted">
                  Email
                </span>
                <a
                  href={company.socials.email}
                  className="mt-1 inline-block font-medium text-codryn-text hover:text-codryn-accent"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-codryn-muted">
                  Phone
                </span>
                <a
                  href={company.phoneHref}
                  className="mt-1 inline-block font-medium text-codryn-text hover:text-codryn-accent"
                >
                  {company.phone}
                </a>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-xl border border-codryn-border bg-codryn-surface p-5 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-codryn-text sm:col-span-1">
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange}
                    className={fieldClass}
                    placeholder="Your name"
                    disabled={status === 'loading'}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <span className="mt-1 block text-xs text-red-400">{errors.name}</span>
                  )}
                </label>

                <label className="block text-sm font-medium text-codryn-text sm:col-span-1">
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange}
                    className={fieldClass}
                    placeholder="you@company.com"
                    disabled={status === 'loading'}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <span className="mt-1 block text-xs text-red-400">{errors.email}</span>
                  )}
                </label>
              </div>

              <label className="mt-5 block text-sm font-medium text-codryn-text">
                Message
                <textarea
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  className={`${fieldClass} resize-y`}
                  placeholder="What are you building?"
                  disabled={status === 'loading'}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <span className="mt-1 block text-xs text-red-400">{errors.message}</span>
                )}
              </label>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center rounded-md bg-codryn-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
                {status === 'success' && (
                  <p className="text-sm text-emerald-400">
                    Message sent — thanks for reaching out. We’ll reply soon.
                  </p>
                )}
                {status === 'error' && serverError && (
                  <p className="text-sm text-red-400">{serverError}</p>
                )}
                {status === 'error' && !serverError && Object.keys(errors).length > 0 && (
                  <p className="text-sm text-red-400">Please fix the highlighted fields.</p>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
