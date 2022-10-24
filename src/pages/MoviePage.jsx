import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Brands from '../components/Brands'
import SliderCarousel from '../components/SliderCarousel'
import Collections from '../components/Collections'

const MoviePage = () => {
  return (
    <div className='flex flex-col px-3 py-4 xl:px-8 xl:py-5'>
      <Helmet>
          <title>Movies and Shows | Disney+</title>
      </Helmet>


      <nav className='flex justify-between items-center'>
        <Link to="/"><img className='w-24' src={logo} alt="logo" /></Link>
        <button>Sign out</button>
      </nav>
      <SliderCarousel />
      <Brands />
      <Collections />
    </div>
  )
}

export default MoviePage