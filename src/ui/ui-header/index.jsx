import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Header } from '../../layout';
import HeaderLightMain from './light-headers'
import HeaderDarkMain from './dark-headers'
import FooterStyleThree from '../ui-footer/footer-style-three';

const index = () => {
  return (
    <div className="main-page-wrapper" style={{ background: '#f3f3f3' }}>
      <Header />
      <BreadcrumbTwo title={'Header'} />
      <HeaderLightMain />
      <HeaderDarkMain />
      <div className="element-section">
        <FooterStyleThree />
      </div>
    </div>
  );
};

export default index;