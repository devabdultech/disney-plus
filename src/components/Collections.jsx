import MoviesCollection from './MoviesCollection'
import ShowsCollection from './ShowsCollection'

const Collections = () => {

  return (
    <div className='flex flex-col gap-8 mt-8'>
      <MoviesCollection head={'Popular Movies'} type='popular' />
      <ShowsCollection head={'Popular Shows'} type='popular'/>
      <MoviesCollection head={'Top Rated Movies'} type='top_rated'/>
      <ShowsCollection head={'Top Rated Shows'} type='top_rated'/>
      <MoviesCollection head={'Now Playing Movies'} type='now_playing'/>
      <ShowsCollection head={'Now Playing Shows'} type='airing_today'/>
      <MoviesCollection head={'Upcoming Movies'} type='upcoming'/>
    </div>
  )
}

export default Collections