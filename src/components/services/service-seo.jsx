import React from 'react';
import { service_data } from '../../data';


const contents = {
  upper_title: 'Services',
  main_title: <>We Are Specialized in the <br />Following Services</>,
  service_items: service_data.filter(service => service.home_2),
}
const { main_title, upper_title, service_items } = contents;

const ServiceSeo = () => {
  return (
    <>
      <div className="our-service-seo">
        <div className="round-shape-one">o</div>
        <div className="round-shape-two"></div>
        <div className="container">
          <div className="theme-title-one title-underline text-center">
            <div className="upper-title">{upper_title}</div>
            <h2 className="main-title">{main_title}</h2>
          </div>

          <div className="row">
            {service_items.map((ser) => {
              const { id, delay, desc, icon, title } = ser;
              return <div key={id} className="col-md-6">
                <div className="single-block" data-aos="flip-right" data-aos-delay={delay}>
                  <img src={icon} alt="" className="icon" />
                  <h4 className="title">
                    <a href="#">{title}</a>
                  </h4>
                  <p>{desc}</p>
                  <a href="#" className="more-button">More Details
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSeo;