import React from 'react'
import small from '../assets/image-1-small.jpg';
import large from '../assets/image-1.jpg';

const SectionTwo = () => {
  return (
    <section id='secTwo' className='w-full text-white relative mt-9 px-4 xl:h-max xl:px-0 xl:pt-0 xl:mt-0'>
        <div className="xl:absolute z-10 content text-center xl:text-left xl:flex xl:flex-col xl:w-[100%] xl:mt-44">
            <div className='xl:px-14 xl:w-[45%]'>
                <h1 className='mb-4 text-3xl xl:text-5xl font-sbold xl:mb-6'>Only on Disney+</h1>
                <p className='text-[#c0c0c0] xl:text-xl'>
                    Exclusive movies, series and originals you won't find on any other streaming service
                </p>
            </div>
            
        </div>

        <div className='relative mt-6 h-auto w-full xl:mt-10'>
            <img className='mx-auto sm:hidden md:hidden xl:hidden' src={small} alt="image" />
            <img className='mx-auto hidden sm:hidden xl:hidden md:block' src={small} alt="image" />
            <img className='mx-auto hidden sm:hidden md:hidden xl:block xl:w-[100%] xl:mx-0' src={large} alt="image" />
        </div>
    </section>
  )
}

export default SectionTwo