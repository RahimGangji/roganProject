import Link from 'next/link';
import { useState } from 'react';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import useSticky from '../../hooks/use-sticky';
import Languages from './component/languages';
import Menus from './component/menus';


const Header = ({ error_standard = false }) => {
  const { headerSticky } = useSticky();
  const [isOpen,setIsOpen] = useState();
  return (
    <>
      <div className={`theme-main-menu theme-menu-one ${headerSticky ? 'fixed' : ''}`}>
        <div className="logo">
          <Link href={'/'}>
            <a><img src="/assets/images/logo/logo.svg" alt="logo" /></a>
          </Link>
        </div>
        <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <button className="navbar-toggler navbar-toggler-right" onClick={()=> setIsOpen(true)}>
              <i className="flaticon-setup"></i>
            </button>
            <div className="collapse navbar-collapse">
              {/* menus start */}
              <Menus />
              {/* menus end */}
            </div>
          </div>
        </nav>
        {!error_standard && <div className="header-right-widget">
          <ul>
            <li className="call-us">Call Us <a href="#">+880.762.009</a></li>
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
            <li>
              <Link href="/contact-us-standard">
                <a className="contact-us white-shdw-button">Contact Us
                  <i className="icon flaticon-next"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>}
      </div>

      {/* off canvas start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* off canvas end */}
    </>
  );
};

export default Header;