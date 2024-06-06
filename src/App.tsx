import './App.css'

import Header from './components/Header'
import AboutMe from './pages/About_me'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
