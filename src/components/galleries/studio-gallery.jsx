import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const contents = {
  title:<>Check our latest <span>projects.</span></>,
  sm_text:'Lorem ipsum dolor sit, consectetur some adipiscing elit eiusmod tempor incididu nt ut labore et dol magna aliqua.mollit ani mui laborum.',
  items:[
    {
      img:'/assets/images/portfolio/13.jpg',
      icon:'fa fa-gg',
      icon_color:'cl-one',
      title:'Uber.',
      text:'The best client we work with.'
    },
    {
      img:'/assets/images/portfolio/14.jpg',
      icon:'fa fa-google',
      icon_color:'cl-two',
      title:'Google.',
      text:'We product work with google.',
      mt:'mt-150'
    },
    {
      img:'/assets/images/portfolio/15.jpg',
      icon:'fa fa-linkedin',
      icon_color:'cl-three',
      title:'Invision.',
      text:'We product work with Invision.'
    },
    {
      img:'/assets/images/portfolio/16.jpg',
      icon:'fa fa-dropbox',
      icon_color:'cl-four',
      title:'Dropbox.',
      text:'We product work with Dropbox.'
    },
  ]
}

const {title,sm_text,items} = contents;

const StudioGallery = () => {
  return (
    <>
      <div className="op-project-one">
        <div className="container">
          <div className="upper-heading">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="theme-title-four font-k2d">{title}</h2>
              </div>
              <div className="col-lg-6">
                <p className="font-lato">{sm_text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-wrapper">
          <div className="work-text">work</div>
          <div className="bg-wrapper">
            <div className="container">
              <div id="isotop-gallery-wrapper">
                <div className="grid-sizer"></div>

                <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, }}>
                  <Masonry gutter="68px">
                    {items.map((item,i) => {
                      const {icon,icon_color,img,text,title,mt} = item;
                      return <div key={i} className={`item-content ${mt?mt:''}`}>
                      <div className="img-box">
                        <img src={img} alt="" />
                      </div>
                      <div className="text">
                        <div className={`icon-box ${icon_color}`}>
                          <i className={icon} aria-hidden="true"></i>
                        </div>
                        <h3 className="font-k2d">{title}</h3>
                        <p>{text}</p>
                        <a href="#" className="read-more">+</a>
                      </div>
                    </div>
                    })}
                  </Masonry>
                </ResponsiveMasonry>
              </div>

              <div className="more-text ms-auto">
                <span>Check More.</span>
                <p>We have done more than 150+ project with well know company and still counting</p>
                <a href="#" className="more-button">Check our all work<i className="flaticon-next-1"></i></a>
              </div>
            </div>
            <div className="project-text">projects</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioGallery;