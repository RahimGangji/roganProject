import Link from 'next/link';
import React from 'react';
import { SocialLinks } from '../../components/social-links';

const FooterFour = () => {
  return (
    <footer className="studio-footer-one">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 about-widget" >
              <Link href="/">
                <a className="logo">
                  <img src="/assets/images/logo/logo14.svg" alt="" />
                </a>
              </Link>
            </div>

            <div className="col-lg-8 col-12">
              <h2 className="font-k2d">Work inquiry, Job oportunities or somthing elase? <a href="#">Email us</a></h2>
              <div className="row">
                <div className="col-sm-4 col-12 footer-list" >
                  <h5 className="title font-k2d">Services</h5>
                  <ul>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Wordpress</a></li>
                    <li><a href="#">Online Marketing</a></li>
                    <li><a href="#">Content</a></li>
                  </ul>
                </div>
                <div className="col-sm-4 col-12 footer-list" >
                  <h5 className="title font-k2d">About us</h5>
                  <ul>
                    <li>
                      <Link href="/about-us-standard">
                        <a>About us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/project-standard">
                        <a>Work Portfolio</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team-standard">
                        <a>Team</a>
                      </Link>
                    </li>
                    <li><a href="#">Plan & Pricing</a>
                    </li>
                    <li>
                      <Link href="/blog-default">
                        <a>News</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-12 footer-list" >
                  <h5 className="title font-k2d">Our Address</h5>
                  <ul>
                    <li><a href="#">companyinfo@mail.com</a></li>
                    <li><a href="#">+ (880) 123456789</a></li>
                  </ul>
                  <ul className="soical-icon">
                    <SocialLinks />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bottom-footer">
          <div className="d-sm-flex align-items-center justify-content-between">
            <ul className="order-sm-2">
              <li><a href="#">Privace & Policy.</a></li>
              <li>
                <Link href="/faq">
                  <a >Faq.</a>
                </Link>
              </li>
              <li><a href="#">Terms.</a></li>
            </ul>
            <p className="order-sm-1">&copy; {new Date().getFullYear()} copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;