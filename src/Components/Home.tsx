import React from 'react'
import { homeImage } from '../assets'
import { AppText } from '../Constants'

const Home = () => {
  return (
    <div className='mt-7 px-4 md:px-20 items-center flex flex-col md:flex-row'>
      <div>
        <h2 className='text-[30px] font-bold'>{AppText.hello}</h2>
        <h2 className='text-[30px] font-bold'>{AppText.Iam} 
        <span className='text-green-600'>{AppText.shan}</span></h2>
        <h2 className='text-gray-400 mt-3'>{AppText.intro}</h2>
        <button className='bg-green-600 p-2 mt-4 transition-all ease-in-out hover:scale-110 text-white px-3 rounded-md'>Resume</button>
      </div>
        <img src={homeImage} className='w-[300px] md:w-[400px]' />
    </div>
  )
}

export default Home