import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='p-[20px]'>
      {/* Nav Bar */}
      <NavBar />
      {/* Intro */}
      <Home />
      {/* About Me */}
      <AboutMe />
      {/* Skills */}
      <Skills />
      {/* Portfolio */}
      {/* Companies */}
      {/* Contact Us */}
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
