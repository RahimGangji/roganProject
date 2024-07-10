import React from 'react';
import ContactAgencyForm from '../forms/contact-agency-form';
import { SocialLinks } from '../social-links';

export function ContactUsSection() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="contact-form">
          {/* form start */}
          <ContactAgencyForm />
          {/* form end  */}
        </div>
      </div>

      <div className="col-lg-6">
        <div className="contact-info">
          <h2 className="title">Don’t Hesitate to contact with us for any kind of information</h2>
          <p>Call us for imidiate support to this number</p>
          <a href="#" className="call">088 130 629 8615</a>
          <ul>
            <SocialLinks />
          </ul>
        </div>
      </div>
    </div>
  )
}

const ContactUsAgency = () => {
  return (
    <>
      {/* map area start */}
      <div id="google-map-two">
        <div className="map-canvas">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd" height="100%" style={{ border: 0, width: '100%' }}
            allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
      {/* map area end */}

      <div className="contact-us-section contact-agency pt-150 mb-200">
        <div className="container">
          <ContactUsSection/>
        </div>
      </div>

    </>
  );
};

export default ContactUsAgency;