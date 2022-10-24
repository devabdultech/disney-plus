import React from 'react'
import small from '../assets/image-1-small.jpg';

const SectionTwo = () => {
  return (
    <section id='secTwo' className='w-full text-white relative px-4 bg-50 bg-no-repeat bg-100 mt-10 xl:h-[550px] xl:px-0 xl:mt-0'>
        <div className="content text-center mb-10 xl:bg-imageBig xl:bg-100 xl:bg-50 xl:h-full xl:text-left xl:flex xl:flex-col xl:w-[100%] xl:bg-no-repeat">
            <div className='xl:px-14 xl:w-[45%] xl:mt-36'>
                <h1 className='mb-4 text-3xl xl:text-5xl font-sbold xl:mb-6'>Only on Disney+</h1>
                <p className='text-[#c0c0c0] xl:text-xl'>
                    Exclusive movies, series and originals you won't find on any other streaming service
                </p>
            </div>
            
        </div>

        <div className='relative h-auto w-full mx-auto px-5'>
            <img className='mx-auto xl:hidden' src={small} alt="image" />
        </div>
    </section>
  )
}

export default SectionTwo