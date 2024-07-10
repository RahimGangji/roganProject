import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="one-page-header-one">
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/assets/images/logo/logo13.svg" alt="logo" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;