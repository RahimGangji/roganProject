import React from 'react';
import BrandSlider from './brand-slider';


const PartnersOne = () => {
  return (
    <div className="trusted-partner">
      <div className="container">
        <h6 className="title">Trusted Over <span>2300+</span> Companies</h6>
        {/* slider start */}
        <BrandSlider />
        {/* slider end */}
      </div>
    </div>
  );
};

export default PartnersOne;