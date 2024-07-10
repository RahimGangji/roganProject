import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import useSticky from '../../hooks/use-sticky';
import Menus from './component/menus';


const HeaderTwo = () => {
  const { headerSticky } = useSticky();
  const [isOpen,setIsOpen] = useState();
  return (
    <>
      <div className={`theme-main-menu theme-menu-two ${headerSticky ? 'fixed' : ''}`}>
        <div className="logo">
          <Link href={'/'}>
            <a>
              <img src="/assets/images/logo/logo3.svg" alt="logo" />
            </a>
          </Link>
        </div>
        <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
          <div className="ms-auto nav-container">
            <button className="navbar-toggler navbar-toggler-right" onClick={()=> setIsOpen(true)}>
              <i className="flaticon-setup"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* menus start */}
              <Menus />
              {/* menus end */}
            </div>
          </div>
        </nav>
        <a href="#" className="quote-button">Get a Quote</a>
      </div>

      {/* off canvas start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTwo;