import Link from 'next/link';
import React from 'react';

const FeatureMenuDrop = () => {
  return (
    <li className="nav-item dropdown position-relative">
      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Features.</a>
      <ul className="dropdown-menu">
        <li className="dropdown-submenu dropdown">
          <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
          <ul className="dropdown-menu">
            <li>
              <Link href="/product-full-width">
                <a className="dropdown-item">Shop Full width</a>
              </Link>
            </li>
            <li>
              <Link href="/product-with-sidebar">
                <a className="dropdown-item">Shop With sidebar</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/features">
            <a className="dropdown-item">Features</a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a className="dropdown-item">Faq</a>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default FeatureMenuDrop;