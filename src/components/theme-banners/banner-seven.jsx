import React from 'react';

const contents = {
  title: 'We’re Top Class Digital Agency.',
  btn_link_text: 'Request for free consultation',
  img: '/assets/images/home/Illustration1.png'
}
const { title, img, btn_link_text } = contents;

const BannerSeven = () => {
  return (
    <div id="studio-banner-two">
      <div className="main-text-wrapper">
        <h1 className="font-k2d">{title}</h1>
        <a href="#" className="button-link">{btn_link_text}
          <i className="fa fa-angle-right icon-right" aria-hidden="true"></i>
        </a>
      </div>
      <div className="illustration">
        <img src={img} alt="Illustration img" />
      </div>
    </div>
  );
};

export default BannerSeven;