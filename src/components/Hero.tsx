export function Hero() {
  return (
    <section id="home" className="hero section">
      <svg
        className="hero__background"
        viewBox="0 0 1200 620"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="hero-engineering-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--accent-blue)" />
            <stop offset="1" stopColor="var(--accent-cyan)" />
          </linearGradient>
          <marker
            id="hero-arrowhead"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="var(--accent-cyan)" />
          </marker>
        </defs>

        <g transform="translate(190 145)">
          <g className="hero-gear">
            <path
              className="hero-gear__shape"
              transform="translate(-110 -110) scale(13.75)"
              d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
            />
          </g>
        </g>

        <path
          className="hero-transition-path"
          d="M 300 145 C 445 25 690 25 835 150"
          markerEnd="url(#hero-arrowhead)"
        />
        <path
          className="hero-transition-flow"
          d="M 300 145 C 445 25 690 25 835 145"
        />

        <g className="hero-laptop">
          <rect className="hero-laptop__glow" x="832" y="42" width="272" height="208" rx="18" />
          <path
            className="hero-laptop__shape"
            transform="translate(832 8) scale(17)"
            d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"
          />
          <g className="hero-laptop__code">
            <path d="M 938 104 L 914 126 L 938 148" />
            <path d="M 998 104 L 1022 126 L 998 148" />
            <path d="M 980 94 L 956 158" />
          </g>
        </g>
      </svg>

      <div className="hero__content">
        <h1 className="hero__title">Hello, I am Jacky.</h1>
        <p className="hero__subtitle">Mechanical Engineer turned Software Developer</p>
      </div>

      <a className="hero__scroll-cue" href="#about" aria-label="Continue to the About section">
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
          />
        </svg>
      </a>
    </section>
  )
}
