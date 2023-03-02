import React from 'react'
import { skill } from '../assets'
import {skillDevops, skillsFrameworks, skillsLanguage, skillsStyles, workDetail} from '../Constants'
const Skills = () => {
  return (
    <div className='mx-20'>
      <div className='flex flex-row justify-center'>
        <img src={skill} className='w-10'/>
        <p className='font-semibold text-4xl'>Skills & <span className='text-purple-500'>Expertise</span></p>
      </div>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            {skillsLanguage.map((item) => (
            <div className='mx-10 my-7'>
               <img src={item.icon} className='w-12 h-12'/>
            </div>
            ))}
          </div>
          <div className='flex flex-row'>
          {skillsStyles.map((item) => (
           <div className='mx-10 my-7'>
           <img src={item.icon} className='w-12 h-12'/>
          </div>
          ))}
          </div>
          <div className='flex flex-row'>
          {skillsFrameworks.map((item) => (
            <div className='mx-10 my-7'>
            <img src={item.icon} className='w-12 h-12'/>
         </div>
          ))}
          </div>
          <div className='flex flex-row'>
          {skillDevops.map((item) => (
            <div className='mx-10 my-7'>
            <img src={item.icon} className='w-12 h-12'/>
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