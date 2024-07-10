import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const contents = {
  upper_title: 'Testimonials',
  main_title: 'Check what’s our client say about us!',
  peoples: [
    '/assets/images/home/2.jpg',
    '/assets/images/home/3.jpg',
    '/assets/images/home/4.jpg',
    '/assets/images/home/5.jpg',
    '/assets/images/home/6.jpg',
    '/assets/images/home/7.jpg',
  ],
  testi_items: [
    {
      desc: 'Having a home based business is a wonderful asset to your life. The problem still stands, when it comes timeadvertise your business for a cheap cost. I know you have looked for to answer everywhere; I am here to share a few simple creative ways,',
      img: '/assets/images/home/2.jpg',
      name: 'Salim rana',
      title: 'Developer'
    },
    {
      desc: 'Having a home based business is a wonderful asset to your life. The problem still stands, when it comes timeadvertise your business for a cheap cost. I know you have looked for to answer everywhere; I am here to share a few simple creative ways,',
      img: '/assets/images/home/3.jpg',
      name: 'Naim uddin',
      title: 'Developer'
    },
  ]
}

const { main_title, upper_title, peoples, testi_items } = contents;

const TestimonialOne = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <>
      <div className="agn-testimonial">
        <div className="shape-box">
          <img src="/assets/images/shape/4.png" alt="" />
          {peoples.map((img, i) => <img key={i} src={img} alt="" className="people" />)}
          <img src="/assets/images/shape/shape-6.svg" alt="" className="shape-one" />
        </div>
        <img src="/assets/images/shape/shape-66.svg" alt="" className="shape-two" data-aos="fade-left" />
        <div className="container clearfix">
          <div className="main-content">
            <div className="theme-title-one">
              <div className="upper-title">{upper_title}</div>
              <h2 className="main-title">{main_title}</h2>
            </div>

            <Swiper
              className="agn-testimonial-slider"
              loop={sliderLoop}
              slidesPerView={1}
              modules={[Navigation]}
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
    </>
  );
};

export default TestimonialOne;