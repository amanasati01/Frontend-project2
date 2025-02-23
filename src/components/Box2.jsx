import React from 'react'
import adobe from '../assets/adobe-2.svg'
import miro from '../assets/miro-2.svg'
import framer from '../assets/framer-motion.svg'
import canva from '../assets/canva-wordmark-2.svg'
import invision from '../assets/invision.svg'
function Box2() {
  return (
        <div className='w-full h-full  bg-gradient-to-b from-transparent  to-white/5'>
                 <div className='w-full flex justify-center items-center flex-wrap gap-3 pt-4 border border-white/15 border-t-0 border-l-0 border-r-0 h-72'>
                     <div className='flex justify-center items-center w-32 h-9 bg-white/5 border-[2px] border-white/5 rounded-full'>
                       <img src={adobe} width={25} height={25} className='pr-1 pt-1'  alt="" />
                       <div className=' text-center text-gray-300 text-base shadow-xl '>Adobe.com</div>
                     </div> 
                     <div className='flex justify-center items-center w-32 h-9 bg-white/5 border-[2px] border-white/5 rounded-full'>
                       <img src={miro} width={25} height={25} className='pr-1 pt-1'  alt="" />
                       <div className=' text-center text-gray-300 text-base shadow-xl '>Micro.com</div>
                     </div> 
                     <div className='flex justify-center items-center w-32 h-9 bg-white/5 border-[2px] border-white/5 rounded-full'>
                       <img src={framer} width={25} height={25} className='pr-1 pt-1'  alt="" />
                       <div className=' text-center text-gray-300 text-base shadow-xl '>framer.com</div>
                     </div> 
                     <div className='flex justify-center items-center w-32 h-9 bg-white/5 border-[2px] border-white/5 rounded-full'>
                       <img src={canva} width={25} height={25} className='pr-1 pt-1'  alt="" />
                       <div className=' text-center text-gray-300 text-base shadow-xl '>canva.com</div>
                     </div> 
                     <div className='flex justify-center items-center w-32 h-9 bg-white/5 border-[2px] border-white/5 rounded-full'>
                       <img src={invision} width={25} height={25} className='pr-1 pt-1'  alt="" />
                       <div className=' text-center text-gray-300 text-base shadow-xl '>invision.com</div>
                     </div> 
                     <div className='flex justify-center items-center w-32 h-9 bg-white/5 border-[2px] border-white/5 rounded-full'>
                       <img src={framer} width={25} height={25} className='pr-1 pt-1'  alt="" />
                       <div className=' text-center text-gray-300 text-base shadow-xl '>framer.com</div>
                     </div> 
                     <div className='flex justify-center items-center w-32 h-9 bg-white/5 border-[2px] border-white/5 rounded-full'>
                       <img src={canva} width={25} height={25} className='pr-1 pt-1'  alt="" />
                       <div className=' text-center text-gray-300 text-base shadow-xl '>canva.com</div>
                     </div> 
                     <div className='flex justify-center items-center w-32 h-9 bg-white/5 border-[2px] border-white/5 rounded-full'>
                       <img src={invision} width={25} height={25} className='pr-1 pt-1'  alt="" />
                       <div className=' text-center text-gray-300 text-base shadow-xl '>invision.com</div>
                     </div> 
                     
                 </div>
                 <div className='w-full flex flex-col  justify-center items-center mt-10'>
                     <h1 className='text-xl font-bold'>Super smart</h1>
                     <p className='mt-4'>Keep your focus on direct competitors, <br />not irellevant big brands.</p>
                 </div>
                 
        </div>
  )
}

export default Box2
