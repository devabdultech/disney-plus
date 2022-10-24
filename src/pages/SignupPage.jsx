import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SignupForm from '../components/SignupForm';
import logo from '../assets/logo.svg';

const SignupPage = () => {

  return (
    <div className='bg-[#1a1d29] h-screen'>
        <Helmet>
            <title>Sign up | Disney+</title>
        </Helmet>

        <div className='flex justify-between items-center px-6 py-2 xl:px-10 xl:py-3 border-b border-[#9098b1]'>
            <Link to='/' className='cursor-pointer'>
                <img className='w-20 xl:w-24' src={logo} alt="logo" />
            </Link>

            <Link className='font-medium' to='/login'>Log In</Link>
        </div>
        
        <SignupForm />
    </div>
  )
}

export default SignupPage;