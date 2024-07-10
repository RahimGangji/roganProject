import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ContactUsStandard from '../../contact-area/contact-us-standard';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Contact Us" subtitle="Contact" />
      <ContactUsStandard/>
      <Footer />
    </div>
  );
};

export default index;