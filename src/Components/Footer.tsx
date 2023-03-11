import React from 'react'
import { instagram, linkdin, youtube, github } from '../assets'

const Footer = () => {
  return (
    <div className='bg-gray-300 w-[100%] h-[150px]' id='contactme'>
    <div className='flex flex-row justify-center items-center'>
      
      <a href='https://www.linkedin.com/in/shanmugam-manimaran-aa897399' rel="noreferrer" target={'_blank'}> 
        <img src={linkdin} className='mx-3 mt-6 w-12 h-12' />
      </a>
      
      <a href='https://www.youtube.com/@mshanmugam' target={'_blank'} rel="noreferrer"> 
        <img src={youtube} className='mx-3 mt-6 w-12 h-12' />
      </a>

      <a href='https://github.com/mshanmugam145' target={'_blank'} rel="noreferrer"> 
        <img src={github} className='mx-3 mt-6 w-12 h-12' />
      </a>

      <a href='https://www.instagram.com/shanmugam3731/' rel="noreferrer" target={'_blank'}>
        <img src={instagram} className='mx-3 mt-6 w-12 h-12' />
      </a>

    </div>
    <div className='flex flex-row justify-center items-center mt-2'>
        <p>
          Copyright by Shanmugam Manimaran
        </p>
      </div>
    </div>

  )
}

export default Footer