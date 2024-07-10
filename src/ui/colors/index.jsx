import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';
import BackgroundColor from './background-color';
import TextColor from './text-color';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Colors'} />
      {/* element style start */}
      <TextColor/>
      {/* element style end */}

      {/* element style two start */}
      <BackgroundColor/>
      {/* element style two end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;