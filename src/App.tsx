import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  )
}

export default App
