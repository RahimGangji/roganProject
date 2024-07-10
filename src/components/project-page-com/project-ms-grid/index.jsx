import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ProjectMasonryGridArea from '../../projetcts/project-ms-grid-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Project Gallery" white_bg={true} />
      <ProjectMasonryGridArea/>
      <Footer />
    </div>
  );
};

export default index;