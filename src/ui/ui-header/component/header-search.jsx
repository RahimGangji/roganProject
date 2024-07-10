import React from 'react';

const HeaderSearch = () => {
  return (
    <li>
      <form action="#" className="header-search">
        <input type="text" placeholder="Search here" />
        <button className="icon"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    </li>
  );
};

export default HeaderSearch;