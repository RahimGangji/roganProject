import React from 'react';

const AboutAgency = () => {
  return (
    <div className="about-us-standard agency-style pt-150">
      <div className="container">
        <div className="demo-container-1100">
          <div className="row gutter-80">
            <div className="col-lg-6 order-lg-last" data-aos="fade-left">
              <div className="single-block">
                <h5 className="block-title pb-30">Our History</h5>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out printed graphic or web designs.</p>
                <div className="author-data">
                  <h6 className="name pb-30">Derek Ramsey</h6>
                  <img src="/assets/images/home/sign2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-first" data-aos="fade-right"><div className="img-box">
              <img src="/assets/images/home/10.jpg" alt="" /></div>
            </div>
          </div>
          <div className="row gutter-80">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="single-block">
                <h5 className="block-title pb-30">Our Goal</h5>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De.</p> <br />
                <p>Malorum for use in a type specimen book. Ionsectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="img-box">
                <img src="/assets/images/home/11.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;