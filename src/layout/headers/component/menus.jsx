import Link from 'next/link';
import React from 'react';
import menu_data from '../data/menu-data';
import DropdownMenu from './dropdown-menu';
import HomeNav from './home-navs';
import MegaMenu from './mega-menu';

const { pages, features, mega_elements, news } = menu_data;

const Menus = ({ btn, btn_style }) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item active dropdown">
        <Link href="/">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Home.</a>
        </Link>
        <ul className="dropdown-menu mega-container">
          {/* home navs start */}
          <HomeNav />
          {/* home navs end */}
        </ul>
      </li>
      <li className="nav-item dropdown position-relative">
        <Link href={pages.link}>
          <a className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown">{pages.title}</a>
        </Link>
        <ul className="dropdown-menu">
          {pages.dropdown.map((item, i) => (
            <DropdownMenu key={i} menu={item} />
          ))}
        </ul>
      </li>
      <li className="nav-item dropdown position-relative">
        <Link href={features.link}>
          <a className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown">{features.title}</a>
        </Link>
        <ul className="dropdown-menu">
          {features.dropdown.map((item, i) => (
            <DropdownMenu key={i} menu={item} />
          ))}
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">elements.</a>
        <ul className="dropdown-menu mega-container">
          <li>
            <div className="clearfix">
              <div className="row">
                {mega_elements.map((item, i) => (
                  <MegaMenu key={i} menu_item={item} />
                ))}

              </div>
            </div>
          </li>
        </ul>
      </li>

      <li className="nav-item dropdown position-relative">
        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">{news.title}</a>
        <ul className="dropdown-menu">
          {news.dropdown.map((item, i) => (
            <DropdownMenu key={i} menu={item} />
          ))}
        </ul>
      </li>

      {btn && <li className={`${btn_style === '2' ? 'login-button-two' : 'login-button'}`}>
        <Link href="/login-standard">
          <a>Login</a>
        </Link>
      </li>}
    </ul>
  );
};

export default Menus;