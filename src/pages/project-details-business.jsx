import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ProjectDetailsBusinessMain from '../components/project-details-page-com/project-details-buisness';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Project Details Business'} />
      <ProjectDetailsBusinessMain />
    </Wrapper>
  );
};

export default index;