import React from 'react';
import { FooterTwo, HeaderThree } from '../../../layout';
import AboutMePort from '../../abouts/about-me-port';
import TestimonialPortfolio from '../../testimonials/testimonial-portfolio';
import ProjectPortfolio from '../../projetcts/project-portfolio';
import ServicePortfolio from '../../services/service-portfolio';
import SkillPortfolio from '../../skills/skill-portfolio';
import BannerThree from '../../theme-banners/banner-three';


const HomeThreeMain = () => {

  return (
    <div className="no-scroll-y home-portfo">
      <div className="main-page-wrapper">
        <HeaderThree />
        <BannerThree />
        <AboutMePort />
        <SkillPortfolio />
        <ServicePortfolio />
        <ProjectPortfolio />
        <TestimonialPortfolio />
        <FooterTwo />
      </div>
    </div>
  );
};

export default HomeThreeMain;