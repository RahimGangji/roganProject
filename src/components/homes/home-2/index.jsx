import React from 'react';
import { Footer, HeaderTwo } from '../../../layout';
import SeoPricing from '../../pricings/seo-pricing';
import TestimonialOne from '../../testimonials/testimonial-one';
import WhatWeDoTwo from '../../what-we-do/what-we-do-2';
import SeoContactBanner from '../../contact-banners/seo-contact-banner';
import SeoGoal from '../../goals/seo-goal';
import ServiceSeo from '../../services/service-seo';
import BannerTwo from '../../theme-banners/banner-two';
import SeoWorkProgress from '../../work-progress/seo-work-progress';

const HomeTwoMain = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTwo/>
      <BannerTwo/>
      <WhatWeDoTwo/>
      <SeoGoal/>
      <ServiceSeo/>
      <SeoWorkProgress/>
      <SeoPricing/>
      <TestimonialOne/>
      <SeoContactBanner/>
      <Footer/>
    </div>
  );
};

export default HomeTwoMain;