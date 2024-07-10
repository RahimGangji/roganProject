import React from 'react';
import { Header } from '../../../layout';
import ProjectMinimalArea from '../../projetcts/project-minimal-area';

const index = () => {
  return (
    <div className='project-minimal-page-wrapper'>
      <div className="main-page-wrapper">
        <Header />
        <ProjectMinimalArea/>
      </div>
    </div>
  );
};

export default index;