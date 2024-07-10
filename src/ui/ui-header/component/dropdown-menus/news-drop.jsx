import Link from 'next/link';
import React from 'react';

const NewsMenuDrop = () => {
  return (
    <li className="nav-item dropdown position-relative">
      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">News.</a>
      <ul className="dropdown-menu">
        <li>
          <Link href="/blog-default">
            <a className="dropdown-item">Blog default</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-filter">
            <a className="dropdown-item">Blog filter</a>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default NewsMenuDrop;