import React from 'react';
import { Footer, Header } from '../../../layout';
import ContactUsAgency from '../../contact-area/contact-us-agency';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <ContactUsAgency/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;