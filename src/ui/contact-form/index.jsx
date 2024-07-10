import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { ContactUsSection } from '../../components/contact-area/contact-us-agency';
import { ContactMinimal } from '../../components/contact-area/contact-us-minimal';
import { Footer, Header } from '../../layout';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Contact Form'} />
      {/* contact standard start */}
      <div className="element-section mb-150">
        <div className="contact-us-section">
          <div className="container">
            <ContactUsSection />
          </div>
        </div>
      </div>
      {/* contact standard end */}

      {/* contact minimal start */}
      <div className="element-section mb-150">
        <div className="contact-us-section contact-minimal">
          <ContactMinimal />
        </div>
      </div>
      {/* contact minimal end */}

       {/* contact standard start */}
       <div className="element-section mb-150">
        <div className="contact-us-section">
          <div className="container">
            <ContactUsSection />
          </div>
        </div>
      </div>
      {/* contact standard end */}
      
      <Footer top_border={true} />
    </div>
  );
};

export default index;