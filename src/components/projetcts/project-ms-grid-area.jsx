import Link from 'next/link';
import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { project_masonry_data } from '../../data';
import ImageLightBox from '../common/modals/image-lightbox';

const all_projects = project_masonry_data.filter((arr, index, self) =>
  index === self.findIndex((i) => (i.img === arr.img && i.State === arr.State)))

const all__categories = ['All', ...new Set(project_masonry_data.map(item => item.category))];

const imagePerView = 6;

const ProjectMasonryGridArea = () => {
  const [next, setNext] = useState(imagePerView);
  // category
  const [category, setCategory] = useState('All');
  // items
  const [items, setItems] = useState(all_projects);
  // images
  const images = items.map(item => item.img);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleCategory
  const handleCategory = (category) => {
    setNext(imagePerView)
    setCategory(category);
    if (category === 'All') {
      setItems(all_projects)
    }
    else {
      setItems(project_masonry_data.filter(item => item.category === category).reverse())
    }
  }
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 2)
  }
  return (
    <>
      <div className="our-project project-ms-grid pb-100">
        <div className="inner-container">
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

            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 992: 3 }}>
              <Masonry gutter='50px'>
                {items?.slice(0, next)?.map((item, i) => {
                  const { id, img, title, subtitle } = item;
                  return <div key={id} data-aos="fade-left">
                    <div className="project-item">
                      <div className="img-box">
                        <img src={img} alt="" />
                      </div>
                      <div className="hover-valina">
                        <div>
                          <h4 className="title">
                            <Link href="/project-details-agency">
                              <a>{title}</a>
                            </Link>
                          </h4>
                          <p>{subtitle}</p>
                          <a onClick={() => handleImagePopup(i)} className="zoom" style={{ cursor: 'pointer' }}>
                            <img src="/assets/images/icon/zoom-in.svg" alt="" className="svg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                })}
              </Masonry>
            </ResponsiveMasonry>

          </div>

          {next < items.length && <div className="text-center pt-50" onClick={handleLoadData}>
            <a style={{ cursor: 'pointer' }} className="theme-button-one">Load More</a>
          </div>}
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default ProjectMasonryGridArea;