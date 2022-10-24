import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import { Helmet } from 'react-helmet'


const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Disney+ | + More than you'd ever imagine</title>
      </Helmet>
        <div className=''>
            <Navbar />
            <Hero />
            <SectionTwo />
            <SectionThree />
        </div>
    </>
  )
}

export default HomePage