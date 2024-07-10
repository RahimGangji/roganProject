import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ProjectMsFullWidthArea from '../../projetcts/project-ms-full-width-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Project Gallery" white_bg={true} />
      <ProjectMsFullWidthArea/>
      <Footer />
    </div>
  );
};

export default index;