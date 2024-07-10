import React, { useEffect, useRef, useState } from 'react';
import ShopModal from '../common/modals/shop-modal';
import { SocialLinks } from '../social-links';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import Link from 'next/link';

const carousel_items = [
  {
    id: 'de-modal',
    title: 'De Iconic Shoe.',
    price: '123.00',
    old_price: '223.00',
    img: '/assets/images/shop/3.png',
    brand_text: 'Nike'
  },
  {
    id: 'lo-modal',
    title: 'Lo Iconic Shoe.',
    price: '103.00',
    old_price: '190.00',
    img: '/assets/images/shop/3.png',
    brand_text: 'Reff'
  },
  {
    id: 'go-modal',
    title: 'Go Iconic Shoe.',
    price: '150.00',
    old_price: '300.00',
    img: '/assets/images/shop/3.png',
    brand_text: 'Gucci'
  },
]

const EcommerceHeroSlider = () => {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), []);
  const [modalId, setModalId] = useState(carousel_items[0].id);
  const [item, setItem] = useState({});
  // handleModalId
  const handleModalId = (id, item) => {
    setModalId(id);
    setItem(item)
  }
  return (
    <>
      <div className="eCommerce-hero-section">
        <div className="main-carousel-wrapper" id="eCommerce-carousel">
          <Swiper
            loop={loop}
            spaceBetween={0}
            slidesPerView={1}
            mousewheel={true}
            modules={[Mousewheel, Pagination]}
            pagination={{
              clickable: true,
              el: '.carousel-indicators'
            }}
          >
            {carousel_items.map((item, i) => {
              const { img, old_price, price, title, id, brand_text } = item;
              return (
                <SwiperSlide key={i}>
                  <div className="inner-container e-carousel-slider">
                    <div className="inner-item-wrapper">
                      <h2 className="main-title">{title}</h2>
                      <img src={img} alt="" className="product-img"/>
                      <div className="price-tag">
                        <strong className="current-price">${price}</strong>
                        <del>${old_price}</del>
                      </div>
                      <ul className="button-group">
                        <li>
                          <Link href="/product-with-sidebar">
                            <a className="shop-now">Shop Now</a>
                          </Link>
                        </li>
                        <li>
                          <button onClick={() => handleModalId(id, item)} className="details-info-button" 
                          data-bs-toggle={modalId && "modal"} data-bs-target={modalId && `#${modalId}`} >+</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="color-tab">
                    <p>Available Colors</p>
                    <ul>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                    </ul>
                  </div>
                  <div className="brand-text">{brand_text}</div>
                </SwiperSlide>
              )
            })}

            <ol className="carousel-indicators">
              <li data-bs-target="#eCommerce-carousel" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#eCommerce-carousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#eCommerce-carousel" data-bs-slide-to="2"></li>
            </ol>
          </Swiper>
        </div>

        <ul className="social-share">
          <li>Share +</li>
          <SocialLinks />
        </ul>
      </div>
      <ShopModal item={item} id={modalId} />
    </>
  );
};

export default EcommerceHeroSlider;