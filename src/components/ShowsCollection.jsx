import axios from 'axios'
import useSWR from 'swr'
import { useNavigate } from 'react-router';
import Thumbnail from './Thumbnail';

const fetcher = async url => await axios.get(url).then(res => res.data.results)

const ShowsCollection = ({head, type}) => {
    const api = import.meta.env.VITE_APP_TMDB_API_KEY;
    
    const {data, error} = useSWR(`https://api.themoviedb.org/3/tv/${type}?api_key=${api}&language=en-US&page=1`, fetcher);
    const navigate = useNavigate();

  return (
    <div className=''>
        <h1 className='xl:text-xl font-medium mb-2'>{head}</h1>
        <div className="flex space-x-4 xl:space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
            {data?.map(d => (
              <div key={d.id} onClick={() => navigate(`/details/shows/${d.id}`, {state: {id: d.id, genre: 'tv', title: 'Show Details'}} ) }>
                <Thumbnail uniqueKey={d.id} imgUrl={d.backdrop_path || d.poster_path} alt="Thumbnail" />
              </div>
            ))}
        </div>
    </div>
  )
}

export default ShowsCollection