import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';
import ModalStyleOne from './modal-style-one';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Modal'} />
      {/* modal style one start */}
      <ModalStyleOne />
      {/* modal style one end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;