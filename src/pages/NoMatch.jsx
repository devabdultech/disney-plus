import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NoMatch = () => {
  return (
    <motion.div 
      className='flex flex-col justify-center items-center mx-auto my-1 gap-5'
      translate={{

      }}
    >
      <motion.h1 
        className='font-ebold text-[12rem]'
        animate={{x: [0, 200, -200], scale:[0, 0.8, 1.2]}}
        initial={{scale: 0}}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        404
      </motion.h1>

      <motion.h1 
        className='text-3xl font-medium'
        animate={{x: [0, -200, 200], scale:[0, 0.5, 1.2]}}
        initial={{scale: 0}}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        Page Not Found
      </motion.h1>

      <Link to='/'>
        <motion.button 
          className='bg-[#0063e5] px-8 py-3 rounded-lg mt-5'
          to='/'
          whileHover={{
            scale: 1.2,
            transition: {duration: 0.8}
          }}
          whileTap={{ scale: 1.3, transition: 0.6}}
        >
          Go Home 
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default NoMatch