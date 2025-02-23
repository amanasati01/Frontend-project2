
import logo from '../assets/logo.png'
import downArrow from '../assets/downArrow.png'
import Button from './Button'
import AnimatedBorder from './AnimatedBorderButton'
import Bars3 from '../assets/Bars3'

function Header() {
  return (
    <div className='w-full mt-5 flex justify-center items-center '>
      <div className='flex lg:justify-between justify-center items-center w-[90%] lg:w-[60%] px-4  h-7'>
        <div className=''>
          <img className='' src={logo} width={45} height={45} alt="logo" />
        </div>
        <ul className='hidden lg:flex justify-between w-[35rem] items-center  space-x-6 text-text-col-1 text-sm'>
          <li className='flex items-center'>
            <div>Products</div>
            <img className='ml-2' width={16} height={16} src={downArrow} alt="downArrow" />
          </li>
          <li className='flex items-center'>
            <div>Resources</div>
            <img className='ml-2' width={16} height={16} src={downArrow} alt="downArrow" />
          </li>
          <li>Pricing</li>
          <li>Download</li>
          <li>Contact</li>
        </ul>
        <div className='hidden lg:flex items-center justify-center space-x-4'>
          <Button text="Log in" className='text-[16px] w-16 mt-3 ml-4' />
          <AnimatedBorder text="Sign up" />
        </div>
        <div className='lg:hidden ml-48'>
          <AnimatedBorder icon={<Bars3 />} text="Menu" />
        </div>

      </div>
      <div className=' absolute lg:w-[70rem] w-96 h-[1.5px] bg-gradient-to-b from-black/10 to-white/10 top-16 left-1/2 transform -translate-x-1/2'></div>
    </div>
  )
}

export default Header;
