import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import TeamBusiness from '../../teams-com/team-business';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Our Team" subtitle="Team" />
      <TeamBusiness/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;