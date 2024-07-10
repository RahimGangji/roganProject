import React from 'react';
import { Footer, Header } from '../../layout';
import FeatureBanner from '../action-banner/feature-banner';
import Breadcrumb from '../breadcrumb/breadcrumb';
import ContactBannerOne from '../contact-banners/contact-banner-one';
import FeatureApp from '../features/feature-app';
import FeatureService from '../services/feature-service';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Features" subtitle="Features." />
      <FeatureApp spacing="p0 mt-200" />
      <FeatureBanner/>
      <FeatureService/>
      <ContactBannerOne />
      <Footer />
    </div>
  );
};

export default index;