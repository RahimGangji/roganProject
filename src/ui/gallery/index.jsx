import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import ProjectMinimalArea from '../../components/projetcts/project-minimal-area';
import ProjectStandardSingle from '../../components/projetcts/project-standard-single';
import SingleProject from '../../components/projetcts/single-project';
import SingleProjectSidebarItem from '../../components/projetcts/single-project-sidebar-item';
import { project_standard } from '../../data';
import { Footer, Header } from '../../layout';


const gallery_one_data = [
  { img: '/assets/images/portfolio/5.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.' },
  { img: '/assets/images/portfolio/6.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.' },
  { img: '/assets/images/portfolio/7.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.' },
  { img: '/assets/images/portfolio/8.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.' },
]

const gallery_images = gallery_one_data.map(item => item.img);
const project_standard_items = project_standard.slice(0, 3);
const project_standard_items_two = project_standard.slice(0, 3);
const images = project_standard_items.map(item => item.img);
const images_two = project_standard_items_two.map(item => item.img_2);

const index = () => {
  return (
    <>
      <div className="main-page-wrapper">
        <Header />
        <BreadcrumbTwo title={'Gallery'} spacing={false} />
        {/* gallery one start */}
        <div className="element-section mb-200">
          <div className="section-portfo our-project-portfo m0">
            <div id="isotop-gallery-wrapper">
              <div className="grid-sizer"></div>
              <div className="row">
                {gallery_one_data.map((item, i) => (
                  <SingleProject key={i} item={item} index={i} gallery_images={gallery_images} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* gallery one end */}

        {/* gallery two start */}
        <div className="element-section mb-200">
          <div className="our-project">
            <div id="isotop-gallery-wrapper">
              <div className="grid-sizer"></div>
              <div className="row">
                {project_standard_items.map((item, index) => (
                  <div key={item.id} className='isotop-item col-lg-4 col-md-6 p-0' data-aos="fade-left">
                    <ProjectStandardSingle item={item} i={index} images={images} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* gallery two end */}

        {/* gallery three start */}
        <div className="element-section mb-200">
          <ProjectMinimalArea ui_gallery={true} />
        </div>
        {/* gallery three end */}

        {/* gallery four start */}
        <div className="element-section mb-200">
          <div className="our-project project-with-sidebar">
            <div className="container">
              <div className="row">
                {project_standard_items_two.map((item, index) => (
                  <SingleProjectSidebarItem key={index} i={index} item={item} 
                  images={images_two} ui_gallery={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* gallery four end */}
        <Footer top_border={true} />
      </div>
    </>
  );
};

export default index;