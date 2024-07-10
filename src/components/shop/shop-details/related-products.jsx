import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SingleProduct from '../shop-standard/single-product';

const RelatedProducts = ({ products, product }) => {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), []);
  const relatedItems = products.filter(item => item.category === product.category);
  return (
    <>
      <div className="related-product-slider p-rel">
        {relatedItems.length === 3 || relatedItems.length < 3 && <>
          <div className="row">
            {relatedItems.map((item) => {
              return <div key={item.id} className="col-lg-4 col-md-6">
                <SingleProduct product={item} />
              </div>
            })}
          </div>
        </>
        }
        {relatedItems.length > 3 && <Swiper
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
          {relatedItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="item">
                <SingleProduct product={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        }
        {relatedItems.length > 3 && <div className='swiper-controls d-flex align-items-center justify-content-center'>
          <div className='swiper-prev'><i className="fa fa-angle-left"></i></div>
          <div className='swiper-next'><i className="fa fa-angle-right"></i></div>
        </div>
        }
      </div>
    </>
  );
};

export default RelatedProducts;