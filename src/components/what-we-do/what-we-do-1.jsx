import React from 'react';

function SingleBlock({icon,title,text,link_text }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-block">
        <div className="icon">
          <img src="/assets/images/shape/shape-2.svg" alt="shape" className="bg" />
          <img src={`/assets/images/icon/icon${icon}.svg`} alt="icon" className="shape" data-aos="zoom-in-down" />
        </div>
        <h5 className="title">{title}</h5>
        <p>{text}</p>
        <a href="#" className="more-button">{link_text}</a>
      </div>
    </div>
  )
}

const contents = {
  upper_title:'What We Do',
  main_title:<>The things motivates me is common <br />form of motivation.</>
}
const {upper_title,main_title} = contents;

const WhatWeDo = () => {
  return (
    <>
      <div className="agn-what-we-do pt-150 pb-200">
        <img src="/assets/images/shape/shape-63.svg" alt="" className="shape-one" data-aos="fade-right" />
        <img src="/assets/images/shape/shape-56.svg" alt="" className="shape-two" />
        <div className="container">
          <div className="theme-title-one text-center">
            <div className="upper-title">{upper_title}</div>
            <h2 className="main-title">{main_title}</h2>
          </div>
          <div className="row">
            <SingleBlock icon="1" title="Strategy & Research." text="Lorem ipsum dolor si amet, an dus situ  sint pertinacia constituto, mir dignsius quo great." link_text="More About Strategy & Research" />
            <SingleBlock icon="2" title="Design & Development." text="Lorem ipsum dolor si amet, an dus situ  sint pertinacia constituto, mir dignsius quo great." link_text="More About Design & Development" />
            <SingleBlock icon="3" title="Managment & Marketing." text="Lorem ipsum dolor si amet, an dus situ  sint pertinacia constituto, mir dignsius quo great." link_text="More About Managment & Marketing" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;