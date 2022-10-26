import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Brands from '../components/Brands'
import SliderCarousel from '../components/SliderCarousel'
import Collections from '../components/Collections'
import { auth, SignOut } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';


const MoviePage = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(!user) {
        navigate('/')
      } else {
          
      }
    })
  })

  return (
    <div className='flex flex-col px-3 py-4 xl:px-8 xl:py-5'>
      <Helmet>
          <title>Movies and Shows | Disney+</title>
      </Helmet>


      <nav className='flex justify-between items-center'>
        <Link to="/"><img className='w-24' src={logo} alt="logo" /></Link>

        <button className="rounded-full border w-14" onClick={SignOut}>
          <img className='w-full rounded-full' src={user?.photoURL} alt='display-photo' />
        </button>
      </nav>
      <SliderCarousel />
      <Brands />
      <Collections />
    </div>
  )
}

export default MoviePage