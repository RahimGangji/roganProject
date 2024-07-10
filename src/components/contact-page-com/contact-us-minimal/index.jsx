import React from 'react';
import { Footer, Header } from '../../../layout';
import ContactUsMinimal from '../../contact-area/contact-us-minimal';
import ContactAddressArea from './contact-address-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <ContactAddressArea/>
      <ContactUsMinimal/>
      <Footer />
    </div>
  );
};

export default index;