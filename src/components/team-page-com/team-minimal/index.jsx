import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import TeamMinimal from '../../teams-com/team-minimal';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Our Team" subtitle="Team" />
      <TeamMinimal/>
      <Footer top_border={true} />
    </div>
  );
};

export default index;