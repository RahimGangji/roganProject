import React from 'react';
import StudioContactForm from '../forms/studio-contact-form';

const StudioContactArea = () => {
  return (
    <div className="studio-contact-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="contact-text">
              <div className="theme-title-one studio-title">
                <div className="upper-title">Contact us</div>
                <h2 className="main-title font-k2d">Contact us for any kind of query.</h2>
              </div>
              <p>Call us for immidiate support to this number</p>
              <a href="#" className="call-to-dial">+880 9999 801 29</a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ms-auto">
            <div className="studio-contact-style">
              {/* form start */}
              <StudioContactForm />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioContactArea;