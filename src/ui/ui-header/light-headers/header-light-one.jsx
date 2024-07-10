import Link from 'next/link';
import React from 'react';
import Languages from '../../../layout/headers/component/languages';
import CartAction from '../component/cart-action';
import ElementMenuDrop from '../component/dropdown-menus/element-drop';
import FeatureMenuDrop from '../component/dropdown-menus/feature-drop';
import HomeMenuDrop from '../component/dropdown-menus/home-drop';
import NewsMenuDrop from '../component/dropdown-menus/news-drop';
import PagesMenuDrop from '../component/dropdown-menus/pages-drop';
import HeaderSearch from '../component/header-search';
import MenuSocial from '../component/menu-social';
import UserProfileDropdown from '../component/user-profile-dropdown';

const HeaderLightOne = ({ dark = false }) => {
  return (
    <div className={`shrt-menu shrt-menu-one ${dark ? 'dark-bg text-light' : 'light-bg text-dark'}`}>
      <div className="top-header d-lg-flex justify-content-between align-items-center">
        <ul className="infoList">
          <li><a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i> company@mail.com</a></li>
          <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i> +880 338 71 915</a></li>
        </ul>
        <ul className="right-widget">
          <li className="language-switcher">
            <div className="dropdown">
              <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown">
                En
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <Languages />
              </div>
            </div>
          </li>
          <li className="user-profile-action">
            <div className="dropdown">
              <button className="dropdown-toggle" data-bs-toggle="dropdown">
                <img src="/assets/images/icon/icon38.svg" alt="" />
                <span>Account</span>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <UserProfileDropdown />
              </div>
            </div>
          </li>
          <li><a href="#" className="theme-button-two">Get a quote</a></li>
        </ul>
      </div>


      <div className="d-flex justify-content-between align-items-center main-header">
        <div className="logo">
          <Link href="/">
            <a>
              <img src={`/assets/images/logo/logo${dark?'9':'7'}.svg`} alt="" />
            </a>
          </Link>
        </div>
        <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
          <div className="nav-container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
              <i className="flaticon-setup"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
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
            <HeaderSearch />
            <CartAction dark={dark} />
            <MenuSocial />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLightOne;