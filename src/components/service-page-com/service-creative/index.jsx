import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ServiceCreative from '../../services/service-creative';
import AppsTestimonial from '../../testimonials/apps-testimonial';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Our Services" subtitle="Service" />
      <ServiceCreative/>
      <AppsTestimonial ser_creative={true} />
      <Footer top_border={true} />
    </div>
  );
};

export default index;