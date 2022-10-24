import axios from 'axios'
import useSWR from 'swr'
import { useNavigate } from 'react-router';
import Thumbnail from './ShowsThumbnail';
const fetcher = async url => await axios.get(url).then(res => res.data.results)

const ShowsCollection = ({head, type}) => {
    const {data, error} = useSWR(`https://api.themoviedb.org/3/tv/${type}?api_key=fbc959a6a8b5d0ae76320f65d73baa22&language=en-US&page=1`, fetcher);
    const navigate = useNavigate();

  return (
    <div className=''>
        <h1 className='xl:text-xl font-medium mb-2'>{head}</h1>
        <div className="flex space-x-4 xl:space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
            {data?.map(d => (
              <div onClick={() => navigate(`/details/shows/${d.id}`)}>
                <Thumbnail key={d.id} imgUrl={d.backdrop_path || d.poster_path} alt="Thumbnail" />
              </div>
            ))}
        </div>
    </div>
  )
}

export default ShowsCollection