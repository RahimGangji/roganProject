import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import useSticky from '../../hooks/use-sticky';
import Languages from './component/languages';
import Menus from './component/menus';

const HeaderFive = () => {
  const { headerSticky } = useSticky();
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <div className={`theme-main-menu theme-menu-one d-align-item color-white app-menu 
      ${headerSticky ? 'fixed' : ''}`}>
        <div className="logo">
          <Link href={'/'}>
            <a>
              <img src="/assets/images/logo/logo3.svg" alt="" />
            </a>
          </Link>
        </div>
        <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
          <div className="ms-auto nav-container">
            <button className="navbar-toggler navbar-toggler-right" onClick={() => setIsOpen(true)}>
              <i className="flaticon-setup"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* menus start */}
              <Menus btn={true} btn_style='2' />
              {/* menus end */}
            </div>
          </div>
        </nav>
        <div className="header-right-widget">
          <ul>
            <li className="call-us"><a href="#">+880.762.009</a></li>
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
          </ul>
        </div>
      </div>

      {/* off canvas start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* off canvas end */}
    </>
  );
};

export default HeaderFive;