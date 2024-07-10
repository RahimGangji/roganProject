import React from 'react';
import {Footer, HeaderFour } from '../../../layout';
import SassBanner from '../../contact-banners/sass-banner';
import SassFaq from '../../faqs/sass-faq';
import FeatureSass from '../../features/feature-sass';
import PricingSass from '../../pricings/pricing-sass';
import ServicesSass from '../../services/services-sass';
import SassTestimonial from '../../testimonials/sass-testimonial';
import BannerFour from '../../theme-banners/banner-four';
import PartnersOne from '../../trusted-pertners/pertners-1';



const HomeFiveMain = () => {
  return (
    <div className="no-scroll-y">
      <div className="main-page-wrapper">
        <HeaderFour/>
        <BannerFour/>
        <PartnersOne/>
        <ServicesSass/>
        <FeatureSass/>
        <PricingSass/>
        <SassTestimonial/>
        <SassFaq/>
        <SassBanner/>
        <Footer/>
      </div>
    </div>
  );
};

export default HomeFiveMain; 