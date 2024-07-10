import React, { useState } from 'react';
import { project_standard } from '../../data';
import { SocialLinksThree } from '../social-links';
import SingleProjectSidebarItem from './single-project-sidebar-item';

const project_items = project_standard;
const all__categories = ['All', ...new Set(project_items.map(category => category.category))];

const ProjectSidebarArea = () => {
  // category
  const [category, setCategory] = useState('All');
  // items
  const [items, setItems] = useState(project_items);
  // images
  const images = items.map(item => item.img);
  // handleCategory
  const handleCategory = (category) => {
    setCategory(category);
    if (category === 'All') {
      setItems(project_items)
    }
    else {
      setItems(project_items.filter(item => item.category === category))
    }
  }

  return (
    <>
      <div className="our-project project-with-sidebar pt-150 pb-100">
        <div className="full-width-container">
          <div className="row">
            <div className="col-lg-9 order-lg-last">
              <h2 className="page-title">Project Gallery</h2>
              <div className="row">
                {items.map((item, index) => (
                 <SingleProjectSidebarItem key={index} i={index} item={item} images={images} />
                ))}
              </div>
              <div className="theme-pagination-one pt-15">
                <ul>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#"><i className="flaticon-next-1"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-8 order-lg-first">
              <div className="gallery-sidebar">
                <div className="sidebar-list mb-80">
                  <h3 className="sidebar-title">Categories</h3>
                  <ul>
                    {all__categories.map((categoryItem, i) => (
                      <li key={i} onClick={() => handleCategory(categoryItem)}
                        className={`${category === categoryItem ? 'active' : ''} text-capitalize`}>
                        <a href="#">{categoryItem}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-icon">
                  <h3 className="sidebar-title">Share it. </h3>
                  <ul>
                    <SocialLinksThree/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSidebarArea;