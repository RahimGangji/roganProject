import React from 'react';
import Tilt from 'react-parallax-tilt';

// feature image box 
function FeatureImageBox() {
  return <>
    <img src="/assets/images/shape/shape-45.svg" alt="" className="shape-one" />
    <img src="/assets/images/shape/shape-46.svg" alt="" className="shape-two" />
    <img src="/assets/images/shape/shape-47.svg" alt="" className="shape-three" />
    <img src="/assets/images/shape/shape-48.svg" alt="" className="shape-four" />
    <img src="/assets/images/shape/shape-49.svg" alt="" className="shape-five" />
  </>
}

function FeatureBox({ feature, icon, title, subtitle }) {
  return <Tilt>
    <div className={`feature-offer-box ${feature}-feature js-tilt`}>
      <div className="icon-box"><img src={`/assets/images/icon/${icon}`} alt="icon" /></div>
      <h4 className="title">{title}</h4>
      <p>{subtitle}</p>
    </div>
  </Tilt>
}

const FeatureApp = ({ spacing }) => {
  return (
    <>
      <div className={`our-feature-app ${spacing ? spacing : ''}`} id="feature">
        <div className="container">
          <div className="row single-feature-box">
            <div className="col-lg-5 order-lg-last">
              <div className="text-wrapper">
                <img src="/assets/images/icon/icon30.svg" alt="" className="icon" />
                <h2 className="title">What features you will Get from App.</h2>
                <div className="sub-heading">laboris nisi ut aliquip ex ea commodo consequat.</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod tempor incididunt ut labore aliqua. Ut enim adi minim veniam, quis nostrud exercitation </p>
                <a href="#" className="explore-button">Explore More</a>
              </div>
            </div>

            <div className="col-lg-7 order-lg-first">
              <div className="feature-img-box">
                <FeatureImageBox />
                <div className="row p-rel">
                  <div className="col-lg-6">
                    <FeatureBox feature="support" icon="icon31.svg" title="Great Support." subtitle="Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu." />
                  </div>
                  <div className="col-lg-6">
                    <FeatureBox feature="price" icon="icon26.svg" title="Affordable Price" subtitle="Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu." />
                    <FeatureBox feature="access" icon="icon32.svg" title="Quick Access." subtitle="Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row single-feature-box">
            <div className="col-lg-5">
              <div className="text-wrapper">
                <img src="/assets/images/icon/icon33.svg" alt="" className="icon" />
                <h2 className="title">1000+ customer using Our application.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod tempor incididunt ut labore aliqua. Ut enim que minim veniam, quis nostrud exercitation. </p>
                <a href="#" className="explore-button">Get Access</a>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="feature-img-box">
                <FeatureImageBox />
                <div className="access-screen-holder">
                  <div className="clearfix js-tilt">
                    <img src="/assets/images/home/screen10.png" alt="" className="screen" data-aos="fade-up" data-aos-duration="1200" />
                    <img src="/assets/images/home/screen11.png" alt="" className="screen" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250" />
                    <img src="/assets/images/home/screen12.png" alt="" className="screen" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row single-feature-box">
            <div className="col-lg-5 order-lg-last">
              <div className="text-wrapper">
                <img src="/assets/images/icon/icon34.svg" alt="" className="icon" />
                <h2 className="title">Thousands of feature awaiting for you.</h2>
                <div className="sub-heading">laboris nisi ut aliquip ex ea commodo consequat.</div>
                <ul>
                  <li>Lorem ipsum essent alien eam hendrerit mel anil.</li>
                  <li>Lorem ipsum essent alien eam hendrerit mel es vidit.</li>
                  <li>hendrerit mel es vidit lus anil nibh due.</li>
                </ul>
                <a href="#" className="explore-button">Explore More</a>
              </div>
            </div>

            <div className="col-lg-7 order-lg-first">
              <div className="feature-img-box">
                <FeatureImageBox />
                <div className="screen-mockup js-tilt">
                  <img src="/assets/images/home/screen13.png" alt="" className="mockup" data-aos="fade-up" data-aos-duration="1200" />
                  <img src="/assets/images/home/screen14.png" alt="" className="screen-one" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="150" />
                  <img src="/assets/images/home/screen15.png" alt="" className="screen-two" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="250" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureApp;