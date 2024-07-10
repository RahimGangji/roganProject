import Link from 'next/link';
import React from 'react';
import CartAction from '../component/cart-action';
import ElementMenuDrop from '../component/dropdown-menus/element-drop';
import FeatureMenuDrop from '../component/dropdown-menus/feature-drop';
import HomeMenuDrop from '../component/dropdown-menus/home-drop';
import NewsMenuDrop from '../component/dropdown-menus/news-drop';
import PagesMenuDrop from '../component/dropdown-menus/pages-drop';
import ToggleSearch from '../component/toggle-search';

const HeaderLightFive = ({ dark }) => {
  return (
    <>
      <div className={`shrt-menu shrt-menu-five ${dark ? 'dark-bg text-light' : 'light-bg text-dark'} mt-70`}>
        <div className="top-header">
          <div className="container d-md-flex justify-content-between align-items-center">
            <ul className="infoList">
              <li><a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i> company@mail.com</a></li>
              <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i> +880 338 71 915</a></li>
            </ul>
            <ul className="right-widget">
              <li className="menu-social-icon">
                <ul className="d-flex">
                  <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                </ul>
              </li>
              <li><a href="#" className="theme-button-two">Get a quote</a></li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="d-flex align-items-center main-header">
            <div className="logo me-auto">
              <Link href="/">
                <a>
                  <img src={`/assets/images/logo/logo${dark ? '9' : '7'}.svg`} alt="" />
                </a>
              </Link>
            </div>
            <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
              <div className="nav-container">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent5" aria-controls="navbarSupportedContent5" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="flaticon-setup"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent5">
                  <ul className="navbar-nav">
                    {/* home dropdown menu start */}
                    <HomeMenuDrop />
                    {/* home dropdown menu end */}

                    {/* pages dropdown menu start */}
                    <PagesMenuDrop />
                    {/* pages dropdown menu end */}

                    {/* Feature dropdown menu start */}
                    <FeatureMenuDrop />
                    {/* Feature dropdown menu end */}

                    {/* element dropdown menu start */}
                    <ElementMenuDrop />
                    {/* element dropdown menu end */}

                    {/* news dropdown menu start */}
                    <NewsMenuDrop />
                    {/* news dropdown menu end */}
                  </ul>
                </div>
              </div>
            </nav>

            {/* <!-- Search/cart Option/Social icon --> */}
            <div className="widget-container">
              <ul className="d-flex align-items-center">
                <ToggleSearch />
                <CartAction dark={dark} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLightFive;