import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper';

const contents = {
  title: 'Testimonials',
  inner_title: <>What’s <br /> Our Client Say About Us.</>,
  testi_items: [
    {
      desc: 'Having a home based business is a wonderful asset to your life. The problem still stands, when it comes timeadvertise your business for a cheap cost. I know you have looked for to answer everywhere.',
      img: '/assets/images/home/2.jpg',
      name: 'Salim rana',
      title: 'Developer'
    },
    {
      desc: 'Having a home based business is a wonderful asset to your life. The problem still stands, when it comes timeadvertise your business for a cheap cost. I know you have looked for to answer everywhere.',
      img: '/assets/images/home/3.jpg',
      name: 'Naim uddin',
      title: 'Developer'
    },
  ]
}
const { title, inner_title, testi_items } = contents;

const TestimonialPortfolio = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <>
      <div className="portfo-testimonial section-portfo">
        <div className="section-num show-pr"><span>0</span><span>5</span></div>
        <div className="container clearfix">
          <h2 className="theme-title-two">{title}<span>.</span></h2>


          <div className="row p-rel">
            <div className="col-lg-4">
              <h2 className="inner-title">{inner_title}</h2>
            </div>

            <div className="col-lg-8">
              <div className="slider-wrapper">

                <Swiper
                  className="agn-testimonial-slider"
                  loop={sliderLoop}
                  slidesPerView={1}
                  modules={[Navigation,Autoplay]}
                  autoplay={{
                    delay:1600
                  }}
                  navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                  }}
                >
                  {testi_items.map((item, i) => {
                    const { desc, img, name, title } = item;
                    return <SwiperSlide key={i}>
                      <div className="item">
                        <p>{desc}</p>
                        <div className="author-info clearfix">
                          <img src={img} alt="" className="author-img" />
                          <div className="name-info">
                            <h6 className="name">{name}</h6>
                            <span>{title}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  })}
                  <div className='swiper-controls d-flex align-items-center'>
                    <div className='swiper-prev'><i className='flaticon-back'></i></div>
                    <div className='swiper-next'><i className='flaticon-next'></i></div>
                  </div>
                </Swiper>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialPortfolio;