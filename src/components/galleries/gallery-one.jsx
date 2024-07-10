import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ImageLightBox from '../common/modals/image-lightbox';
import Link from 'next/link';

const contents = {
  main_title: <>Check some of our <br />Recent work.</>,
  bottom_title: 'Click the below button to check all of our work.',
  gallery_items: [
    '/assets/images/portfolio/1.jpg',
    '/assets/images/portfolio/2.jpg',
    '/assets/images/portfolio/3.jpg',
    '/assets/images/portfolio/4.jpg',
    '/assets/images/portfolio/1.jpg',
  ]
}
const { main_title, bottom_title, gallery_items } = contents;

const GalleryOne = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  // photoIndex
  const [photoIndex, setPhotoIndex] = React.useState(null);
  // image open state
  const [open, setOpen] = React.useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }

  return (
    <>
      <div className="agn-our-gallery">
        <img src="/assets/images/shape/shape-62.svg" alt="" className="shape-one" />
        <img src="/assets/images/shape/shape-55.svg" alt="" className="shape-two" />
        <img src="/assets/images/shape/shape-61.svg" alt="" className="shape-three" />
        <div className="container">
          <div className="theme-title-one">
            <h2 className="main-title">{main_title}</h2>
            <p className="bottom-title">{bottom_title}</p>
          </div>
        </div>
        <div className="main-wrapper">
          <Link href="/project-full-width">
            <a className="view-gallery">View Gallery</a>
          </Link>
          <Swiper
            className="gallery-slider lightgallery"
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev'
            }}
            spaceBetween={0}
            loop={sliderLoop}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              600: {
                slidesPerView: 2
              },
              1100: {
                slidesPerView: 3
              },
              1550: {
                slidesPerView: 4,
              }
            }}
          >
            {gallery_items.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="item">
                  <div className="img-box">
                    <img src={img} alt="" />
                    <div className="hover-content">
                      <button onClick={() => handleImagePopup(i)} className="icon zoom fancybox">+</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='swiper-controls d-flex align-items-center'>
            <div className='swiper-prev'><i className='flaticon-back'></i></div>
            <div className='swiper-next'><i className='flaticon-next'></i></div>
          </div>

        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={gallery_items} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default GalleryOne;