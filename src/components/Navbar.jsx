import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='flex justify-end items-end cursor-pointer z-20 fixed right-0 px-8 py-5 text-white '>
        <nav className='text-white'>
            <Link to='/login' className='px-5 py-3 border border-white rounded-md uppercase bg-black opacity-80 hover:bg-white hover:text-black xl:py-4'>Log In</Link>
        </nav>
    </div>
  )
}

export default Navbar;