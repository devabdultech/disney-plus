import { Helmet } from 'react-helmet';
import logo from '../assets/logo.svg';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import GoogleIcon from '../assets/search.png';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();


const LoginPage = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});

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

      <div className='flex flex-col  px-4 py-8 gap-4 xl:px-10 md:w-[50%] md:mx-auto xl:py-6 lg:w-[50%] lg:mx-auto xl:w-[40%] xl:mx-auto xl:gap-5'>
        <h1 className='text-lg xl:text-3xl font-sbold'>Login with your email</h1>
        <p className='-mt-3 xl:text-md font-light'>
            You will use this email and password to log into your Disney+ account 
            to watch your favourite shows and movies.
        </p>
        <form className='flex flex-col gap-3 xl:gap-2'>
            <input placeholder='Email Address' className='bg-[#30333e] px-3 py-2 xl:text-lg xl:px-3 xl:py-3 xl:rounded-md outline-none' {...register('email')} />
            <p>{errors.email?.message}</p>
            <input placeholder='Password' className='bg-[#30333e] px-3 py-2 xl:text-lg xl:px-3 xl:py-3 xl:rounded-md outline-none' {...register('password')} />
            <p>{errors.password?.message}</p>
            
            <input className='bg-[#0072d2] rounded-md cursor-pointer uppercase font-medium py-2 xl:text-xl xl:py-3' type='submit' value='Sign In' />
        </form>
        <p className='text-center'>Or</p>
        <div className='flex flex-col gap-4 w-full'>
            <button className='flex justify-center items-center gap-3 bg-white w-full py-3 rounded-lg cursor-pointer'>
                <img className='w-6' src={GoogleIcon} alt="google-icon" />
                <span className='text-lg text-black font-sbold'>Continue with Google</span>
            </button>
        </div>
        <p>New to Disney+? <Link to='/signup'>Sign up</Link> </p> 
      </div>
    </div>
  )
}

export default LoginPage