import React from 'react';
import { Footer, Header } from '../../../layout';
import ProjectDetailsArea from './details-area';
import RelatedProjects from './related-projects';

const index = ({item}) => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <ProjectDetailsArea item={item} />
      <RelatedProjects/>
      <Footer />
    </div>
  );
};

export default index;