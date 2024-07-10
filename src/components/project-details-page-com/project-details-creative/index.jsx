import React from 'react';
import { Footer, Header } from '../../../layout';
import CreativeDetailsArea from './creative-details-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <CreativeDetailsArea/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;