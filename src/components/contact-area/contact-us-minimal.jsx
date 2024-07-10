import React from 'react';
import ContactAgencyForm from '../forms/contact-agency-form';

export function ContactMinimal() {
  return (
    <div className="row g-0">
      <div className="col-lg-6 order-lg-last">
        <div className="inner-wrapper clearfix">
          <div className="contact-form">
            {/* form start */}
            <ContactAgencyForm style_3={true} />
            {/* form end */}
          </div>
        </div>
      </div>
      <div className="col-lg-6 order-lg-first">
        <div id="google-map-three">
          <div className="map-canvas">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd" height="100%" style={{ border: 0, width: '100%' }}
              allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactUsMinimal = () => {
  return (
    <>
      <div className="contact-us-section contact-minimal">
        <ContactMinimal/>
      </div>
    </>
  );
};

export default ContactUsMinimal;