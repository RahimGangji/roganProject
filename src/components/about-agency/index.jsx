import React from 'react';
import { Footer, Header } from '../../layout';
import AboutAgency from '../abouts/about-agency';
import Breadcrumb from '../breadcrumb/breadcrumb';
import ContactBannerOne from '../contact-banners/contact-banner-one';
import AgnCounter from '../counters/agn-counter';
import TeamClassic from '../teams-com/team-classic';
import AppsTestimonial from '../testimonials/apps-testimonial';
import AboutAgnVideoBanner from '../video-action-banner/about-agn-v-banner';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="About us" subtitle="About us." />
      <AboutAgency />
      <AgnCounter />
      <AboutAgnVideoBanner />
      <TeamClassic />
      <AppsTestimonial about_agn={true} />
      <ContactBannerOne />
      <Footer />
    </div>
  );
};

export default index;