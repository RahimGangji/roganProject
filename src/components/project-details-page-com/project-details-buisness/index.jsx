import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import BusinessDetailsArea from './business-details-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title={<>What features you will <br/>Get from App.</>} subtitle="Project" />
      <BusinessDetailsArea/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;