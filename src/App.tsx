import { About } from './components/About'
import { Contact } from './components/Contact'
import { CredibilityStrip } from './components/CredibilityStrip'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { education, experiences, profile, projects, skillCategories } from './data/profile'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation links={profile.navigation} name={profile.name} />
      <main>
        <Hero profile={profile} />
        <CredibilityStrip />
        <About profile={profile} />
        <Projects projects={projects} />
        <Skills skillCategories={skillCategories} />
        <ExperienceTimeline experiences={experiences} education={education} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  )
}

export default App
