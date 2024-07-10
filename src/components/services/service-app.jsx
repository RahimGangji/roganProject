import React from 'react';
import { service_data } from '../../data';

const services = service_data.filter(ser => ser.home_6);

const ServiceApp = () => {
  return (
    <>
      <div className="our-service-app">
        <div className="theme-title-one text-center">
          <h2 className="main-title">Service We Offer</h2>
        </div>

        <div className="main-content show-pr">
          <div className="row">
            {services.map((service, i) => {
              const { id, desc, title, illustration_box } = service;
              return <div key={i} className="col-lg-4 single-block">
                <div className="inner-wrapper">
                  <div className="illustration-box">
                    {illustration_box.map((item, i) => (
                      <img key={i} src={item.img} alt="" className={item.img_class} />
                    ))}
                  </div>
                  <h4 className="title"><a href="#">{title}</a></h4>
                  <p>{desc}</p>
                </div>
              </div>
            })}
          </div>

          <a href="#" className="more-button">See More Details</a>
          <a href="#feature" className="down-arrow scroll-target"><span>
            <i className="flaticon-back"></i></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceApp;