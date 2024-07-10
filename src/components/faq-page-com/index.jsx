import React from 'react';
import { Footer, Header } from '../../layout';
import Breadcrumb from '../breadcrumb/breadcrumb';
import FaqPageArea from '../faqs/faq-page-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
    <Header/>
    <Breadcrumb title="Question & Answers" subtitle="Faq." />
    <FaqPageArea/>
    <Footer top_border={true} />
  </div>
  );
};

export default index;