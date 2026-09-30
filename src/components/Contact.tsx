export function Contact() {
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
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="contact-form__row">
            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" placeholder="Your name" />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" placeholder="you@example.com" />
            </label>
          </div>

          <label className="contact-field">
            <span>Message</span>
            <textarea name="message" rows={7} placeholder="Write your message here..." />
          </label>

          <div className="contact-form__footer">
            <button className="button button--primary contact-form__submit" type="submit" disabled>
              Send Message
            </button>
            <p id="contact-form-status">Message delivery will be available soon.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
