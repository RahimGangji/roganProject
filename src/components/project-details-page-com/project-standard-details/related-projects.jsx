import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { project_items } from '../../projetcts/project-minimal-area';
import ImageLightBox from '../../common/modals/image-lightbox';
import Link from 'next/link';

const images = project_items.map((item) => item.img);

const RelatedProjects = () => {
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
      <div className="related-project our-project">
        <div className="container">
          <h3 className="sec-title">Related Project</h3>

          <div className="related-product-slider p-rel">
            <Swiper
              slidesPerView={1}
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
              <div className='swiper-prev'><i className="fa fa-angle-left"></i></div>
              <div className='swiper-next'><i className="fa fa-angle-right"></i></div>
            </div>
          </div>

        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default RelatedProjects;