import React from 'react';

const contents = {
  img:'/assets/images/home/screen7.png',
  img_2:'/assets/images/home/screen8.png',
  img_3:'/assets/images/home/screen9.png',
  title:<>Ultimate web app <br />for your customer <br /> support.</>,
  subtitle:<>With the xco platform for customer experience, <br /> service and support.</>,
}
const {img,img_2,img_3,title,subtitle} = contents;

const BannerFive = () => {
  return (
    <div id="theme-banner-five">
      <div className="mobile-screen-one wow fadeInRight animated" data-wow-duration="1.5s">
        <img src={img} alt="" />
      </div>
      <div className="mobile-screen-two wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay="0.8s">
        <img src={img_2} alt="" />
        <img src={img_3} alt="" 
        className="search-box wow zoomIn animated" data-wow-duration="1.5s" data-wow-delay="1.8s" />
      </div>
      <div className="bg-shape-holder">
        <span className="big-round-one wow fadeInLeft animated" data-wow-duration="3s"></span>
        <span className="big-round-two wow fadeInLeft animated" data-wow-duration="3s"></span>
        <span className="big-round-three wow fadeInLeft animated" data-wow-duration="3s"></span>
        <span className="shape-one"></span>
        <span className="shape-two"></span>
        <img src="/assets/images/shape/shape-32.svg" alt="" className="shape-three" />
        <span className="shape-four"></span>
      </div>
      <div className="main-wrapper">
        <h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">{title}</h1>
        <p className="sub-title wow fadeInUp animated" data-wow-delay="0.9s">{subtitle}</p>
        <ul className="button-group">
          <li><a href="#" className="google-button wow fadeInLeft animated" data-wow-delay="1.5s">
            <img src="/assets/images/icon/playstore.svg" alt="" /><span>Get it on</span> Google Play</a></li>
          <li><a href="#" className="ios-button wow fadeInRight animated" data-wow-delay="1.5s">
            <img src="/assets/images/icon/apple.svg" alt="" /><span>Available on the</span> App Store</a></li>
        </ul>
      </div>
    </div>
  );
};

export default BannerFive;