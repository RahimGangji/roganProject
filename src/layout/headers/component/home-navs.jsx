import Link from 'next/link';
import React from 'react';
import menu_data from '../data/menu-data';

const HomeNav = () => {
  return (
    <li>
      <div className="clearfix">
        <div className="row">
          {menu_data.homes_data.map((menu, i) => {
            const { img, link, title } = menu;
            return <div key={i} className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
              <Link href={`${link}`}>
                <a className="img-box">
                  <span className="img"><img src={img} alt="menu img" /></span>
                  <span className="text">{title}</span>
                </a>
              </Link>
            </div>
          })}
          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3 mr-auto">
            <a href="#" className="img-box">
              <span className="img"><img src="/assets/images/menu-img/cs.jpg" alt="" /></span>
              <span className="text">Coming Soon</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HomeNav;