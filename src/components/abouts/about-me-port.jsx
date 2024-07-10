import React, { useState } from 'react';
import { InView } from "react-intersection-observer";

function Tab({ active = false, id, title }) {
  return <li className="nav-item" role="presentation">
    <button className={`nav-link ${active ? 'active' : ''}`} id={`${id}-tab`} data-bs-toggle="tab"
      data-bs-target={`#${id}`} type="button" role="tab" aria-controls={`${id}`}
      aria-selected={active ? 'true' : 'false'} tabIndex="-1">
      <span>{title}.</span></button>
  </li>
}

const AboutMePort = () => {
  const [imageView, setImageView] = useState(false);
  const [tabBorder, setTabBorder] = useState(false);
  return (
    <>
      <div className="about-me-portfo section-portfo">
        <div className="container">
          <div className="inner-content">
            <h2 className="theme-title-two">About me<span>.</span></h2>
            <InView as="div" onChange={(inView, entry) => setImageView(inView)}
              className={`img-box ${imageView ? 'show-pr' : 'hide-pr'}`}>
              <img src="/assets/images/home/9.jpg" alt="" />
            </InView>
            <div className="profile-tab">
              {/* <!-- Nav tabs --> */}
              <InView as="ul" className={`nav nav-tabs ${tabBorder ? 'show-pr' : 'hide-pr'}`}
                onChange={(inView, entry) => setTabBorder(inView)} role="tablist">
                <Tab active={true} id="myself" title="Myself" />
                <Tab id="education" title="Education" />
                <Tab id="skill" title="Skill" />
              </InView>

              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                <div id="myself" className="tab-pane active" role="tabpanel" aria-labelledby='myself-tab'>
                  <p>Hello! I’m <span>Naim Ahmed</span> a self-taught & <span>award winning Digital Designer & Developer</span> with over <span>five years work experience</span>. I started in my children’s room, got pro at renowned digital agencies <span>akij co</span> and nork <span>blue lebel</span>. Now I’m based in Dhaka, Bangladesh, working for <span>Apple</span> fredmansky and enjoying the life in the countryside.</p>
                </div>
                <div id="education" className="tab-pane fade" role="tabpanel" aria-labelledby='education-tab'>
                  <p><b>STATE UNIVERSITY</b>, State College, Pa. <span>Bachelor of Arts in Advertising;</span> Minor: Spanish; GPA: 3.35, anticipated in May 2014</p>
                  <div className="tag">Notable Accomplishments:</div>
                  <ul>
                    <li>{"Dean's"} List: Fall 2011, Spring 2018</li>
                    <li>Awarded Best Advertising Campaign Proposal for Health Committee, State University, Spring 2013</li>
                  </ul>
                </div>
                <div id="skill" className="tab-pane fade" role="tabpanel" aria-labelledby='skill-tab'>
                  <p>Sed ut perspiciatis <span>unde omnis iste natus error sit</span> voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  <ul className="skill-list">
                    <li>Web Designing _<span>HTML/CSS</span></li>
                    <li>Graphic Design. _<span>UI/UX</span></li>
                    <li>Web Development. _<span>REACT JS/NODE JS</span></li>
                    <li>Application Dev. _<span>ANDROID/ IOS</span></li>
                  </ul>
                </div>
              </div>

              <ul className="button-group">
                <li><a href="#" className="download-button">Download CV.</a></li>
                <li><a href="#" className="hire-button">Hire Me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMePort;