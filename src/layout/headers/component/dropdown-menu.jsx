import Link from 'next/link';
import React from 'react';

const DropdownMenu = ({ menu }) => {
  const { title, link, submenu } = menu || {};
  return (
    <li className="dropdown-submenu dropdown">
      <Link href={link}>
        <a className="dropdown-item dropdown-toggle" data-toggle="dropdown">{title} 
        {menu?.new && <span>new</span>}</a>
      </Link>
      {submenu && <ul className="dropdown-menu">
        {submenu.map((menu, i) => (
          <React.Fragment key={i}>
            <li>
              <Link href={`/${menu.link}`}>
                <a className="dropdown-item">{menu.title} {menu?.new && <span>new</span>}</a>
              </Link>
            </li>
            {menu.sub_child && <li className="dropdown-submenu dropdown">
              <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">{menu.sub_child.title}</a>
              <ul className="dropdown-menu">
                {menu.sub_child.sub_dropdown.map((sub_item, i) => (
                  <li key={i}>
                    <Link href={`/${sub_item.link}`}>
                      <a className="dropdown-item">{sub_item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>}
          </React.Fragment>
        ))}
      </ul>}
    </li>
  );
};

export default DropdownMenu;