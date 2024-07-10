import Link from 'next/link';
import React from 'react';
import { SocialLinks } from '../../components/social-links';

const FooterStyleFourLight = () => {
  return (
    <footer className="theme-footer-four light-v">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 about-widget" data-aos="fade-up">
              <p>We point past each other with our words, arguing as though we’re looking at the same facts & great experiences.</p>
              <a href="#" className="theme-button-two">Ask Question</a>
            </div>
            <div className="col-lg-2 col-sm-6 col-12 footer-list" data-aos="fade-up">
              <h5 className="title">Info</h5>
              <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Get Started</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 footer-list" data-aos="fade-up">
              <h5 className="title">Company</h5>
              <ul>
                <li>
                  <Link href="/about-us-standard">
                    <a>Press Releases</a>
                  </Link>
                </li>
                <li>
                  <Link href="/project-standard">
                    <a>Mission</a>
                  </Link>
                </li>
                <li>
                  <Link href="/team-standard">
                    <a>Strategy</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Works</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 footer-information" data-aos="fade-up">
              <h5 className="title">Contact</h5>
              <p><a href="#" className="email">boga.inc@company.com</a></p>
              <p><a href="#" className="phone">720.661.2231</a></p>
              <ul className="social-icon">
                <SocialLinks />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bottom-footer">
          <div className="clearfix">
            <p>&copy; {new Date().getFullYear()} copyright all right reserved</p>
            <ul>
              <li><a href="#">Privace & Policy.</a></li>
              <li>
                <Link href="/faq">
                  <a >Faq.</a>
                </Link>
              </li>
              <li><a href="#">Terms.</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterStyleFourLight;