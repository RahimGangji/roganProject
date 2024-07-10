import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ProjectDetailsCreativeMain from '../components/project-details-page-com/project-details-creative';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Project Details Creative'} />
      <ProjectDetailsCreativeMain />
    </Wrapper>
  );
};

export default index;