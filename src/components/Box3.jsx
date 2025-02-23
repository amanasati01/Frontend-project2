import React from 'react'
import HorizontalGrid from './HorizontalGrid'
import competitorsKeywords from '../assets/competitorsKeywords.png'
function Box3() {
  return (
    <div className='relative'>
        <div className='flex justify-center items-center h-10 '>
          <div className='w-[80%] h-full pt-4 pl-4 text-lg font-medium text-gray-400 '>
           Add Keyword
          </div>
         </div>
         
         <div className='h-24 relative '>
            <HorizontalGrid/>
        </div>
         <div className='absolute top-14 left-1/2 -translate-x-1/2 right-9 w-[60rem] h-[20rem] '>
              <img src={competitorsKeywords} alt="" />
         </div>
         <div className='absolute border-[2px] top-0 left-1/2 -translate-x-1/2 border-white/5 w-[60rem] h-[25.8rem] rounded-xl border-t-0'></div>
         <div className='flex flex-col justify-center items-center w-full h-[7rem]  mt-56 pt-6'>
            <h1 className='text-3xl font-bold text-center '>Genius mode for choosing whatever you want</h1>
            <p className='text-sm font-medium text-center text-gray-400 w-full tracking-widest mt-3'>The keyword selection engine can be fully customized by advanced users.</p>
         </div>
    </div>
  )
}

export default Box3
