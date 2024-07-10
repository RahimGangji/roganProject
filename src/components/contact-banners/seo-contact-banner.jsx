import Link from 'next/link';
import React from 'react';

const SeoContactBanner = () => {
  return (
    <div className="seo-contact-banner">
      <div className="round-shape-one"></div>
      <div className="round-shape-two"></div>
      <div className="d-shape">D</div>
      <div className="container">
        <h2 className="title">Do you have any projects? <br />Contact us.</h2>
        <Link href="/contact-us-agency">
          <a className="contact-button">Contact Us</a>
        </Link>
      </div>
    </div>
  );
};

export default SeoContactBanner;