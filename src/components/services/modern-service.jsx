import React from 'react';

function ServiceBlock({ order, color, tag, title, fade, fade_2, img }) {
  return (
    <div className="row service-block align-items-center">
      <div className={`col-md-6 ${order ? 'order-md-last' : ''}`} data-aos={`fade-${fade}`}>
        <div className="service-info">
          <div className={`tag color-${color}`}>{tag}</div>
          <h2 className="service-title"><a href="#">{title}</a></h2>
          <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
        </div>
      </div>
      <div className={`col-md-6 ${order ? 'order-md-first' : ''}`} data-aos={`fade-${fade_2}`}>
        <div className="img-box">
          <img src={`/assets/images/service/${img}.jpg`} alt="" />
        </div>
      </div>
    </div>
  )
}

const ModernService = () => {
  return (
    <>
      <div className="our-service service-modren pt-150 pb-200">
        <div className="container">
          <div className="theme-title-three text-center mb-200">
            <h2 className="title">We’v been providing our services with proud since 1980.</h2>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>

          <ServiceBlock order={true} fade="left" fade_2="right" color="one" tag="Mobile App"
            title="Mobile Application Design & Dev." img="9" />
          <ServiceBlock order={false} fade="right" fade_2="left" color="two" tag="UI/UX"
            title="Interface Design with UX." img="10" />
          <ServiceBlock order={true} fade="left" fade_2="right" color="three" tag="Wordpress"
            title="WordPress Theme Development" img="11" />
          <ServiceBlock order={false} fade="right" fade_2="left" color="four" tag="Marketing"
            title="Social & Online Marketing." img="12" />

        </div>
      </div>
    </>
  );
};

export default ModernService;