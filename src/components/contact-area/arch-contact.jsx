import React from 'react';
import ArchForm from '../forms/arch-form';

const ArchContact = () => {
  return (
    <>
      <div className="arch-contact">
        <div className="form-wrapper">
          <div className="container">
            <div className="inner-wrapper">
              <div className="row">
                <div className="col-lg-6 order-lg-last">
                  <div className="contact-text">
                    <div className="theme-title-one arch-title">
                      <div className="upper-title">Contact us</div>
                      <h2 className="main-title">Send us messages for any info.</h2>
                    </div>
                    <p className="font-lato">Call us for any emergency to this number</p>
                    <a href="#" className="call-us font-lato">188-708-5343</a>
                  </div>
                </div>

                <div className="col-lg-6 order-lg-first">
                  <ArchForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchContact;