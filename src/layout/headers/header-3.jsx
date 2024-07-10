import React from 'react';
import Menus from './component/menus';
import { SocialLinks } from '../../components/social-links';
import useSticky from '../../hooks/use-sticky';
import Link from 'next/link';
import { useState } from 'react';
import OffCanvas from '../../components/common/sidebar/off-canvas';

const HeaderThree = () => {
  const { headerSticky } = useSticky();
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <div className={`theme-main-menu theme-menu-three ${headerSticky ? 'fixed' : ''}`}>
        <div className="logo">
          <Link href={'/'}>
            <a>
              <img src="/assets/images/logo/logo4.svg" alt="logo" />
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
              <Menus />
              {/* menus end */}
            </div>
          </div>
        </nav>
        <div className="header-right-widget">
          <ul className="social-icon">
            <SocialLinks />
          </ul>
        </div>
      </div>

      {/* off canvas start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* off canvas end */}
    </>
  );
};

export default HeaderThree;