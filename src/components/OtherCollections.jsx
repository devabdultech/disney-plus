import React from 'react'
import Other from './other'

const OtherCollections = ({id, title}) => {
  return (
    <div className='mt-6 flex flex-col gap-6'>
        <Other head={'Recommended for You'} GENRE={title} MovID={id} WHAT='recommendations' />
        <Other head={`Similar ${title}`} GENRE={title} MovID={id} WHAT='similar' />
        <Other head={'Trending'} GENRE='trending' MovID='all' WHAT='day' />
    </div>
  )
}

export default OtherCollections