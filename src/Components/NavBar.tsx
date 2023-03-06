import React, { useState } from 'react'
import { shanLogo } from '../assets'

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div id='home'>
      <div className='flex justify-between'>
        <img src={shanLogo} className="h-5" />
        <div className='hidden md:flex'>
          <ul className='flex flex-row'>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
            <a href="#home">Home</a>
            </li>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
              <a href="#aboutme">About Me</a>
            </li>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
              <a href="#skill">Skills</a>
            </li>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
            <a href="#portfolio">Portfolio</a>
              </li>
            {/* <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Companies</li> */}
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
            <a href="#contactme">Contact Me</a>
              </li>
          </ul>
        </div>
        <div className='md:hidden lg:hidden'>
          {!toggle? <svg xmlns="http://www.w3.org/2000/svg" 
                    onClick={() => setToggle(true)}  
                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    onClick={() => setToggle(false)}
                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer float-right">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
          }
          {toggle? 
            (<ul className='flex flex-col mt-8 bg-gray-300 p-2 rounded'>
              <li className='p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
              <li className='p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>About Me</li>
              <li className='p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>Skills</li>
              <li className='p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>Portfolio</li>
              <li className='p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>Companies</li>
              <li className='p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>Contact Me</li>
            </ul>)
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar