import React, { useEffect } from 'react';
import { FooterFour, HeaderSix } from '../../../layout';
import StudioTwoBanner from '../../action-banner/studio-2-banner';
import StudioContactArea from '../../contact-area/studio-contact-area';
import StudioTwoFeature from '../../features/studio-2-feature';
import StudioTwoGallery from '../../galleries/studio-2-gallery';
import StudioTwoTestimonial from '../../testimonials/studio-2-testimonial';
import BannerSeven from '../../theme-banners/banner-seven';
import StudioPartners from '../../trusted-pertners/studio-partners';

const HomeTenMain = () => {
  return (
    <div className='studio-box-container'>
      <div className='main-page-wrapper'>
        <HeaderSix />
        <BannerSeven />
        <StudioTwoBanner />
        <StudioTwoFeature />
        <StudioTwoGallery />
        <StudioTwoTestimonial />
        <StudioPartners />
        <StudioContactArea />
        <FooterFour />
      </div>
    </div>
  );
};

export default HomeTenMain;