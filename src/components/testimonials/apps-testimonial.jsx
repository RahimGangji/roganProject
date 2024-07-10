import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import BrandSlider from '../trusted-pertners/brand-slider';

const contents = {
  main_title: <>What’s Our Customer <br />Saying.</>,
  testimonial_data: [
    {
      desc: 'onsectetur adipiscng elit, sed do esmod tempor ut labor  dolor magna aliqua. Ut enomi ad minm veniam, quis nos exercitation.',
      img: '/assets/images/home/3.jpg',
      name: 'Naim uddin',
      title: 'Developer, ThemePure',
    },
    {
      desc: 'onsectetur adipiscng elit, sed do esmod tempor ut labor  dolor magna aliqua. Ut enomi ad minm veniam, quis nos exercitation.',
      img: '/assets/images/home/2.jpg',
      name: 'Salim rana',
      title: 'Founder, ThemePure',
    },
    {
      desc: 'onsectetur adipiscng elit, sed do esmod tempor ut labor  dolor magna aliqua. Ut enomi ad minm veniam, quis nos exercitation.',
      img: '/assets/images/home/7.jpg',
      name: 'John smith',
      title: 'Developer, Walton',
    },
    {
      desc: 'onsectetur adipiscng elit, sed do esmod tempor ut labor  dolor magna aliqua. Ut enomi ad minm veniam, quis nos exercitation.',
      img: '/assets/images/home/2.jpg',
      name: 'Salim rana',
      title: 'Founder, ThemePure',
    },
  ]
}

const { main_title, testimonial_data } = contents;

const AppsTestimonial = ({about_agn,ser_creative=false,ui_testi=false}) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <>
      <div className={`apps-testimonial ${about_agn?'bg-white':''} ${ser_creative?'bg-white mb-150':''}`}>
        {!about_agn && <><div className="d-shape" data-aos="fade-right" data-aos-duration="2000">D</div>
        <div className="u-shape" data-aos="fade-left" data-aos-duration="2000">U</div>
        <img src="/assets/images/shape/shape-52.svg" alt="" className="shape-one" />
        <img src="/assets/images/shape/shape-53.svg" alt="" className="shape-two" />
        <img src="/assets/images/shape/shape-45.svg" alt="" className="shape-three" />
        <img src="/assets/images/shape/shape-46.svg" alt="" className="shape-four" /></>}
        <div className="container">
          <div className={`theme-title-one ${about_agn?'':'upper-bar'}`}>
            <h2 className="main-title">{main_title}</h2>
          </div>
          <div className='customer-slider p-rel'>
            <Swiper
              slidesPerView={1}
              loop={sliderLoop}
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev'
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 3
                }
              }}
            >
              {testimonial_data.map((item, i) => {
                const {desc,img,name,title} = item;
                return <SwiperSlide key={i}>
                  <div className="item">
                    <div className="customer-block">
                      <p>{desc}</p>
                      <div className="clearfix">
                        <img src={img} alt="" className="customer-img" />
                        <div className="customer-info">
                          <h5 className="name">{name}</h5>
                          <span>{title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              })}
            </Swiper>
            <div className='swiper-controls d-flex align-items-center justify-content-center'>
              <div className='swiper-prev'><i className='flaticon-back'></i></div>
              <div className='swiper-next'><i className='flaticon-next'></i></div>
            </div>
          </div>
        </div>

        {!ser_creative && !ui_testi && <div className="trusted-partner">
          <div className="container">
            <BrandSlider/>
          </div>
        </div>}
      </div>
    </>
  );
};

export default AppsTestimonial;