import React from 'react';
import { SocialLinksThree } from '../../social-links';

const AgencyDetailsArea = () => {
  return (
    <>
      <div className="project-details project-details-agency pt-150 pb-200">
        <div className="container">
          <div className="pd-header d-md-flex justify-content-between align-items-end">
            <h2 className="project-title-one">What features you will Get from App.</h2>
            <ul className="share-icon">
              <li>Share:</li>
              <SocialLinksThree />
            </ul>
          </div>
          <div className="pd-img-box">
            <img src="/assets/images/gallery/42.jpg" alt="" />
          </div>
          <div className="pd-body">
            <div className="row">
              <div className="col-md-8">
                <h6 className="sub-heading">The way Internet advertising has behaved lately, it may well take 50 years to get there.</h6>
                <p>Here is also the chance that since you have an article archive on the we  subscribers will often read more than just your original article. Your subscriber  interested one article but they may find what’s they are looking for browsing through  previous loremarticles. lorem ipsum que dummy text. Remember not to bore your hard earned subscribers. Present them with a problem. Your subscriber  interested one article.</p>
              </div>
              <div className="col-md-4">
                <div className="project-info">
                  <ul>
                    <li>
                      <h6 className="list-title">Date</h6>
                      <span className="date">23 July, 2022</span>
                    </li>
                    <li>
                      <h6 className="list-title">Client Name</h6>
                      <span className="date">Mariona Adisson, USA</span>
                    </li>
                    <li>
                      <h6 className="list-title">Project Type</h6>
                      <span className="date">3D Design, Apartment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pd-footer d-flex justify-content-between align-items-center">
            <a href="#" className="theme-pager prev"><span className="flaticon-back"></span> &nbsp;&nbsp;Previous</a>
            <a href="#" className="theme-pager next">Next &nbsp;&nbsp;<span className="flaticon-next"></span></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgencyDetailsArea;