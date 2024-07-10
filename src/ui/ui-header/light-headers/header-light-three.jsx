import Link from 'next/link';
import React from 'react';
import ElementMenuDrop from '../component/dropdown-menus/element-drop';
import FeatureMenuDrop from '../component/dropdown-menus/feature-drop';
import HomeMenuDrop from '../component/dropdown-menus/home-drop';
import NewsMenuDrop from '../component/dropdown-menus/news-drop';
import PagesMenuDrop from '../component/dropdown-menus/pages-drop';
import ToggleSearch from '../component/toggle-search';

const HeaderLightThree = ({ dark }) => {
  return (
    <div className={`shrt-menu shrt-menu-three ${dark ? 'dark-bg text-light' : 'light-bg text-dark'} mt-70`}>
      <div className="d-flex justify-content-between align-items-center main-header">
        <div className="logo order-2">
          <Link href="/">
            <a>
              <img src={`/assets/images/logo/logo${dark ? '9' : '7'}.svg`} alt="" />
            </a>
          </Link>
        </div>
        <nav id="mega-menu-holder" className="navbar navbar-expand-lg order-1">
          <div className="nav-container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent3" aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation">
              <i className="flaticon-setup"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent3">
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
        <div className="widget-container order-3">
          <ul className="d-flex align-items-center">
            <ToggleSearch />
            <li>
              <Link href="/contact-us-standard">
                <a className="contact-us white-shdw-button">Contact Us
                  <i className="icon flaticon-next"></i></a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLightThree;