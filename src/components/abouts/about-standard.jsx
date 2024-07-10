import React from 'react';

const AboutStandard = () => {
  return (
    <>
      <div className="about-us-standard pt-150 pb-150">
        <div className="container">
          <div className="top-icon-box">
            <div className="icon"><i className="flaticon-user"></i></div>
            <span>About us</span>
          </div>

          <div className="theme-title-three text-center mb-170">
            <h2 className="title">We’r dynamic team of creative people with innovative mind</h2>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labis nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nit in voluptate velit esse cillum dolore nulla pariatur</p>
          </div>

          <div className="demo-container-900">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="single-block">
                  <h5 className="block-title pb-30">Our History</h5>
                  <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De.</p>
                  <div className="author-data">
                    <h6 className="name pb-30">Derek Ramsey</h6>
                    <img src="/assets/images/home/sign2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up">
                <div className="single-block">
                  <h5 className="block-title pb-30">Our Goal</h5>
                  <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De.</p>
                  <p>Malorum for use in a type specimen book. Ionsectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStandard;