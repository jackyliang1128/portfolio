import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'

const WEB3FORMS_ACCESS_KEY = 'b8e2e7cf-9d7c-4707-a47e-79c837ef9874'
const CONFETTI_COLORS = [
  'var(--accent-blue)',
  'var(--accent-cyan)',
  'var(--accent-teal)',
  '#f59e0b',
  '#ec4899',
]
const CONFETTI_PARTICLES = Array.from({ length: 18 }, (_, index) => {
  const x = -105 + ((index * 47) % 210)

  return {
    x,
    midX: Math.round(x * 0.62),
    y: -68 - ((index * 29) % 56),
    rotation: 220 + ((index * 83) % 300),
    delay: (index % 6) * 24,
    color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
  }
})

type ContactFieldName = 'name' | 'email' | 'message'
type ContactFieldErrors = Partial<Record<ContactFieldName, string>>

export function Contact() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})
  const confettiTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (confettiTimer.current !== null) {
        window.clearTimeout(confettiTimer.current)
      }
    }
  }, [])

  function clearFieldError(field: ContactFieldName) {
    setFieldErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[field]
      return nextErrors
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const errors: ContactFieldErrors = {}

    if (!name) {
      errors.name = 'Please enter your name.'
    }

    if (!email) {
      errors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.'
    }

    if (!message) {
      errors.message = 'Please enter a message.'
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setResult('Please review the highlighted fields.')
      return
    }

    setFieldErrors({})
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)

    setIsSubmitting(true)
    setResult('Sending message...')
    setShowConfetti(false)

    if (confettiTimer.current !== null) {
      window.clearTimeout(confettiTimer.current)
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = (await response.json()) as { success?: boolean }

      if (!response.ok || !data.success) {
        throw new Error('Web3Forms submission failed')
      }

      setResult('Message sent successfully. Thank you!')
      form.reset()
      setShowConfetti(true)
      confettiTimer.current = window.setTimeout(() => {
        setShowConfetti(false)
        confettiTimer.current = null
      }, 1500)
    } catch {
      setResult('Something went wrong. Please try again or use the email link below.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="contact-card" data-reveal>
        <div className="contact-card__intro">
          <h2>Contact Me</h2>
          <p>
            Feel free to reach out and connect with me. I&apos;m always happy to discuss software,
            new opportunities, or interesting ideas.
          </p>
        </div>

        <form
          className="contact-form"
          aria-describedby="contact-form-status"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="contact-form__row">
            <label className="contact-field">
              <span className="contact-field__label">Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                onInput={() => clearFieldError('name')}
                required
              />
              {fieldErrors.name ? (
                <span className="contact-field__error" id="contact-name-error">
                  {fieldErrors.name}
                </span>
              ) : null}
            </label>
            <label className="contact-field">
              <span className="contact-field__label">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                onInput={() => clearFieldError('email')}
                required
              />
              {fieldErrors.email ? (
                <span className="contact-field__error" id="contact-email-error">
                  {fieldErrors.email}
                </span>
              ) : null}
            </label>
          </div>

          <label className="contact-field">
            <span className="contact-field__label">Message</span>
            <textarea
              name="message"
              rows={7}
              placeholder="Write your message here..."
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
              onInput={() => clearFieldError('message')}
              required
            />
            {fieldErrors.message ? (
              <span className="contact-field__error" id="contact-message-error">
                {fieldErrors.message}
              </span>
            ) : null}
          </label>

          <div className="contact-form__footer">
            <div className="contact-form__submit-wrap">
              <button
                className="button button--primary contact-form__submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {showConfetti ? (
                <span className="contact-confetti" aria-hidden="true">
                  {CONFETTI_PARTICLES.map((particle, index) => (
                    <span
                      className="contact-confetti__piece"
                      key={index}
                      style={
                        {
                          '--confetti-x': `${particle.x}px`,
                          '--confetti-mid-x': `${particle.midX}px`,
                          '--confetti-y': `${particle.y}px`,
                          '--confetti-rotation': `${particle.rotation}deg`,
                          '--confetti-delay': `${particle.delay}ms`,
                          backgroundColor: particle.color,
                          borderRadius: index % 3 === 0 ? '50%' : '2px',
                        } as CSSProperties
                      }
                    />
                  ))}
                </span>
              ) : null}
            </div>
            <p id="contact-form-status" role="status" aria-live="polite">
              {result}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
