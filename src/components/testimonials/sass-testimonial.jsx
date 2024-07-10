import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const testimonial_data = [
  {
    desc: 'ommodo consequat. Duis aute irure dolor in reprehendert voluptate velit esse cillum dolore eu fugiat nulla Excepteu sint occaecat cupidat non proident, sunt in culpa qui officia deserunt mollit anim id est lrum.',
    name: 'Naim uddin.',
    title: 'Senior Designer, Squre.'
  },
  {
    desc: 'ommodo consequat. Duis aute irure dolor in reprehendert voluptate velit esse cillum dolore eu fugiat nulla Excepteu sint occaecat cupidat non proident, sunt in culpa qui officia deserunt mollit anim id est lrum.',
    name: 'Salim rana.',
    title: 'Senior Developer, ThemePure.'
  },
]

const SassTestimonial = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <>
      <div className="sass-testimonial-section">
        <img src="/assets/images/home/2.jpg" alt="" className="people" />
        <img src="/assets/images/home/3.jpg" alt="" className="people" />
        <img src="/assets/images/home/4.jpg" alt="" className="people" />
        <img src="/assets/images/home/5.jpg" alt="" className="people" />
        <img src="/assets/images/home/6.jpg" alt="" className="people" />
        <img src="/assets/images/home/7.jpg" alt="" className="people" />
        <div className="container">
          <div className="theme-title-one text-center show-pr">
            <div className="icon-box show-pr">
              <img src="/assets/images/shape/bg-shape5.svg" alt="" className="bg-shape" />
              <img src="/assets/images/icon/icon27.svg" alt="" className="icon" />
            </div>
            <h2 className="main-title">What’s Our Client Think <br />About Us.</h2>
          </div>

          <div className="inner-container">
            <div className="main-content">
              <Swiper
                className="agn-testimonial-slider"
                slidesPerView={1}
                loop={sliderLoop}
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-next',
                  prevEl: '.swiper-prev'
                }}
              >
                {testimonial_data.map((data, i) => (
                  <SwiperSlide key={i}>
                    <div className="item">
                      <p>{data.desc}</p>
                      <h6 className="name">{data.name}</h6>
                      <span className="designation">{data.title}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='swiper-controls d-flex align-items-center justify-content-center'>
                <div className='swiper-prev'><i className='flaticon-back'></i></div>
                <div className='swiper-next'><i className='flaticon-next'></i></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SassTestimonial;