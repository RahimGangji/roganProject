import React from 'react';
import { useState } from 'react';
import SidebarCommerce from '../../sidebar/sidebar-ecommerce';
import EcommerceHeroSlider from '../../sliders/ecommerce-hero-slider';
import MenuBar from './menu-bar';


const HomeSixMain = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  return (
    <div id="eCommerce-home">
      <div className="main-page-wrapper">
        <SidebarCommerce isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        <MenuBar setIsSidebarOpen={setIsSidebarOpen} home_7={true}  />
        <EcommerceHeroSlider/>
      </div>
    </div>
  );
};

export default HomeSixMain;