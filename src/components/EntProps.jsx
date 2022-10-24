import React from 'react'

const EntProps = ({icon, alt, head, text}) => {
  return (
    <div className='text-white flex flex-col justify-center items-center gap-6 text-center'>
        <img src={icon} alt={alt} />
        <h1 className='text-xl xl:text-2xl font-bold'>{head}</h1>
        <p className='text-[#c0c0c0] xl:text-lg'>{text}</p>
    </div>
  )
}

export default EntProps