import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import BlogDetailsArea from './blog-details-area';

const index = ({blog}) => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Blog Details" subtitle="Blog" />
      <BlogDetailsArea blog={blog} />
      <Footer top_border={true} />
    </div>
  );
};

export default index;