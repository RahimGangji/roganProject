import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const brands = [
  '/assets/images/logo/envato.svg',
  '/assets/images/logo/envato.svg',
  '/assets/images/logo/envato.svg',
  '/assets/images/logo/envato.svg',
  '/assets/images/logo/envato.svg',
  '/assets/images/logo/envato.svg',
]

const brands_2 = [
  '/assets/images/logo/p-10.png',
  '/assets/images/logo/p-11.png',
  '/assets/images/logo/p-12.png',
  '/assets/images/logo/p-13.png',
  '/assets/images/logo/p-12.png',
]

const BrandSlider = ({studio_2}) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <Swiper
      className="partner-slider"
      slidesPerView={1}
      loop={sliderLoop}
      modules={[Autoplay]}
      centeredSlides={true}
      centeredSlidesBounds={true}
      autoplay={{ delay: 1500 }}
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        550: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 5
        }
      }}
    >
      {!studio_2 && brands.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="item" >
            <a href="#"><img src={img} alt="brand" /></a>
          </div>
        </SwiperSlide>
      ))}
      {studio_2 && brands_2.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="item" >
            <a href="#"><img src={img} alt="brand" /></a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSlider;