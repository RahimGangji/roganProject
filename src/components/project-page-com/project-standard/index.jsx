import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ContactBannerOne from '../../contact-banners/contact-banner-one';
import ProjectStandardArea from '../../projetcts/project-standard-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Project Gallery" subtitle="Project" />
      <ProjectStandardArea/>
      <ContactBannerOne />
      <Footer />
    </div>
  );
};

export default index;