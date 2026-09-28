import { About } from './components/About'
import { Contact } from './components/Contact'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'
import { education, experiences, profile, projects } from './data/profile'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <div className="app-shell">
      <Navigation links={profile.navigation} name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <Hero profile={profile} />
        <Projects projects={projects} />
        <About profile={profile} />
        <ExperienceTimeline experiences={experiences} education={education} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  )
}

export default App
