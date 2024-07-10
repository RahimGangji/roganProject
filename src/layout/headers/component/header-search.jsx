import React from 'react';

const HeaderSearch = () => {
  return (
    <form onSubmit={e => e.preventDefault()} className="header-search">
      <input type="text" placeholder="Search here" />
      <button className="icon"><i className="fa fa-search" aria-hidden="true"></i></button>
    </form>
  );
};

export default HeaderSearch;