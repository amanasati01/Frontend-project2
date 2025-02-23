import React from 'react'
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import bg3 from '../assets/bg3.png'
import bg4 from '../assets/bg4.png'
import bg5 from '../assets/bg5.png'
import bg6 from '../assets/bg6.png'
function Lower() {
  return (
    <div>
        <div className='flex justify-center items-center w-full mt-10'>
            <h1 className='text-5xl font-extrabold text-center '>Spot issues faster
                <br /> with smart indicators</h1>
        </div>
       <div className='flex justify-center items-center w-full mt-6'>
         <div className='grid grid-cols-6 grid-rows-2 gap-4 h-[40rem] w-[75rem]'>
           <div className='col-span-2 row-span-1 rounded-xl border-[2px] border-white/5 overflow-hidden'>
              <div className='flex justify-center items-center'>
                <img src={bg1} alt="" />
              </div>
              <div className='' >
                <h1 className='text-xl font-semibold ml-6'>Seasonality</h1>
                <p className='text-sm tracking-wider font-normal text-gray-300 mt-3 ml-2'>Spot when any keywords' seasonality is trending and when losing</p>
              </div>
           </div>
           <div className='col-span-2 row-span-1 rounded-xl border-[2px] border-white/5 overflow-hidden'>
              <div className='flex justify-center items-center'>
                <img src={bg2} alt="" />
              </div>
              <div className='' >
                <h1 className='text-xl font-semibold ml-6'>Best Rank Spotter</h1>
                <p className='text-sm tracking-wider font-normal text-gray-300 mt-3 ml-2'> Analyzes the history of ranking and letting you know when you spot the best rank.</p>
              </div>
           </div>
           <div className='col-span-2 row-span-1 rounded-xl border-[2px] border-white/5 overflow-hidden'>
              <div className='flex justify-center items-center'>
                <img src={bg3} alt="" />
              </div>
              <div className='' >
                <h1 className='text-xl font-semibold ml-6'>Cannibalization Finder</h1>
                <p className='text-sm tracking-wider font-normal text-gray-300 mt-3 ml-2'>
                The pages that create cannibalization can be merged for a quick fix to regain positions.
                </p>
              </div>
           </div>
           <div className='col-span-2 row-span-1 rounded-xl border-[2px] border-white/5 overflow-hidden'>
              <div className='flex justify-center items-center'>
                <img src={bg4} alt="" />
              </div>
              <div className='' >
                <h1 className='text-xl font-semibold ml-6'>Market Intelligence Based on AI</h1>
                <p className='text-sm tracking-wider font-normal text-gray-300 mt-3 ml-2'>
                The best market intelligence is provided by SERP feature-based CTR calculation.</p>
              </div>
           </div>
           <div className='col-span-2 row-span-1 rounded-xl border-[2px] border-white/5 overflow-hidden'>
              <div className='flex justify-center items-center'>
                <img src={bg5} alt="" />
              </div>
              <div className='' >
                <h1 className='text-xl font-semibold ml-6'>Opportunity Calculation</h1>
                <p className='text-sm tracking-wider font-normal text-gray-300 mt-3 ml-2'>
                A few position changes can bring the most traffic by using the opportunity metric.</p>
              </div>
           </div>
           <div className='col-span-2 row-span-1 rounded-xl border-[2px] border-white/5 overflow-hidden'>
              <div className='flex justify-center items-center'>
                <img src={bg6} alt="" />
              </div>
              <div className='' >
                <h1 className='text-xl font-semibold ml-6'>Seasonality</h1>
                <p className='text-sm tracking-wider font-normal text-gray-300 mt-3 ml-2'>
                Spot when any keywords' seasonality is trending and when losing</p>
              </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Lower
