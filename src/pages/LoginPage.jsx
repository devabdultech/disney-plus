import { Helmet } from 'react-helmet';
import logo from '../assets/logo.svg';
import { Link, Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import MoviePage from '../pages/MoviePage';

const LoginPage = () => {

  return (
    <div className='bg-[#1a1d29] h-screen'>
      <Helmet>
          <title>Log in | Disney+</title>
      </Helmet>

      <div className='px-6 py-2 xl:px-10 xl:py-3 border-b border-[#9098b1]'>
        <Link to='/' className='cursor-pointer'>
            <img className='w-20 xl:w-24' src={logo} alt="logo" />
        </Link>
      </div>

      <LoginForm />

    </div>
  )
}

export default LoginPage