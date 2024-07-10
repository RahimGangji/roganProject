import React, { useState } from 'react';
import { project_standard } from '../../data';
import ImageLightBox from '../common/modals/image-lightbox';
import ProjectStandardSingle from './project-standard-single';

const project_items = project_standard;
const all__categories = ['All', ...new Set(project_items.map(category => category.category))];

const ProjectFullWidthArea = () => {
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
      <div className="our-project pt-150">
        <ul className="isotop-menu-wrapper pb-100">
          {all__categories.map((categoryItem, i) => (
            <li key={i} onClick={() => handleCategory(categoryItem)}
              className={`${category === categoryItem ? 'is-checked' : ''} text-capitalize`}>
              {categoryItem}
            </li>
          ))}
        </ul>


        <div id="isotop-gallery-wrapper">
          <div className="grid-sizer"></div>
          <div className="row">
            {items.map((item, index) => (
              <div key={item.id} className='isotop-item col-lg-4 col-md-6 p-0'>
                <ProjectStandardSingle item={item} i={index} images={images} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectFullWidthArea;