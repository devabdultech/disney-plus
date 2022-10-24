import React from 'react';
import devices from '../assets/devices-small.jpg';
import EntProps from './EntProps';
import entertainment from '../assets/entertainment-icon.png';
import parentalControl from '../assets/parental-control-icon.png';
import device from '../assets/device-icon.png';

const SectionThree = () => {
  return (
    <section className='mt-16 pb-20'>
        <div className='flex flex-col justify-center items-center gap-7 text-center px-5'>
            <h1 className='text-2xl font-bold xl:text-5xl'>Watch the way you want</h1>
            <p className='text-[#c0c0c0] xl:text-xl'>Enjoy the world's greatest strories - anytime, anywhere.</p>
            <img src={devices} alt="devices" />
        </div>

        <div className='flex flex-col gap-9 px-5 xl:flex-row xl:px-8 xl:gap-0'>
            <EntProps 
                icon={entertainment} 
                alt={'entertainment'} 
                head={'Endless Entertainment'} 
                text={'Explore thousands of hours of TV series, movies and originals.'}
            />
            
            <EntProps 
                icon={device} 
                alt={'entertainment'} 
                head={'Available on your favourite devices'} 
                text={'Stream on up to four screens at once on compatible devices.'}
            />

            <EntProps 
                icon={parentalControl} 
                alt={'parentalControl'} 
                head={'Easy-to-use parental controls'} 
                text={'Keep your family safe with our intuitive parental controls.'}
            />
        </div>
    </section>
  )
}

export default SectionThree