import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import { DotLoader } from 'react-spinners';
import HomePage from './pages/HomePage';
import NoMatch from './pages/NoMatch';

const LoginPage = lazy(() => import('./pages/LoginPage'))
const SignupPage = lazy(() => import('./pages/SignupPage'))
const MoviePage = lazy(() => import('./pages/MoviePage'))
const MovieDetails = lazy(() => import('./pages/MovieDetails'))

function App() {

  return (
    <div className="App text-white font-regular">
      <Suspense fallback={
        <DotLoader
          className='w-full mx-auto mt-36'
          color="#36d7b7"  
          size={65}
          speedMultiplier={2} 
        />
        }
      >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='movies' element={<MoviePage />} />
          <Route path='details/:kind/:id' element={<MovieDetails />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
