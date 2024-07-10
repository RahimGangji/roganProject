import React, { useEffect } from 'react';
import { Footer, Header } from '../../../layout';
import BannerOne from '../../theme-banners/banner-one';
import AboutOne from '../../abouts/about-one';
import WhatWeDoOne from '../../what-we-do/what-we-do-1';
import CounterOne from '../../counters/counter-one';
import GalleryOne from '../../galleries/gallery-one';
import PricingOne from '../../pricings/pricing-one';
import TestimonialOne from '../../testimonials/testimonial-one';
import BlogOne from '../../blogs/blog-one';
import ContactBannerOne from '../../contact-banners/contact-banner-one';

const HomeMain = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BannerOne />
      <WhatWeDoOne />
      <AboutOne />
      <CounterOne />
      <GalleryOne />
      <PricingOne />
      <TestimonialOne />
      <BlogOne />
      <ContactBannerOne />
      <Footer />
    </div>
  );
};

export default HomeMain;