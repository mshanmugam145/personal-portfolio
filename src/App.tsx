import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'

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
      {/* Portfolio */}
      {/* Companies */}
      {/* Contact Us */}
      {/* Footer */}
    </div>
  )
}

export default App
