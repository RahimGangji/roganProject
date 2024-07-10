import Link from 'next/link';
import React from 'react';

const MegaMenu = ({ menu_item }) => {
  return (
    <div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
      <h6 className="mega-menu-title">{menu_item.title}</h6>
      <ul className="list-unstyled mega-dropdown-list">
        {menu_item.mega_drop_lists.map((item, i) => (
          <li key={i}>
            <Link href={`/${item.link}`}>
              <a>
                {item.img ? <img src={item.img} alt="" className="svg" /> :
                  <i className={item.icon}></i>}
                {item.title}
                {item?.new && <span>New</span>}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;