import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MoviePage from './pages/MoviePage';
import MovieDetails from './pages/MovieDetails';
import NoMatch from './pages/NoMatch';

function App() {

  return (
    <div className="App text-white font-regular">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='movies' element={<MoviePage />} />
          <Route path='details/:kind/:id' element={<MovieDetails />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
    </div>
  )
}

export default App
