import Link from 'next/link';
import React from 'react';

const ElementMenuDrop = () => {
  return (
    <li className="nav-item active dropdown">
      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">elements.</a>
      <ul className="dropdown-menu mega-container">
        <li>
          <div className="clearfix">
            <div className="row">
              <div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
                <h6 className="mega-menu-title">Element 1</h6>
                <ul className="list-unstyled mega-dropdown-list">
                  <li>
                    <Link href="/ui-testimonial">
                      <a>
                        <img src="/assets/images/menu-icon/icon1.svg" alt="" className="svg" />Testimonials
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-pricing-table">
                      <a>
                        <img src="/assets/images/menu-icon/icon2.svg" alt="" className="svg" />Pricing Plan
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
                <h6 className="mega-menu-title">Element 2</h6>
                <ul className="list-unstyled mega-dropdown-list">
                  <li>
                    <Link href="/ui-accordion">
                      <a>
                        <img src="/assets/images/menu-icon/icon7.svg" alt="" className="svg" />Accordion
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-alert">
                      <a>
                        <img src="/assets/images/menu-icon/icon8.svg" alt="" className="svg" />Alert
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
                <h6 className="mega-menu-title">Element 3</h6>
                <ul className="list-unstyled mega-dropdown-list">
                  <li>
                    <Link href="/ui-blog-post">
                      <a>
                        <img src="/assets/images/menu-icon/icon12.svg" alt="" className="svg" />Post
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-breadcrumbs">
                      <a>
                        <img src="/assets/images/menu-icon/icon13.svg" alt="" className="svg" />Breadcrumbs
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
                <h6 className="mega-menu-title">Element 4</h6>
                <ul className="list-unstyled mega-dropdown-list">
                  <li>
                    <Link href="/ui-color">
                      <a>
                        <img src="/assets/images/menu-icon/icon17.svg" alt="" className="svg" />Color
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-contact-form">
                      <a>
                        <img src="/assets/images/menu-icon/icon18.svg" alt="" className="svg" />Contact Form
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default ElementMenuDrop;