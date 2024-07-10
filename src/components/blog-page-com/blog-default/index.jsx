import React from 'react';
import { Footer, Header } from '../../../layout';
import BlogDefaultArea from '../../blogs/blog-default-area';
import Breadcrumb from '../../breadcrumb/breadcrumb';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Blog Default" subtitle="Blog" />
      <BlogDefaultArea/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;