import React, { useState } from 'react';
import { project_standard } from '../../data';
import ImageLightBox from '../common/modals/image-lightbox';
import ProjectStandardSingle from './project-standard-single';


const project_items = project_standard;
const all__categories = ['All', ...new Set(project_items.map(category => category.category))];

const ProjectStandardArea = () => {
  // category
  const [category, setCategory] = useState('All');
  // items
  const [items, setItems] = useState(project_items);
  // images
  const images = items.map(item => item.img);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
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
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }
  return (
    <>
      <div className="our-project project-standard pt-150 mb-170">
        <div className="container">
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
              {items.slice(0, 8).map((item, index) => (
                <div key={item.id} className='isotop-item col-lg-6'>
                  <ProjectStandardSingle item={item} i={index} handleImagePopup={handleImagePopup} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default ProjectStandardArea;