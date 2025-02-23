
import { BackgroundCircles } from './BackgroundCircles'
import heroSectionImage from '../assets/heroSectionImage.png'
import heroSectionSmall from '../assets/heroSectionSmall.png'

function Hero() {
  return (
    <div className='w-full relative overflow-hidden'>
      <div className='relative z-1 mt-32 max-md:w-[23rem]  left-1/2 transform -translate-x-1/2 '>
        <h1 className='text-center font-bold md:text-7xl text-gray-200 text-4xl w-full'>New Era of Rank Tracking</h1>
        <p className='text-center font-normal text-xl mt-5 text-gray-300 md:text-base md:font-extralight'>
           Find out what's working and what's not to get more search traffic.<br />
           Like an SEO consultant ws the element when the screen is 768px or smalleho can analyze millions of data.
         </p>
        
        <div className="outer-card rounded-full m-auto mt-6 w-96 h-12 bg-white/10 border border-black md:w-80">
          <div className="inner-card w-96 h-12 rounded-full">
          <div className=' flex items-center justify-center rounded-full'>
            <div className='relative w-full  rounded-full'>
              <div className='bg-white/10 border border-white/10 opacity-45 w-full h-12 rounded-full pl-4 pt-1'>
               <input type="text" placeholder='Enter your domain'  className="bg-transparent outline-none text-white placeholder-gray-400 font-light text-base flex-1 w-full h-full pb-1"  />
              </div>
              <div className='absolute top-0.5 right-1 text-sm bg-white/10 w-24 h-10 rounded-full '>
              <button className='mt-2 ml-4 text-gray-400 font-medium text-base'>Try Demo</button>
              </div>
            </div>
           </div>
          </div>
        </div>
    

      </div>
      <div className='relative hidden lg:block'>
      <div className='absolute -inset-1 left-[30%] top-32 blur-3xl w-[700px] h-9 bg-gradient-to-t bg-purple-800 '></div>
      <img className='relative left-[18%] top-32'  src={heroSectionImage} width={1200} height={1200} alt="" />
      </div> 
      <div className="relative left-[50%] translate-x-[-50%] block lg:hidden">
         <div className="absolute -inset-1 left-[30%]  blur-3xl w-[600px] h-9 bg-gradient-to-t from-purple-800  "></div>
            <img
            className="relative top-32 mx-auto"
            src={heroSectionSmall}
            width={320}
            height={320}
            alt=""
           / >
      </div>
      <div className='absolute top-[20rem] left-[60rem] md:left-9 md:top-96'>
        <BackgroundCircles/>
       
      </div>
    </div>
  )
}

export default Hero
