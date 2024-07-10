import React from 'react';
import { Footer, Header } from '../../../layout';
import BlogFullGridArea from '../../blogs/blog-full-grid-area';
import Breadcrumb from '../../breadcrumb/breadcrumb';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Blog Default" subtitle="Blog" />
      <BlogFullGridArea/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;