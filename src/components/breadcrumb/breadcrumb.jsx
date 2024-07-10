import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({title,subtitle,white_bg=false}) => {
  return (
    <div className={`solid-inner-banner ${white_bg?'white-bg':''}`}>
      <h2 className="page-title">{title}</h2>
      {!white_bg && <ul className="page-breadcrumbs">
        <li>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
        <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
        <li>{subtitle}</li>
      </ul>}
    </div>
  );
};

export default Breadcrumb;