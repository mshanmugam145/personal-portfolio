
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import zipy from "zipyai";
import Portfolio from './Components/Portfolio'
zipy.init('c0e9302d');

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
      <Portfolio />
      {/* Companies */}
      {/* Contact Us */}
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
