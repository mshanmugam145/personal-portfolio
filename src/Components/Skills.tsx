import React from 'react'
import { skill } from '../assets'
import { skillDevops, skillsFrameworks, skillsLanguage, skillsStyles, workDetail } from '../Constants'
const Skills = () => {
  return (
    <div className='mx-20' id='skill'>
      <div className='flex flex-row justify-center'>
        <img src={skill} className='w-10'/>
        <p className='font-semibold md:text-4xl text-xl'>Skills & <span className='text-green-500'>Expertise</span></p>
      </div>
      <div className='flex md:flex-row flex-col justify-around'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-around'>
            {skillsLanguage.map((item) => (
            <div className='md:mx-10 md:my-7 sm:mx-5 sm:my-3 mx-2 my-2'>
               <img src={item.icon} className='md:w-[50px] md:h-[50px] sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]'/>
            </div>
            ))}
          </div>
          <div className='flex flex-row justify-around'>
          {skillsStyles.map((item) => (
          <div className='md:mx-10 md:my-7 sm:mx-5 sm:my-3 mx-2 my-2'>
          <img src={item.icon} className='md:w-[50px] md:h-[50px] sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]'/>
       </div>
          ))}
          </div>
          <div className='flex flex-row justify-around'>
          {skillsFrameworks.map((item) => (
            <div className='md:mx-10 md:my-7 sm:mx-5 sm:my-3 mx-2 my-2'>
            <img src={item.icon} className='md:w-[50px] md:h-[50px] sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]'/>
         </div>
          ))}
          </div>
          <div className='flex flex-row justify-around'>
          {skillDevops.map((item) => (
            <div className='md:mx-10 md:my-7 sm:mx-5 sm:my-3 mx-2 my-2'>
            <img src={item.icon} className='md:w-[50px] md:h-[50px] sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]'/>
         </div>
          ))}
          </div>
        </div>

        {/* Work Details */}
        <div className='mt-10'>
        {workDetail.map((item) => (
            <div className='flex flex-row my-3'>
              <div className='mr-10 text-base font-bold'>
                {item.year}
              </div>
              <div className='flex flex-col'>
                <div className='font-semibold'>
                {item.companyName}
                </div>
                <div>
                Project - {item.project}
                </div>
                <div className='text-gray-400'>
                {item.position}
                </div>
              </div>
            </div> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills