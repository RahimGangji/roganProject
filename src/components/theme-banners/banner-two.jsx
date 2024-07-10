import Link from 'next/link';
import React from 'react';

const contents = {
  img: '/assets/images/shape/banner-shape4.svg',
  title: <>Boostup your <br />web traffic is just <br />a click away.</>,
  subtitle: <>The 3 golden rules professional graphic designer don’t <br /> want you to know about.</>,
}
const { img, subtitle, title } = contents;

const BannerTwo = () => {
  return (
    <div id="theme-banner-two">
      <div className="bg-round-one wow zoomIn animated" data-wow-duration="5s"></div>
      <div className="bg-round-two wow zoomIn animated" data-wow-duration="5s"></div>
      <div className="bg-round-three wow zoomIn animated" data-wow-duration="5s"></div>
      <div className="bg-round-four wow zoomIn animated" data-wow-duration="5s"></div>
      <div className="bg-round-five wow zoomIn animated" data-wow-duration="5s"></div>
      <div className="illustration wow fadeInRight animated" data-wow-duration="2s" data-wow-delay="0.4s">
        <img src={img} alt="" />
      </div>
      <div className="container">
        <div className="main-wrapper">
          <h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">{title}</h1>
          <p className="sub-title wow fadeInUp animated" data-wow-delay="0.9s">{subtitle}</p>
          <ul className="button-group">
            <li>
              <Link href="/about-us-agency">
                <a className="more-button wow fadeInLeft animated" data-wow-delay="1.5s">Learn More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us-minimal">
                <a className="contact-button wow fadeInRight animated" data-wow-delay="1.5s">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;