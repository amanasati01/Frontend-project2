import React from 'react'
import background from '../assets/background.png'
import Box1 from './Box1'

import Box2 from './Box2'
import Box3 from './Box3'
function Main() {
  return (
    <div className=''>
        <div className='w-full flex justify-center items-center '>
            <img src={background} alt="" />
        </div>
        <div className='flex justify-center items-center w-full '>
        <div className="w-[75rem] max-lg:w-[30rem] h-[65rem]  max-lg:h-[130rem] grid grid-cols-10 grid-rows-2 max-lg:grid-rows-3 gap-5">
           <div className="col-span-7 row-span-1 max-lg:col-span-10 max-lg:row-span-1 rounded-2xl border border-white/15 max-lg:mt-44">
             <Box1/>
           </div>
           <div className="col-span-3 row-span-1 max-lg:col-span-10 max-lg:row-span-1 rounded-2xl border border-white/15 max-lg:h-[30rem]">
              <Box2/>
           </div>
           <div className=" max-lg:hidden col-span-10 row-span-1 max-lg:col-span-10 max-lg:row-span-1 rounded-2xl border border-white/15 ">
             <Box3/>
           </div>
        </div>
        </div>
        
      
    </div>
  )
}

export default Main;