import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import AboutStandardCounter from '../../components/counters/ab-standard-counter';
import CounterWrapper from '../../components/counters/counter-wrapper';
import { Footer, Header } from '../../layout';
import ThemeCounterThree from './theme-counter-three';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Counter'} />
      {/* counter one start */}
      <div className="element-section mb-150">
        <div className="element-tile-two">Counter one</div>
        <div className="agn-counter-section m0">
          <div className="container">
            <div className="main-wrapper">
              {<CounterWrapper />}
            </div>
          </div>
        </div>
      </div>
      {/* counter one end */}

      {/* counter two start */}
      <div className="element-section mb-150">
        <div className="element-tile-two">Counter Two</div>
        <div className="agn-counter-section m0">
          <div className="container">
            <div className="main-wrapper">
              {<CounterWrapper icon={true} />}
            </div>
          </div>
        </div>
      </div>
      {/* counter two end */}

      {/* counter three start */}
      <div className="element-section mb-150">
        <div className="element-tile-two">Counter Three</div>
        <div className="theme-counter-three">
          <div className="container">
            <ThemeCounterThree />
          </div>
        </div>
      </div>
      {/* counter three end */}

      {/* counter four start */}
      <div className="element-section mb-150">
        <div className="element-tile-two">Counter Four</div>
        <div className="theme-counter-three">
          <div className="container">
            <ThemeCounterThree icon={true} />
          </div>
        </div>
      </div>
      {/* counter four end */}

      {/* counter five start */}
      <div className="element-section mb-150">
				<div className="element-tile-two">Counter Five</div>
				<AboutStandardCounter/>
			</div>
      {/* counter five end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;