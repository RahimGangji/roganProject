import React from 'react';

function SingleBlock({active=false,delay,icon,title }) {
  return (
    <div className={`col-lg-3 col-sm-6 single-block ${active?'active':''}`} 
    data-aos="fade-up" data-aos-delay={delay?delay:''}>
      <div className="wrapper">
        <div className="icon-box">
          <img src={`/assets/images/icon/${icon}`} alt="icon" />
        </div>
        <a href="#" className="title">{title}</a>
      </div>
    </div>
  )
}

const WhatWeDoTwo = () => {
  return (
    <>
      <div className="seo-what-we-do">
        <div className="container">
          <div className="theme-title-one title-underline text-center upper-bar">
            <h2 className="main-title">Rogan is a Agency for Boost Up <br/>Your Web Traffic.</h2>
          </div>

          <div className="row">
            <SingleBlock icon="icon4.svg" title="Customer Experience" />
            <SingleBlock active={true} delay="300" icon="icon5.svg" title="Marketing Goal" />
            <SingleBlock delay="400" icon="icon6.svg" title="Analytic" />
            <SingleBlock delay="500" icon="icon7.svg" title="Speed Optimization" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDoTwo;