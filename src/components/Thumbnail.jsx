import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Thumbnail = ({imgUrl, uniqueKey}) => {
  return (
    <div key={uniqueKey} className='"flex min-w-[200px] h-[120px] md:min-w-[260px] md:h-[170px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300'>
      <LazyLoadImage effect='blur' height={170} className='w-full h-full object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original/${imgUrl}`} />
    </div>
  )
}

export default Thumbnail;