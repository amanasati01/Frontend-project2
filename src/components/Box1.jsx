import React from 'react'
import tickImg from '../assets/circle-tick-major.svg'
import partyPopper from '../assets/party-popper.svg'
import HorizontalGrid from './HorizontalGrid'
function Box1() {
  return (
    <div className="relative inset-0 w-full h-[65%] p-0  m-0" >
     <div className="absolute left-1/2 z-10 -translate-x-1/2  h-[22rem] w-[43rem] max-lg:w-[22rem] max-lg:h-[22rem] border border-white/15 bg-customPurple rounded-xl ">
         <div className='w-[41rem]  h-[22rem] border border-white/15 border-t-0 m-auto rounded-xl bg-gradient-to-b from-transparent  to-white/5 max-lg:w-[22rem]'>
          <div className='flex items-center pt-14 pl-10'>
          <h1 className='  text-xl font-medium text-slate-400'>Well done</h1>
          <img src={partyPopper} width={20} height={20} alt=""  className='ml-3'/>
          </div>
          <p className='pl-10 pt-4 text-slate-400'>Now it's out turn. Google's server is being visited by robots. with all that data, you'll soon have insights. Breathe deeply.</p>
          <div className='w-[39rem] h-[10.5rem] max-lg:w-[21rem] overflow-hidden border-[0.5px] border-white/5 rounded-xl mt-2 m-auto bg-gradient-to-b from-transparent  to-white/5'>
            <p className='pt-2 pl-5 text-base font-normal'>Extracting search results from Google</p>
            <div className='flex items-center'>
              <p className='pt-2 pl-[22px] text-sm font-normal'>Wope is collecting 250K search results. It's hard work, but fun.</p> 
              <img src={tickImg} className='ml-28 mt-2' width={20} height={20} alt="" />
            </div>
            <div className='flex items-center'>
              <p className='pt-2 pl-5 text-sm font-normal'>Converting shapless HTMLs into format so AI can understand.</p> 
              <img src={tickImg} className='ml-[118px] mt-2' width={20} height={20} alt="" />
            </div>
            <div className='flex items-center'>
              <p className='pt-2 pl-5 text-sm font-normal'>To prioritize those keywords,we need to look at search volume.</p> 
              <img src={tickImg} className='ml-[107px] mt-2' width={20} height={20} alt="" />
            </div>
          </div>
         </div>
         <div className='flex flex-col justify-center items-center w-full h-[10rem]'>
            <h1 className='text-3xl font-bold text-center '>Faster than fastest</h1>
            <p className='text-sm font-medium text-center text-gray-400 w-full tracking-widest mt-3'>From typing your site adress to complete <br /> setup, it only takes 60 seconds - not hours</p>
         </div>
     </div>
      <div className="relative w-full h-full p-2">
        <HorizontalGrid/>
     </div>
    </div>


  )
}

export default Box1
