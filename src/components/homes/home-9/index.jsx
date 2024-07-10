import React, { useState } from 'react';
import FooterThree from '../../../layout/footers/footer-3';
import OpAboutUs from '../../abouts/op-about-us';
import StudioGallery from '../../galleries/studio-gallery';
import ServiceStudio from '../../services/service-studio';
import SidebarCommerce from '../../sidebar/sidebar-ecommerce';
import StudioTestimonial from '../../testimonials/studio-testimonial';
import BannerSix from '../../theme-banners/banner-six';
import StudioPartners from '../../trusted-pertners/studio-partners';
import BannerRight from './banner-right';
import Header from './header';


const HomeNineMain = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  return (
    <div className="main-page-wrapper">
      <SidebarCommerce home_9={true} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Header />
      <BannerRight setIsSidebarOpen={setIsSidebarOpen} />
      <BannerSix />
      <OpAboutUs />
      <StudioGallery />
      <ServiceStudio />
      <StudioTestimonial />
      <StudioPartners />
      <FooterThree />
    </div>
  );
};

export default HomeNineMain;