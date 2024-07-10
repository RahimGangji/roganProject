import React from 'react';
import { SocialLinks } from '../../social-links';

const BannerRight = ({setIsSidebarOpen}) => {
  return (
    <div className="op-banner-one">
      <div className="op-menu-one">
        <ul className="ct-language__dropdown">
          <li><a href="#" className="lang-en lang-select" data-lang="en">En.</a></li>
          <li><a href="#" className="lang-ru lang-select" data-lang="ru">Rn</a></li>
        </ul>
        <ul className="social-icon">
          <SocialLinks/>
        </ul>
        <button className="op-menu-button sidebar-menu-open" onClick={()=> setIsSidebarOpen(true)}>
          <img src="/assets/images/icon/icon68.svg" alt="" />
        </button>
      </div>

      <div className="d-lg-flex ">
        <h2 className="font-k2d main-title">We’r highly <br /> <span>Expert & Idea</span> <br />Builder.</h2>
        <div className="banner-form">
          <form onSubmit={e => e.preventDefault()}>
            <div className="input-group-wrapper">
              <input type="text" placeholder="Your Name*" />
              <input type="email" placeholder="Email Address*" />
              <textarea placeholder="Message*"></textarea>
            </div>
            <button>Get A Quote</button>
          </form>
        </div>
      </div>
      <div className="credit-tag">
        <p className="font-k2d"><span>Design with love</span> <br />by Naim</p>
      </div>
    </div>
  );
};

export default BannerRight;