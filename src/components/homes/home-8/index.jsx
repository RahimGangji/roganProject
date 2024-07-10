import React, { useEffect } from 'react';
import { FooterFive } from '../../../layout';
import ArchAbout from '../../abouts/arch-about';
import ArchBlog from '../../blogs/arch-blog';
import ArchContact from '../../contact-area/arch-contact';
import ArchProjectGallery from '../../galleries/arch-project-gallery';
import ArchService from '../../services/arch-service';
import ArchHeroSlider from '../../sliders/arch-hero-slider';
import TestimonialArch from '../../testimonials/testimonial-arch';


const HomeTenMain = () => {
  return (
    <div className="main-page-wrapper">
      <ArchHeroSlider/>
      <ArchAbout/>
      <ArchProjectGallery/>
      <ArchService/>
      <TestimonialArch/>
      <ArchBlog/>
      <ArchContact/>
      <FooterFive/>
    </div>
  );
};

export default HomeTenMain;