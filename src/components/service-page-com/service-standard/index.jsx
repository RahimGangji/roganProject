import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ContactBannerTwo from '../../contact-banners/contact-banner-two';
import StandService from '../../services/stand-service';
import TestimonialOne from '../../testimonials/testimonial-one';


const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Our Services" subtitle="Service" />
      <StandService/>
      <TestimonialOne/>
      <ContactBannerTwo/>
      <Footer />
    </div>
  );
};

export default index;