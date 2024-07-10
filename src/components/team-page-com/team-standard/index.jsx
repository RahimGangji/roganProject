import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import TeamStandardTwo from '../../teams-com/team-standard-2';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Our Team" subtitle="Team" />
      <TeamStandardTwo/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;