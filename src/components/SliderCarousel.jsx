import slide1 from '../assets/slider-1.jpg';
import slide2 from '../assets/slider-2.jpg';
import slide3 from '../assets/slider-3.jpg';
import slide4 from '../assets/slider-4.jpeg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarousel = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    mobileFirst: true,
    adaptiveHeight: true,
  };
  return (
    <div className="mt-5">
      <Slider {...settings}>
        <div className='w-full'><img className='' src={slide1} alt='slide' /></div>
        <div className='w-full'><img className='' src={slide2} alt='slide' /></div>
        <div className='w-full'><img className='' src={slide3} alt='slide' /></div>
        <div className='w-full'><img className='' src={slide4} alt='slide' /></div>
      </Slider>
    </div>
  )
}

export default SliderCarousel