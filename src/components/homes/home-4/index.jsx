import React from 'react';
import { FooterTwo, HeaderThree } from '../../../layout';
import AboutMePort from '../../abouts/about-me-port';
import TestimonialPortfolio from '../../testimonials/testimonial-portfolio';
import ProjectPortfolio from '../../projetcts/project-portfolio';
import ServicePortfolio from '../../services/service-portfolio';
import SkillPortfolio from '../../skills/skill-portfolio';
import BannerThree from '../../theme-banners/banner-three';
import ParticlesBackground from '../../particles/perticles-background';


const HomeFourMain = () => {
  return (
    <div className="no-scroll-y home-portfo">
      <div className="partical-bg"><div id="particles"></div></div>
      <div className="main-page-wrapper has-particles">
      <ParticlesBackground/>
        <HeaderThree />
        <BannerThree />
        <AboutMePort />
        <SkillPortfolio />
        <ServicePortfolio home_particles={true} />
        <ProjectPortfolio />
        <TestimonialPortfolio />
        <FooterTwo />
      </div>
    </div>
  );
};

export default HomeFourMain;