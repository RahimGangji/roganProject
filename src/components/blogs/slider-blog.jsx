import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { blog_data } from '../../data';
import Link from 'next/link';

const blog_items = blog_data.filter(blog => blog.home)

const SliderBlog = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <Swiper
      className="blog-one-slider"
      spaceBetween={30}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{ delay: 1500 }}
      loop={sliderLoop}
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3,
        }
      }}
    >
      {blog_items.map((blog) => {
        const { id, date, img, sm_desc, title, name } = blog;
        return <SwiperSlide key={id}>
          <div className="item">
            <div className="single-blog-post">
              <div className="flip-box-front">
                <div className="clearfix">
                  <img src={img} alt="" className="author-img" />
                  <div className="author-info">
                    <h6 className="name">{name}</h6>
                    <div className="date">{date}</div>
                  </div>
                </div>
                <a href="#" className="title">{title}</a>
                <p>{sm_desc}..</p>
              </div>
              <div className="flip-box-back">
                <div className="author-info">
                  <h6 className="name">{name}</h6>
                  <div className="date">{date}</div>
                </div>
                <Link href={`/blog-details/${id}`}>
                  <a className="title">{title}</a>
                </Link>
                <Link href={`/blog-details/${id}`}>
                  <a className="more"><i className='flaticon-next-1'></i></a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      })}
    </Swiper>
  );
};

export default SliderBlog;