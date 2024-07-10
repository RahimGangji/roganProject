import React from 'react';
import { Footer, Header } from '../../layout';
import AboutStandard from '../abouts/about-standard';
import Breadcrumb from '../breadcrumb/breadcrumb';
import AboutStandardCounter from '../counters/ab-standard-counter';
import AppsNewsLetter from '../news-letters/apps-news-letter';
import TeamStandard from '../teams-com/team-standard';
import AppsTestimonial from '../testimonials/apps-testimonial';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="About us" subtitle="About us." />
      <AboutStandard/>
      <AboutStandardCounter/>
      <TeamStandard/>
      <AppsTestimonial />
      <AppsNewsLetter ab_stan={true} />
      <Footer />
    </div>
  );
};

export default index;