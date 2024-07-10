import React from 'react';

function ServiceBlock({ color, num, title, subtitle, icon,order }) {
  return (
    <div className="service-block" style={{ background: color }}>
      <div className="container">
        <div className="demo-container-1100">
          <div className="row">
            <div className={`col-lg-6 ${order?'order-lg-last':''}`} data-aos="fade-left">
              <div className="service-info">
                <div className="num">{num}</div>
                <h2 className="service-title"><a href="#">{title}</a></h2>
                <p>{subtitle}</p>
                <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
              </div>
            </div>
            <div className={`col-lg-6 ${order?'order-lg-first':''}`} data-aos="fade-right">
              <div className="img-box">
                <img src={`/assets/images/icon/icon${icon}.svg`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceCreative = () => {
  return (
    <>
      <div className="our-service service-creative pt-150">
        <div className="our-history mb-200">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 order-lg-last">
                <div className="text-wrapper">
                  <h2 className="service-title">Providing our trusted services with proud since 1980.</h2>
                  <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
              <div className="col-lg-5 order-lg-first">
                <div className="img-box">
                  <img src="/assets/images/service/7.jpg" alt="" />
                  <img src="/assets/images/service/8.jpg" alt="" className="bottom-img" data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <ServiceBlock color="#7d4afe" num='01' title="Mobile Application Design & Dev." subtitle="Lorem ipsum, or lipsum as it sometime dummy text used in laying out printed graphic or web design. The passage is at attributed to an unknown typesetters" icon="54" order={true} />

        <ServiceBlock color="#676dff" num='02' title="Interface Designer & UX Specialist." subtitle="Lorem ipsum, or lipsum as it sometime dummy text used in laying out printed graphic or web design. The passage is at attributed to an unknown typesetters" icon="55" />

        <ServiceBlock color="#549cff" num='03' title="Social & Online Marketing" subtitle="Lorem ipsum, or lipsum as it sometime dummy text used in laying out printed graphic or web design. The passage is at attributed to an unknown typesetters" icon="56" order={true} />

        <ServiceBlock color="#04cce8" num='04' title="Article & Keyword Research." subtitle="Lorem ipsum, or lipsum as it sometime dummy text used in laying out printed graphic or web design. The passage is at attributed to an unknown typesetters" icon="57" />



      </div>
    </>
  );
};

export default ServiceCreative;