import { About } from './components/About'
import { Contact } from './components/Contact'
import { Constellation } from './components/Constellation'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Vision } from './components/Vision'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Loader />
      <Cursor />
      <Constellation />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Vision />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
