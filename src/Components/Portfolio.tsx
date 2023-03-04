import React from 'react'
import { portfolio as portfolioImg } from '../assets'
import { portfolio } from '../Constants'

const Portfolio = () => {
  return (
    <div className='my-10'>
      <div className='flex flex-row justify-center mb-5'>
        <p className='font-semibold text-4xl'>My Project <span className='text-green-500'>Portfolio</span></p>
        <img src={portfolioImg} className='w-12'/>
      </div>
      <div className="grid grid-cols-3 gap-4">
         {portfolio.map((item) => (
          <div className='p-5 text-center hover:bg-green-600 hover:p-4 rounded-lg hover:text-white'>
            <img src={item.imageUrl} className='w-50 h-50 rounded-md'/>
            <div className='mt-2 font-bold text-center'>
              <h2>{item.title}</h2>
            </div>
            <div className='text-center'>
              <p>{item.desc}</p>
            </div>
            <div className='mt-4'>
              <a href={item.siteUrl} target={'_blank3'} className='px-5 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200'> View Demo </a>
            </div>
         </div>
          ))}
      </div>
    </div>
  )
}

export default Portfolio