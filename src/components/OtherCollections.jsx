import React from 'react'
import Other from './other'

const OtherCollections = ({id}) => {
  return (
    <div className='mt-6 flex flex-col gap-6'>
        <Other head={'Recommended for You'} GENRE='movie' MovID={id} WHAT='recommendations' />
        <Other head={'Similar Movies'} GENRE='movie' MovID={id} WHAT='similar' />
        <Other head={'Trending'} GENRE='trending' MovID='all' WHAT='day' />
    </div>
  )
}

export default OtherCollections