import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import AppsTestimonial from '../../components/testimonials/apps-testimonial';
import SassTestimonial from '../../components/testimonials/sass-testimonial';
import TestimonialOne from '../../components/testimonials/testimonial-one';
import { Footer, Header } from '../../layout';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Testimonial'} />
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Testimonial One</div>
        </div>
        <TestimonialOne />
      </div>
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Testimonial Two</div>
        </div>
        <SassTestimonial/>
      </div>
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Testimonial Two</div>
        </div>
        <AppsTestimonial ui_testi={true} />
      </div>
      <Footer top_border={true} />
    </div>
  );
};

export default index;