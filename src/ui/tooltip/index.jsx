import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';


const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Tooltips'} />
      {/* tooltip start */}
      <div className="element-section mb-150">
        <div className="container">
          {['top', 'right', 'bottom', 'left'].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Tooltip on <strong>{placement}</strong>.
                </Tooltip>
              }
            >
              <Button variant="secondary mx-2">Tooltip on {placement}</Button>
            </OverlayTrigger>
          ))}
        </div>
      </div>
      {/* tooltip end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;