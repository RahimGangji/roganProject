import React from 'react';
import { SocialLinks } from '../../social-links';

function AddressBlock({ icon, title, subtitle, socials }) {
  return (
    <div className="col-lg-4">
      <div className="address-block">
        <div className="icon-box">
          <img src={`/assets/images/icon/icon${icon}.svg`} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{subtitle}</p>
        {socials && <ul>
          <SocialLinks />
        </ul>
        }
      </div>
    </div>
  )
}

const ContactAddressArea = () => {
  return (
    <>
      <div className="contact-address-two">
        <div className="container">
          <div className="theme-title-one text-center">
            <div className="upper-title">Our Address</div>
            <h2 className="main-title">Don’t hesitate to contact us for <br />any information. </h2>
          </div>

          <div className="row">
            <AddressBlock icon="59" title="Our Location" subtitle={<>Danmondi, 7563 King Meadow <br />Suite 896, USA</>} />
            <AddressBlock icon="60" title="Email & Phone" subtitle={<><a href="#">roganinc@coname.com</a> <br /><a href="#">880 1723801729</a></>} />
            <AddressBlock icon="61" title="Get In Touch" subtitle={"Also find us social media below"}
              socials={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAddressArea;