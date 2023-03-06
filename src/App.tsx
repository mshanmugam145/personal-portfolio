import { Provider } from 'react-redux';
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import zipy from "zipyai";
import Portfolio from './Components/Portfolio'
import CakeContainer from './ReduxComponent/CakeContainer'
import store from './redux/store';
import HooksCakeContainer from './ReduxComponent/HooksCakeContainer';
zipy.init('c0e9302d');

function App() {
  return (
    <Provider store={store}>
    <div className='p-[20px]'>
      {/* Nav Bar */}
      <NavBar />
      {/* <CakeContainer />
      <HooksCakeContainer /> */}
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
    </Provider>
  )
}

export default App
