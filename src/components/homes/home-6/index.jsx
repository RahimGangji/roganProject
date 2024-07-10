import React from 'react';
import { Footer } from '../../../layout';
import HeaderFive from '../../../layout/headers/header-5';
import FeatureApp from '../../features/feature-app';
import AppsNewsLetter from '../../news-letters/apps-news-letter';
import PricingApp from '../../pricings/pricing-app';
import ServiceApp from '../../services/service-app';
import AppsTestimonial from '../../testimonials/apps-testimonial';
import BannerFive from '../../theme-banners/banner-five';
import WhyChoseApp from '../../why-chose/why-chose-app';


const HomeSixMain = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderFive />
      <BannerFive/>
      <ServiceApp/>
      <FeatureApp/>
      <WhyChoseApp/>
      <PricingApp/>
      <AppsTestimonial/>
      <AppsNewsLetter/>
      <Footer/>
    </div>
  );
};

export default HomeSixMain;