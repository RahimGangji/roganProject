import React from 'react';
import { service_data } from '../../data';

const contents = {
  title: 'Services',
  sm_text: 'Lorem ipsum dolor sit amet, ut mea inciderint ullamcorper. Mei putant deleniti',
  services: service_data.filter(ser => ser.home_3),
}
const { title, sm_text, services } = contents;

// data-wow-delay={`${i+1}00`}
// data-aos="flip-right"

const ServicePortfolio = ({home_particles}) => {
  return (
    <>
      <div className="section-portfo our-service-portfo">
        <div className="section-num show-pr"><span>0</span><span>3</span></div>
        <div className="container">
          <div className="title-wrapper">
            <h2 className="theme-title-two">{title}<span>.</span></h2>
            <p>{sm_text}</p>
          </div>

          <div className="row">
            {services.map((service,i) => {
              const { id,desc,icon,title } = service;
              return <div key={id} className={`col-lg-6 ${home_particles?'wow fadeInUp':''}`} 
              data-wow-delay={home_particles?`${i+1}00`:''} data-aos={`${home_particles?'':'flip-right'}`}>
                <div className="service-block">
                  <img src={icon} alt="" className="icon" />
                  <h5 className="title"><a href="#">{title}</a></h5>
                  <p>{desc}</p>
                  <a href="#" className="read-more"><i className="flaticon-next"></i></a>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePortfolio;