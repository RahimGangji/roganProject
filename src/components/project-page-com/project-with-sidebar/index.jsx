import React from 'react';
import { Footer, Header } from '../../../layout';
import ProjectSidebarArea from '../../projetcts/project-sidebar-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <ProjectSidebarArea/>
      <Footer />
    </div>
  );
};

export default index;