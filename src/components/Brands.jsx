import React from 'react'
import BrandCont from './BrandCont'
import disney from '../assets/disney.png';
import disneyMov from '../assets/disney.mp4';
import pixar from '../assets/pixar.png';
import pixarMov from '../assets/pixar.mp4';
import star from '../assets/starwars.png';
import starMov from '../assets/star-wars.mp4';
import nat from '../assets/national-geographic.png';
import natMov from '../assets/national-geographic.mp4';
import marvel from '../assets/marvel.png';
import marvelMov from '../assets/marvel.mp4';


const Brands = () => {
  return (
    <div className='flex mt-4'>
        <BrandCont image={disney} imageAlt="disney-image" video={disneyMov} videoType="video/mp4" />
        <BrandCont image={pixar} imageAlt="pixar-image" video={pixarMov} videoType="video/mp4" />
        <BrandCont image={star} imageAlt="star-image" video={starMov} videoType="video/mp4" />
        <BrandCont image={nat} imageAlt="nat-image" video={natMov} videoType="video/mp4" />
        <BrandCont image={marvel} imageAlt="marvel-image" video={marvelMov} videoType="video/mp4" />
    </div>
  )
}

export default Brands