import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const testimonial_data = [
  {
    desc: "Advertising is telling world of publicity generally having other tell world. It really nice to the work done.",
    name: 'Naim Ahmed',
    address: 'California'
  },
  {
    desc: "Advertising is telling world of publicity generally having other tell world. It really nice to the work done.",
    name: 'Salim Rana',
    address: 'California'
  },
  {
    desc: "Advertising is telling world of publicity generally having other tell world. It really nice to the work done.",
    name: 'John Smith',
    address: 'California'
  },
  {
    desc: "Advertising is telling world of publicity generally having other tell world. It really nice to the work done.",
    name: 'Mamun Ahmed',
    address: 'California'
  },
]

const TestimonialArch = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <>
      <div className="arch-testimonial">
        <div className="container">
          {<Swiper
            className="arch-client-slider"
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable:true
            }}
            slidesPerView={1}
            loop={sliderLoop}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1100: {
                slidesPerView: 3
              }
            }}
          >
            {testimonial_data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item">
                  <div className="single-block">
                    <p className="font-lato">{item.desc}</p>
                    <h6 className="name">{item.name}</h6>
                    <span className="font-lato">{item.address}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>}
  
        </div>

      </div>
    </>
  );
};

export default TestimonialArch;