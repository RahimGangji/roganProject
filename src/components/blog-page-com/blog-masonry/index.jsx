import React from 'react';
import { Footer, Header } from '../../../layout';
import BlogMasonryArea from '../../blogs/blog-masonry-area';
import Breadcrumb from '../../breadcrumb/breadcrumb';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Blog Masonry" subtitle="Blog" />
      <BlogMasonryArea/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;