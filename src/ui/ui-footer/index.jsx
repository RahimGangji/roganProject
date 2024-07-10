import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';
import FooterStyleFour from './footer-style-four';
import FooterStyleFourLight from './footer-style-four-light';
import FooterStyleThree from './footer-style-three';
import FooterStyleTwo from './footer-style-two';

const index = () => {
  return (
    <div className="main-page-wrapper" style={{ backgroundColor: '#f3f3f3' }}>
      <Header />
      <BreadcrumbTwo title={'Footer'} />
      {/* footer one start */}
      <div className="element-section mb-150 pt-90" style={{ backgroundColor: '#fff' }}>
        <Footer />
      </div>
      {/* footer one end */}

      {/* footer two start */}
      <div className="element-section mb-150">
        <FooterStyleTwo />
      </div>
      {/* footer two end */}

      {/* footer style three start */}
      <div className="element-section mb-150 pt-90" style={{ backgroundColor: '#fff' }}>
        <FooterStyleThree />
      </div>
      {/* footer style three end */}

      {/* footer style four start */}
      <div className="element-section mb-150">
        <FooterStyleFour />
      </div>
      {/* footer style four end */}

      {/* footer style five start */}
      <div className="element-section pt-90" style={{ backgroundColor: '#fff' }}>
        <FooterStyleFourLight/>
      </div>

      {/* footer style five end */}
    </div>
  );
};

export default index;