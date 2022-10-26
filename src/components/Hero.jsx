import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';
import down from '../assets/down.svg';

const Hero = () => {
  return (
    <section className='relative flex items-center text-center h-screen xl:items-left xl:text-left xl:h-screen'>
        <div className="content z-10 px-3 mt-44 pb-8 w-full max-w-xl md:w-[100%] md:mt-44 md:mx-auto xl:w-[100%] xl:mt-24 xl:mx-0 xl:px-16">
            <img className='w-32 mx-auto mb-4 lg:w-36 xl:w-48 xl:mx-0 xl:mb-9' src={logo} alt="disney+ logo" />
            <h1 className='mb-4 text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-sbold lg:mb-5 xl:mb-6'>+ More than you'd ever imagine</h1>
            <p className='text-[#c0c0c0] md:text-lg xl:text-xl'>Enter your email to create or restart your subscription.</p>
            <div className="form flex flex-col w-full gap-3 mt-5 xl:flex-row xl:gap-0 xl:mt-7">
                <input className='border border-[#31343e] outline-none bg-[#31343e] rounded- text-[#c0c0c0] px-3 h-10 w-full xl:h-12' type="email" placeholder='Email'/>
                <button className='text-white text-xl bg-[#0063e5] border-0 rounded-sm h-10 px-8 uppercase cursor-pointer xl:h-12 '>Continue</button>
            </div>
            <p className='mt-5 text-[#c0c0c0] md:text-lg lg:text-lg xl:text-xl'>
                Get 12 months for the price of 10 when you sign up for an annual Disney+ subscription,
                compared to paying monthly.
            </p>

            <motion.button 
              className='cursor-pointer mt-5 mb-2'
              animate={{y:[0, 5, 0]}}
              transition={{duration: 0.7, repeat: Infinity, repeatType: "loop", type: "tween"}}
            >
              <img className='w-10' src={down} alt="down-arrow" />
            </motion.button>
        </div>
        <div className="background absolute left-0 bottom-0 right-0 top-0 bg-bgSmall bg-top bg-100 bg-no-repeat z-0 md:bg-bgMedium xl:bg-bgLarge"></div>
    </section>
  )
}

export default Hero