import React from 'react';
import BrandSlider from '../trusted-pertners/brand-slider';

const StudioTwoBanner = () => {
  return (
    <>
      <div className="action-banner-three">
        <div className="container">
          <div className="main-wrapper">
            <h3 className="font-k2d">WE BUILT TECH SOLUTIONS LIKE</h3>
            <BrandSlider studio_2={true} />
            <p className="font-lato">The efficiency of our process and the quality of our digital products. <br /> It’s secret ingredient that makes it all happen.</p>
            <img src="/assets/images/home/sign.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioTwoBanner;