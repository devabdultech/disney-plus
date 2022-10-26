import React from 'react'
import axios from "axios";
import useSWR from "swr";
import { useNavigate } from 'react-router';
import Thumbnail from './Thumbnail';

const other = ({MovID, GENRE, WHAT, head}) => {  
  const fetcher = url => axios.get(url).then(res => res.data.results)

  const {data, error} = useSWR(`https://api.themoviedb.org/3/${GENRE}/${MovID}/${WHAT}?api_key=fbc959a6a8b5d0ae76320f65d73baa22&language=en-US`, fetcher)
  const navigate = useNavigate();

  return (
    <div>
        <h1 className='xl:text-xl font-medium mb-2'>{head}</h1>
        <div className="flex space-x-4 xl:space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
            {data?.map(d => (
              <div key={d.id} onClick={() => navigate(`/details/movies/${d.id}`, {state: {id: d.id, genre: 'movie', title: 'Movie Detail'}}  ) }>
                <Thumbnail uniqueKey={d.id} imgUrl={d.backdrop_path || d.poster_path} alt="Thumbnail" />
              </div>
            ))}
        </div>
    </div>
  )
}

export default other