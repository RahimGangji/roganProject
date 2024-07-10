import Link from 'next/link';
import React from 'react';
import { SocialLinks } from '../../components/social-links';

const FooterStyleTwo = () => {
  return (
    <footer className="theme-footer-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-12 order-xl-1">
            <Link href="/">
              <a>
                <img src="/assets/images/logo/logo6.svg" alt="" />
              </a>
            </Link>
          </div>
          <div className="col-xl-5 col-12 order-xl-3">
            <ul className="footer-menu">
              <li><a href="#">About us.</a></li>
              <li><a href="#">Portfolio.</a></li>
              <li><a href="#">Services.</a></li>
              <li><a href="#">Contact.</a></li>
              <li><a href="#">Terms.</a></li>
            </ul>
          </div>
          <div className="col-xl-2 col-12 order-xl-4">
            <ul className="social-icon">
              <SocialLinks />
            </ul>
          </div>

          <div className="col-xl-3 col-12 order-xl-2">
            <p className="copy-right">&copy; {new Date().getFullYear()} copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterStyleTwo;