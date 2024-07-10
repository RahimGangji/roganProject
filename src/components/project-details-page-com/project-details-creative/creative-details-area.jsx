import React from 'react';
import { SocialLinksThree } from '../../social-links';

const CreativeDetailsArea = () => {
  return (
    <>
      <div className="project-details project-details-creative pb-200">
        <div className="pd-banner" style={{backgroundImage:'url(/assets/images/gallery/48.jpg)'}}>
          <div className="container">
            <div className="container-inner"><h2 className="project-title-one">What features you will Get from App.</h2></div>
          </div>
        </div>
        <div className="container">
          <div className="container-wrapper">
            <div className="pd-body">
              <div className="row">
                <div className="col-lg-8 order-lg-last">
                  <div className="side-block">
                    <h5 className="block-title">Goal</h5>
                    <p>Here is also the chance that since you have an article archive on the we  subscribers will often read more than just.</p>
                  </div>
                  <div className="side-block">
                    <h5 className="block-title">Challenge</h5>
                    <p>Here is also the chance that since you have an article archive on the we  subscribers will often read more than just your original articles. Your subscriber interested lorem ipsum.</p>
                  </div>
                </div>
                <div className="col-lg-4 order-lg-first">
                  <div className="project-info">
                    <ul>
                      <li>
                        <h6 className="list-title">Project Type</h6>
                        <span className="date">3D Design, Apartment</span>
                      </li>
                      <li>
                        <h6 className="list-title">Date</h6>
                        <span className="date">23 July, 2022</span>
                      </li>
                      <li>
                        <h6 className="list-title">Client Name</h6>
                        <span className="date">Mariona Adisson, USA</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd-footer d-md-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between">
                <a href="#" className="theme-pager prev"><span className="flaticon-back"></span> &nbsp;&nbsp;Previous</a>
                <a href="#" className="theme-pager next">Next &nbsp;&nbsp;<span className="flaticon-next"></span></a>
              </div>
              <ul className="share-icon">
                <li>Share:</li>
                <SocialLinksThree/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeDetailsArea;