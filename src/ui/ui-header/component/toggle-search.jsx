import React from 'react';
import { useState } from 'react';

const ToggleSearch = () => {
  const [isShow,setIsShow] = useState(false);
  return (
    <li>
      <form className={`header-search toggle-search ${isShow?'show':''}`}>
        <input type="text" placeholder="Search here" />
        <i onClick={()=> setIsShow(!isShow)} className="fa fa-search icon" aria-hidden="true"></i>
      </form>
    </li>
  );
};

export default ToggleSearch;