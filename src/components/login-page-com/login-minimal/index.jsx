import React from 'react';
import MenuBar from '../../homes/home-7/menu-bar';
import SidebarCommerce from '../../sidebar/sidebar-ecommerce';
import LoginMinimalArea from './login-minimal-area';

const LoginMinimal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="main-page-wrapper">
      <SidebarCommerce isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <MenuBar setIsSidebarOpen={setIsSidebarOpen} />
      <LoginMinimalArea/>
    </div>
  );
};

export default LoginMinimal;