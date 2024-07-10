import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import DetailsArea from './details-area';

const index = ({products,product}) => {
  return (
    <div className="main-page-wrapper">
    <Header />
    <Breadcrumb title="Single Product" subtitle="Product Details" />
    <DetailsArea products={products} product={product}/>
    <Footer top_border={true} />
  </div>
  );
};

export default index;