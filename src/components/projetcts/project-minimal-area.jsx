import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { SocialLinks } from '../social-links';
import ImageLightBox from '../common/modals/image-lightbox';
import Link from 'next/link';

export const project_items = [
  {
    img: '/assets/images/gallery/36.jpg',
    title: <>Lonely <span>Steve</span></>,
    subtitle: 'Rogan dances in the deep dark'
  },
  {
    img: '/assets/images/gallery/37.jpg',
    title: <>Lonely <span>Steve</span></>,
    subtitle: 'Rogan dances in the deep dark'
  },
  {
    img: '/assets/images/gallery/38.jpg',
    title: <>Lonely <span>Steve</span></>,
    subtitle: 'Rogan dances in the deep dark'
  },
  {
    img: '/assets/images/gallery/39.jpg',
    title: <>Lonely <span>Steve</span></>,
    subtitle: 'Rogan dances in the deep dark'
  },
  {
    img: '/assets/images/gallery/40.jpg',
    title: <>Lonely <span>Steve</span></>,
    subtitle: 'Rogan dances in the deep dark'
  },
  {
    img: '/assets/images/gallery/41.jpg',
    title: <>Lonely <span>Steve</span></>,
    subtitle: 'Rogan dances in the deep dark'
  },
]

const images = project_items.map((item) => item.img);

const ProjectMinimalArea = ({ ui_gallery = false }) => {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), []);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }
  return (
    <>
      <div className="our-project project-minimal-style">
        <div className="inner-wrapper p-rel">
          <Swiper
            slidesPerView={1}
            className="project-minimal-slider"
            spaceBetween={45}
            modules={[Navigation]}
            loop={loop}
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
              1200: {
                slidesPerView: 3
              }
            }}
          >
            {project_items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item">
                  <div className="project-item">
                    <div className="img-box">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="hover-valina">
                      <div>
                        <h4 className="title">
                          <Link href="/project-details-creative">
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                        <p>{item.subtitle}</p>
                        <a onClick={() => handleImagePopup(i)} className="zoom" style={{ cursor: 'pointer' }}>
                          <img src="/assets/images/icon/zoom-in.svg" alt="" className="svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='swiper-controls d-flex align-items-center justify-content-center'>
            <div className='swiper-prev'><i className='flaticon-back'></i></div>
            <div className='swiper-next'><i className='flaticon-next'></i></div>
          </div>

          {!ui_gallery && <ul className="share-icon">
            <li>Share it:</li>
            <SocialLinks />
          </ul>}
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default ProjectMinimalArea;