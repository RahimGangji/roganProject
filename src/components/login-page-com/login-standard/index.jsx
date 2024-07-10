import React from 'react';
import MenuBar from '../../homes/home-7/menu-bar';
import SidebarCommerce from '../../sidebar/sidebar-ecommerce';
import LoginStandardArea from './login-standard-area';

const LoginStandard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="main-page-wrapper">
      <SidebarCommerce isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <MenuBar setIsSidebarOpen={setIsSidebarOpen} />
      <LoginStandardArea />
    </div>
  );
};

export default LoginStandard;