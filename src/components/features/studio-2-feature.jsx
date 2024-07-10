import React from 'react';
import { service_data } from '../../data';

const services_items = service_data.filter(ser => ser.home_10);

const StudioTwoFeature = () => {
  return (
    <>
      <div className="studio-feature-area">
        <div className="container">
          <div className="theme-title-one text-center">
            <div className="upper-title">What We Do</div>
            <h2 className="main-title font-k2d">We design & build brands, Making somthing <br />meaningfull for our client.</h2>
          </div>

          <div className="row">
            {services_items.map((item, i) => {
              const { id, desc, title, icon, delay } = item;
              return <div key={id} className="col-lg-4 single-block aos-init aos-animate" data-aos="fade-up" data-aos-delay={delay}>
                <div className="feature-block">
                  <i className={`${icon} icon-s`}></i>
                  <h5 className="title font-k2d">{title}</h5>
                  <p>{desc}</p>
                  <a href="#" className="detail-button"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioTwoFeature;