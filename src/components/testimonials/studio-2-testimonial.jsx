import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const contents = {
  upper_title: 'Testimonials',
  main_title: 'Client Feedback',
  testimonial_items: [
    {
      img: '/assets/images/home/3.jpg',
      desc: '“ Lorem ipsum dolor sit, consectet qu some adipiscing elit eiusmod temor incididu nt ut labore e dol magn great aliqua.mollit ani muim…”',
      name: 'Naim Ahmed',
      title: 'CEO & Founder Zora.'
    },
    {
      img: '/assets/images/home/7.jpg',
      desc: '“ Lorem ipsum dolor sit, consectet qu some adipiscing elit eiusmod temor incididu nt ut labore e dol magn great aliqua.mollit ani muim…”',
      name: 'Wilson Herry',
      title: 'Product Designer'
    },
    {
      img: '/assets/images/home/2.jpg',
      desc: '“ Lorem ipsum dolor sit, consectet qu some adipiscing elit eiusmod temor incididu nt ut labore e dol magn great aliqua.mollit ani muim…”',
      name: 'Mamun Ahmed',
      title: 'Manager, Walton'
    },
    {
      img: '/assets/images/home/6.jpg',
      desc: '“ Lorem ipsum dolor sit, consectet qu some adipiscing elit eiusmod temor incididu nt ut labore e dol magn great aliqua.mollit ani muim…”',
      name: 'Salim rana',
      title: 'CEO & Founder ThemePure.'
    },
    {
      img: '/assets/images/home/7.jpg',
      desc: '“ Lorem ipsum dolor sit, consectet qu some adipiscing elit eiusmod temor incididu nt ut labore e dol magn great aliqua.mollit ani muim…”',
      name: 'Wilson Herry',
      title: 'Product Designer'
    },
  ]
}

const { main_title, testimonial_items, upper_title } = contents;

const StudioTwoTestimonial = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <>
      <div className="testimonial-studio-vr">
        <div className="container">
          <div className="theme-title-one studio-title text-center">
            <div className="upper-title">{upper_title}</div>
            <h2 className="main-title font-k2d">{main_title}</h2>
          </div>
        </div>

        <div className="studio-client-slider">
          <Swiper
            className="studio-client-slider"
            slidesPerView={1}
            loop={sliderLoop}
            spaceBetween={50}
            modules={[Navigation]}
            centeredSlides={true}
            centeredSlidesBounds={true}
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
              },
              1500: {
                slidesPerView: 4
              }
            }}
          >
            {testimonial_items.map((item, i) => {
              const { desc, img, name, title } = item;
              return <SwiperSlide key={i}>
                <div className="item">
                  <div className="customer-block">
                    <img src={img} alt="" className="customer-img" />
                    <p>{desc}</p>
                    <div className="clearfix">
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
    </>
  );
};

export default StudioTwoTestimonial;