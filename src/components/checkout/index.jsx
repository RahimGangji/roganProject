import React, { useState } from 'react';
import MenuBar from '../homes/home-7/menu-bar';
import SidebarCommerce from '../sidebar/sidebar-ecommerce';
import CheckoutArea from './checkout-area';

const CheckoutMain = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  return (
      <div className="main-page-wrapper">
        <SidebarCommerce isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        <MenuBar setIsSidebarOpen={setIsSidebarOpen}/>
        <CheckoutArea/>
      </div>
  );
};

export default CheckoutMain;