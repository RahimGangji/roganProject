import React from 'react';
import { Footer, Header } from '../../../layout';
import BlogFilterArea from '../../blogs/blog-filter-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BlogFilterArea/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;