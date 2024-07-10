import React from 'react';


function ServiceBlock({ img, title, subtitle }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="service-block" data-aos="fade-up"
        style={{ backgroundImage: `url(/assets/images/service/${img}.jpg)` }}>
        <div className="hover-content">
          <h6 className="title"><a href="#">{title}</a></h6>
          <p>{subtitle}</p>
          <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
        </div>
      </div>
    </div>
  )
}

const StandService = () => {
  return (
    <>
      <div className="our-service service-standard pt-150 pb-150">
        <div className="container">
          <div className="theme-title-three text-center mb-150">
            <h2 className="title">We’v been providing our services with proud since 1980.</h2>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>

          <div className="clearfix">
            <div className="row">
              <ServiceBlock img="1" title="User Friendly dashboard & Cool Interface." subtitle="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." />
              <ServiceBlock img="2" title="User Friendly dashboard & Cool Interface." subtitle="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." />
              <ServiceBlock img="3" title="User Friendly dashboard & Cool Interface." subtitle="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." />
              <ServiceBlock img="4" title="User Friendly dashboard & Cool Interface." subtitle="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." />
              <ServiceBlock img="5" title="User Friendly dashboard & Cool Interface." subtitle="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." />
              <ServiceBlock img="6" title="User Friendly dashboard & Cool Interface." subtitle="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandService;