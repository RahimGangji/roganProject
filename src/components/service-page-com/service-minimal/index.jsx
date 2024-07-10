import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ContactBannerOne from '../../contact-banners/contact-banner-one';
import MinimalService from '../../services/minimal-service';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Our Services" subtitle="Service" />
      <MinimalService/>
      <ContactBannerOne />
      <Footer />
    </div>
  );
};

export default index;