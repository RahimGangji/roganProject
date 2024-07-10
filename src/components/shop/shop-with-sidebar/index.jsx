import React from 'react';
import { useState } from 'react';
import MenuBar from '../../homes/home-7/menu-bar';
import SidebarCommerce from '../../sidebar/sidebar-ecommerce';
import ProductArea from './product-area';

const ProductWithSidebar = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  return (
    <div className="main-page-wrapper">
      <SidebarCommerce isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <MenuBar setIsSidebarOpen={setIsSidebarOpen} />
      <ProductArea/>
    </div>
  );
};

export default ProductWithSidebar;