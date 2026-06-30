import type { Profile } from '../data/profile'
import { Section } from './Section'

type ContactProps = {
  profile: Profile
}

export function Contact({ profile }: ContactProps) {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Interested in full-stack internship or new grad opportunities?"
      description="The form UI is ready for a free static form provider. Until that endpoint is selected, email is the reliable contact path."
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-line bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold text-ink">Contact details</h3>
          <a className="mt-5 block text-lg font-semibold text-brand hover:text-brand-dark" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="mt-6 space-y-3">
            {profile.socials.map((social) =>
              social.href && social.status === 'ready' ? (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-line px-4 py-3 font-semibold text-ink transition hover:border-brand hover:text-brand"
                >
                  {social.label}
                </a>
              ) : (
                <p
                  key={social.label}
                  className="rounded-2xl border border-dashed border-line px-4 py-3 font-semibold text-muted"
                >
                  {social.label} link pending
                </p>
              ),
            )}
          </div>
        </div>
        <form className="rounded-3xl border border-line bg-card p-6 shadow-sm" aria-describedby="form-status">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Name
              <input
                className="rounded-2xl border border-line bg-surface px-4 py-3 text-base font-normal outline-none transition focus:border-brand"
                name="name"
                placeholder="Your name"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Email
              <input
                className="rounded-2xl border border-line bg-surface px-4 py-3 text-base font-normal outline-none transition focus:border-brand"
                name="email"
                placeholder="you@example.com"
                type="email"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
            Message
            <textarea
              className="min-h-36 rounded-2xl border border-line bg-surface px-4 py-3 text-base font-normal outline-none transition focus:border-brand"
              name="message"
              placeholder="Tell me about the role, project, or opportunity."
            />
          </label>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              className="rounded-full bg-muted px-6 py-3 text-sm font-bold text-white"
              disabled
            >
              Form endpoint pending
            </button>
            <p id="form-status" className="text-sm leading-6 text-muted">
              Next step: connect this form to Formspree, Web3Forms, Getform, or another free
              static form service.
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}
