import Link from 'next/link';
import React, { useState } from 'react';
import ImageLightBox from '../common/modals/image-lightbox';

const project_agency_data = [
  {
    id: 1,
    img: '/assets/images/gallery/55.jpg',
    title: <>Lonely <span>Steve</span></>,
    subtitle: 'Rogan dances in the deep dark',
    category: 'interior',
  },
  {
    id: 2,
    img: '/assets/images/gallery/56.jpg',
    title: <>Lonely <span>Steve</span></>,
    subtitle: 'Rogan dances in the deep dark',
    category: 'exterior',
  },
  {
    id: 3,
    img: '/assets/images/gallery/57.jpg',
    title: <>Lonely <span>Steve</span></>,
    subtitle: 'Rogan dances in the deep dark',
    category: 'building',
  },
]

const all_categories = ['All', ...new Set(project_agency_data.map(item => item.category))];

const images = project_agency_data.map((item) => item.img)

const ArchProjectGallery = () => {
  const [category, setCategory] = useState('All');
  const [projectItems, setProjectItems] = useState(project_agency_data);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleCategory
  const handleCategory = (category) => {
    setCategory(category)
    if (category === 'All') {
      setProjectItems(project_agency_data)
    }
    else {
      setProjectItems(project_agency_data.filter(item => item.category === category))
    }
  };

  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }

  return (
    <>
      <div className="arch-project-gallery">
        <div className="container">
          <div className="d-lg-flex justify-content-between align-items-center">
            <div className="theme-title-one arch-title">
              <div className="upper-title">Project</div>
              <h2 className="main-title">Project Gallery.</h2>
            </div>

            <ul className="isotop-menu-wrapper">
              {all_categories.map((cate, i) => (
                <li key={i} onClick={() => handleCategory(cate)}
                  className={`${cate === category ? 'is-checked' : ''} text-capitalize`}>
                  {cate}
                </li>
              ))}
            </ul>
            <Link href="/project-standard">
              <a className="line-button-three">View Gallery</a>
            </Link>
          </div>
        </div>

        <div className="inner-container our-project">
          {/* <!-- Project Image --> */}
          <div id="isotop-gallery-wrapper">
            <div className="grid-sizer"></div>
            <div className="row">
              {projectItems.map((item, i) => (
                <div key={item.id} className="col-lg-4">
                  <div className="project-item">
                    <div className="img-box"><img src={item.img} alt="" /></div>
                    <div className="hover-valina">
                      <div>
                        <h4 className="title">
                          <Link href="/project-details-agency">
                            <a>Lonely <span>Steve</span></a>
                          </Link>
                        </h4>
                        <p>Rogan dances in the deep dark</p>
                        <button onClick={() => handleImagePopup(i)}
                          className="zoom fancybox" data-fancybox="gallery">
                          <img src="/assets/images/icon/zoom-in.svg" alt="" className="svg" />
                        </button>
                      </div>
                    </div>
                  </div>
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

export default ArchProjectGallery;