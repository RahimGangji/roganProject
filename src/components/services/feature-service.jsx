import React from 'react';
import { service_data } from '../../data';
import SingleService from './single-service';

const services_items = service_data.filter(ser => ser.home_5)

const FeatureService = () => {
  return (
    <div className="our-service-sass theme-more-feature show-pr">
      <div className="container">
        <div className="theme-title-one text-center">
          <h2 className="main-title">More Features</h2>
        </div>

        <div className="inner-wrapper">
          <div className="row">
            {services_items.map((service) => {
              const { id, delay } = service;
              return <div key={id} className="col-lg-4 single-block" data-aos="fade-up"
                data-aos-delay={delay}>
                <SingleService service={service} />
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureService;