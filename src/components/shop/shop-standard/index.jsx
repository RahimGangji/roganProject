import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ProductArea from './product-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Our Products" subtitle="Shop" />
      <ProductArea/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;