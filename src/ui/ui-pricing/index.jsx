import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import PricingOne from '../../components/pricings/pricing-one';
import PricingSass from '../../components/pricings/pricing-sass';
import SeoPricing from '../../components/pricings/seo-pricing';
import { Footer, Header } from '../../layout';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Pricing Table'} />
      <div className='element-section mb-150'>
        <PricingOne ui_pricing={true} />
      </div>
      <div className='element-section mb-150'>
        <SeoPricing ui_pricing={true} />
      </div>
      <div className='element-section mb-150'>
        <PricingSass ui_pricing={true} />
      </div>
      <Footer top_border={true} />
    </div>
  );
};

export default index;