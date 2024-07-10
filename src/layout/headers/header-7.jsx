import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import CartDropdown from './component/cart-dropdown';
import CartProList from './component/cart-pro-list';
import CartSubtotal from './component/cart-subtotal';
import HeaderSearch from './component/header-search';
import Menus from './component/menus';

const HeaderSeven = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <div className="shrt-menu shrt-menu-one text-dark">
        <div className="d-flex align-items-center main-header">
          <div className="logo">
            <Link href={'/'}>
              <a>
                <img src="/assets/images/logo/logo11.svg" alt="" />
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

          {/*  Search/cart Option/Social icon  */}
          <div className="widget-container ms-auto">
            <ul className="d-flex align-items-center">
              <li>
                <HeaderSearch />
              </li>
              <li className="cart-action-wrapper">
                <div className="dropdown">
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
                    <img src="/assets/images/icon/icon37.svg" alt="" />
                    <span className="item-count">02</span>
                  </button>
                  {/* cart dropdown start */}
                  <CartDropdown/>
                  {/* cart dropdown end */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* off canvas start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* off canvas end */}
    </>
  );
};

export default HeaderSeven;