import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';
import TabStyleOne from './tab-style-one';
import TabStyleThree from './tab-style-three';
import TabStyleTwo from './tab-style-two';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Tabs'} />
      {/* style one start */}
      
      {/* tab style one start */}
      <TabStyleOne/>
      {/* tab style one end */}
      
      {/* tab style two start */}
      <TabStyleTwo/>
      {/* tab style two end */}
      
      {/* tab style three start */}
      <TabStyleThree/>
      {/* tab style three end */}

      {/* style one end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;