import Link from 'next/link';
import React from 'react';

const HomeMenuDrop = () => {
  return (
    <li className="nav-item dropdown position-relative">
      <Link href="/">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown">Home.</a>
      </Link>
      <ul className="dropdown-menu">
        <li>
          <Link href="/">
            <a className="dropdown-item">Home Agency</a>
          </Link>
        </li>
        <li>
          <Link href="/home-2">
            <a className="dropdown-item">Home SEO</a>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default HomeMenuDrop;