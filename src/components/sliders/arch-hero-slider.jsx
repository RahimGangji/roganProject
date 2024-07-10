import React from 'react';
import { useState } from 'react';
import { HeaderSeven } from '../../layout';
import SliderModal from '../common/modals/slider-modal';

const carousel_items = [
  {
    active: true,
    img: "/assets/images/gallery/58.jpg",
    bg_img: '/assets/images/home/slide-1.jpg',
    upper_title: 'Barlin State, Germany',
    main_title: <>Interior & Exterior <br /> Solution.</>,
    id: 'de'
  },
  {
    img: "/assets/images/gallery/59.jpg",
    bg_img: '/assets/images/home/slide-2.jpg',
    upper_title: 'Barlin State, Germany',
    main_title: <>Interior & Exterior <br /> Solution.</>,
    id: 'se'
  },
  {
    img: "/assets/images/gallery/60.jpg",
    bg_img: '/assets/images/home/slide-3.jpg',
    upper_title: 'Barlin State, Germany',
    main_title: <>Interior & Exterior <br /> Solution.</>,
    id: 're'
  },
]


const ArchHeroSlider = () => {
  const [sliderItem, setSliderItem] = useState(carousel_items[0]);
  // handleModalItem
  const handleModalItem = (item) => {
    setSliderItem(item)
  }
  return (
    <>
      <div className="arch-hero-area">
        {/* <!-- ^^^^^^^^^^^^^^^^^^^^^^ MENU AREA ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ --> */}
        <HeaderSeven />

        {/* <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ARCH BANNER ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ --> */}
        <div className="arch-main-banner">
          <div className="main-carousel-wrapper">
            <div id="arch-carousel" className="carousel slide carousel-fade" data-bs-ride="false" data-bs-interval="5000">
              <div className="carousel-inner">

                {carousel_items.map((item) => {
                  const { id, bg_img, main_title, upper_title, active } = item;
                  return <div key={id} className={`carousel-item ${active ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${bg_img})` }}>
                    <div className="inner-container arch-carousel-slider">
                      <div className="inner-item-wrapper">
                        <div className="shape" data-animation="animated zoomIn"></div>
                        <p className="font-lato upper-title" data-animation="animated fadeInDown">{upper_title}</p>
                        <h2 className="main-title" data-animation="animated fadeInUp">{main_title}</h2>
                        <a href="#" className="read-more" data-animation="animated fadeInUp"><i className="flaticon-next"></i></a>
                      </div>
                      <div onClick={() => handleModalItem(item)}>
                        <button className="details-info-button font-lato" data-bs-toggle="modal"
                          data-bs-target={`#${sliderItem?.id}`}>+</button>
                      </div>
                    </div>
                  </div>
                })}
              </div>

              <ol className="carousel-indicators indicators-one">
                <li data-bs-target="#arch-carousel" data-bs-slide-to="0" className="active"><i>01 Blue.</i><span></span></li>
                <li data-bs-target="#arch-carousel" data-bs-slide-to="1"><i>02 B.City.</i><span></span></li>
                <li data-bs-target="#arch-carousel" data-bs-slide-to="2"><i>03 Circle.</i><span></span></li>
              </ol>
              <ol className="carousel-indicators indicators-two">
                <li data-bs-target="#arch-carousel" data-bs-slide-to="0" className="active">
                  <div>01</div>
                  <h6 className="title">Blue Sea Resort</h6>
                  <p>Blue lbl inc.</p>
                </li>
                <li data-bs-target="#arch-carousel" data-bs-slide-to="1">
                  <div>02</div>
                  <h6 className="title">Bosundhara City</h6>
                  <p>Branding, Redesign</p>
                </li>
                <li data-bs-target="#arch-carousel" data-bs-slide-to="2">
                  <div>03</div>
                  <h6 className="title">Circle ring market.</h6>
                  <p>Branding, Redesign</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* slider modal start */}
      <SliderModal item={sliderItem} />
      {/* slider modal end */}
    </>
  );
};

export default ArchHeroSlider;