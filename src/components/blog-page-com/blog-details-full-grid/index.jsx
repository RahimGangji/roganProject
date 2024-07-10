import React from 'react';
import { Footer, Header } from '../../../layout';
import DetailsFullGrid from './details-full-grid';

const index = ({blog}) => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <DetailsFullGrid/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;