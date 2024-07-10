import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ContactBannerOne from '../../contact-banners/contact-banner-one';
import ModernService from '../../services/modern-service';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Our Services" subtitle="Service" />
      <ModernService/>
      <ContactBannerOne />
      <Footer />
    </div>
  );
};

export default index;