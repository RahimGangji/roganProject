import React from 'react';

const SingleService = ({service}) => {
  const {desc, icon, title, snow_dot } = service;
  return (
    <div className="service-block">
      {snow_dot.map(dot => <span key={dot} className="snow-dot"></span>)}
      <div className="hover-content"></div>
      <i className={`${icon} icon-s`}></i>
      <h5 className="title"><a href="#">{title}</a></h5>
      <p>{desc}</p>
      <a href="#" className="detail-button"><i className="flaticon-next-1"></i></a>
    </div>
  );
};

export default SingleService;