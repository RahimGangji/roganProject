import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ProjectDetailsAgencyMain from '../components/project-details-page-com/project-details-agency';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Project Details Agency'} />
      <ProjectDetailsAgencyMain />
    </Wrapper>
  );
};

export default index;