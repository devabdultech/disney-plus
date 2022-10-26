import axios from "axios";
import useSWR from "swr";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { DotLoader } from 'react-spinners';
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import playWhite from '../assets/play-icon-white.svg';
import playBlack from '../assets/play-icon-black.svg';
import groupIcon from '../assets/group-icon.svg';
import OtherCollections from "../components/OtherCollections";

const MovieDetails = () => {
  const location = useLocation()
  const ID = location.state.id;
  const GENRE = location.state.genre;
  const TITLE = location.state.title;

  const fetcher = url => axios.get(url).then(res => res.data)

  const {data, error} = useSWR(`https://api.themoviedb.org/3/${GENRE}/${ID}?api_key=fbc959a6a8b5d0ae76320f65d73baa22&language=en-US`, fetcher)

  if (error) return <div>Request Failed</div>;
  if (!data) return <DotLoader className="w-full mx-auto mt-36" color="#36d7b7" />

  return (
    <div className="flex flex-col px-3 py-4 xl:px-8 xl:py-5">
      <Helmet>
          <title>{TITLE} | Disney+</title>
      </Helmet>

      <nav className='flex justify-between items-center'>
        <Link to="/"><img className='w-24' src={logo} alt="logo" /></Link>
        <button>Sign out</button>
      </nav>

      <div className="relative mt-8 min-h-[600px] xl:min-h-[550px]">  
        <div className="absolute z-10 px-5 xl:px-12 my-14 flex flex-col gap-5 xl:gap-7 w-[100%] xl:w-[70%]">
          <img className="w-24" src={`https://image.tmdb.org/t/p/original/${data?.production_companies[0].logo_path || data?.production_companies[1].logo_path}`} alt='company' />

          <h1 className="text-xl xl:text-4xl xl:font-sbold tracking-wide">{data.title}</h1>

          <div className="flex gap-3 xl:gap-4 w-full">
            <button className="border py-1 px-3 xl:py-2 xl:px-5 flex items-center justify-center rounded-sm bg-white hover:bg-[#b4b0b0]">
              <img className="h-6" src={playBlack} alt="play-icon" />
              <span className="text-sm xl:text-lg text-black uppercase">Play</span>
            </button>

            <button className="border py-1 px-3 xl:py-2 xl:px-5 flex items-center justify-center rounded-sm bg-transparent">
              <img className="h-6" src={playWhite} alt="play-icon" />
              <span className="text-sm xl:text-lg text-white uppercase">Trailer</span>
            </button>

            <button className="border rounded-full p-2">
              <img className="w-4 xl:w-7" src='https://img.icons8.com/ios/50/ffffff/plus-math.png' alt="group-icon" />
            </button>

            <button className="border rounded-full p-2">
              <img className="w-4 xl:w-7" src={groupIcon} alt="group-icon" />
            </button>
          </div>

          <p className="text-lg">
            {data.release_date || data.first_air_date} •{" "}
            {data.episode_run_time || Math.floor(data.runtime / 60)}h {data.runtime % 60}m •{" "}
            {data.genres.map((genre) => genre.name + ", ")}{" "}
          </p>

          <p className="text-lg">
            {data.overview}
          </p>

        </div>

        <div className="absolute top-0 bottom-0 left-0 right-0 min-w-[200px] h-full md:min-w-[260px] md:h-full object-cover"><img className="w-full h-full object-cover opacity-50" src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path || data?.poster_path}`} /></div>
        
      </div>

      <OtherCollections id={ID} title={GENRE} />

    </div>
  )
}

export default MovieDetails