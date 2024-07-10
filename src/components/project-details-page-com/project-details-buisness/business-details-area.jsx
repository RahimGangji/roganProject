import React from 'react';
import { SocialLinksThree } from '../../social-links';

const BusinessDetailsArea = () => {
  return (
    <>
      <div className="project-details project-details-business pt-150 pb-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="pd-img-box"><img src="/assets/images/gallery/44.jpg" alt="" /></div>
              <div className="pd-img-box"><img src="/assets/images/gallery/45.jpg" alt="" /></div>
              <div className="pd-img-box"><img src="/assets/images/gallery/46.jpg" alt="" /></div>
              <div className="pd-img-box"><img src="/assets/images/gallery/47.jpg" alt="" /></div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="pd-body">
                <p>Here is also the chance that since you have an article archive on the we  subscribers will often read more than just your original articles. Your subscriber interested.</p>
                <div className="project-info">
                  <h3 className="title">Project Details</h3>
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
                <ul className="share-icon">
                  <li>Share:</li>
                  <SocialLinksThree/>
                </ul>
              </div>
            </div>
          </div>
          <div className="pd-footer d-flex justify-content-between align-items-center pt-90">
            <a href="#" className="theme-pager prev"><span className="flaticon-back"></span> &nbsp;&nbsp;Previous</a>
            <a href="#" className="theme-pager next">Next &nbsp;&nbsp;<span className="flaticon-next"></span></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessDetailsArea;