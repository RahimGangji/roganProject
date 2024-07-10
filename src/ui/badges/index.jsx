import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';
import BadgeElements from './badge-elements';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Badges'} />
      {/* element style start */}
      <BadgeElements />
      {/* element style end */}

      {/* Contextual variations start */}
      <div className="element-section mb-150">
        <div className="element-tile-two">Contextual variations</div>
        <div className="container">
          <span className="badge text-bg-primary">Primary</span>
          <span className="badge text-bg-secondary">Secondary</span>
          <span className="badge text-bg-success">Success</span>
          <span className="badge text-bg-danger">Danger</span>
          <span className="badge text-bg-warning">Warning</span>
          <span className="badge text-bg-info">Info</span>
          <span className="badge text-bg-light">Light</span>
          <span className="badge text-bg-dark">Dark</span>
        </div>
      </div>
      {/* Contextual variations end */}

      {/* Pill badges start */}
      <div className="element-section mb-150">
        <div className="element-tile-two">Pill badges</div>
        <div className="container">
          <span className="badge rounded-pill text-bg-primary">Primary</span>
          <span className="badge rounded-pill text-bg-secondary">Secondary</span>
          <span className="badge rounded-pill text-bg-success">Success</span>
          <span className="badge rounded-pill text-bg-danger">Danger</span>
          <span className="badge rounded-pill text-bg-warning">Warning</span>
          <span className="badge rounded-pill text-bg-info">Info</span>
          <span className="badge rounded-pill text-bg-light">Light</span>
          <span className="badge rounded-pill text-bg-dark">Dark</span>
        </div>
      </div>
      {/* Pill badges end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;