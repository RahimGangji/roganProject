import React from 'react';
import MenuBar from '../../homes/home-7/menu-bar';
import SidebarCommerce from '../../sidebar/sidebar-ecommerce';
import SignUpMinimalArea from './sign-up-minimal-area';

const SignUpMinimal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="main-page-wrapper">
      <SidebarCommerce isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <MenuBar setIsSidebarOpen={setIsSidebarOpen} />
      <SignUpMinimalArea />
    </div>
  );
};

export default SignUpMinimal;