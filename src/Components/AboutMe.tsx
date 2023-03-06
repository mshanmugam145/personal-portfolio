import React from 'react'
import { laptop, wave } from '../assets'
import { aboutSection, AppText } from '../Constants'

const AboutMe = () => {
  return (
    <div className='mt-36' id='aboutme'>
      <img src={wave} className='w-screen absolute'/>
      <img src={laptop} className='absolute mt-[-130px] md:mt-[-180px] w-[220px] md:w-[300px]'/>
    <div className='h-[300px] bg-green-600'>
      <h2 className='text-[50px] font-bold p-10 text-center text-white'>{AppText.about} 
      <span className='text-black'> {AppText.me}</span></h2>
      <h2 className='text-white mt-7 px-10 md:px-64 lg:px-80 text-center'>{AppText.aboutMeDescripion}</h2>
    </div>

    <div className='flex flex-col mt-[-45px] md:flex-row items-center 
    justify-around px-32'>
      {
        aboutSection.map((item) =>(
          <div className='group hover:bg-green-600 mb-3 p-5 rounded-2xl'>
              <img src={item.image} className="w-[230px] rounded-lg h-[190px] object-cover"/>
              <div className='w-[230px] pb-[20px]'>
                <h2 className='group-hover:text-white font-bold text-center'>{item.title}</h2>
                <h2 className='text-[12px] text-center group-hover:text-gray-200 text-gray-500'>{item.desc}</h2>
              </div>  
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default AboutMe