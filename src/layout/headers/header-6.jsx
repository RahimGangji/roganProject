import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import useSticky from '../../hooks/use-sticky';
import Menus from './component/menus';

const HeaderSix = () => {
  const { headerSticky } = useSticky();
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <div className={`shrt-menu text-dark studio-menu-two theme-main-menu ${headerSticky ? 'fixed' : ''}`}>
        <div className="d-flex align-items-center main-header">
          <div className="logo me-auto">
            <Link href={'/'}>
              <a>
                <img src="/assets/images/logo/logo13.svg" alt="" />
              </a>
            </Link>
          </div>
          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="nav-container">
              <button className="navbar-toggler navbar-toggler-right" onClick={() => setIsOpen(true)}>
                <i className="flaticon-setup"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                {/* menus start */}
                <Menus />
                {/* menus end */}
              </div>
            </div>
          </nav>

          {/* <!-- Search/cart Option/Social icon --> */}
          <div className="widget-container">
            <Link href="/contact-us-standard">
              <a className="contact-us white-shdw-button">Contact Us <i className="icon flaticon-next"></i></a>
            </Link>
          </div>
        </div>
      </div>

      {/* off canvas start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* off canvas end */}
    </>
  );
};

export default HeaderSix;