import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import ImageLightBox from '../common/modals/image-lightbox';

const ProjectStandardSingle = ({ item, i, images }) => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }
  return (
    <>
      <div className="project-item">
        <div className="img-box">
          <img src={item.img} alt="" />
        </div>
        <div className="hover-jojo">
          <div>
            <h4 className="title">
              <a href="#">{item.title}</a>
            </h4>
            <div>
              {item.lists.map((list, i) => <p key={i}>{list}</p>)}
            </div>
            <ul>
              <li>
                <Link href="/project-details-standard">
                  <a><span>+</span></a>
                </Link>
              </li>
              <li><a onClick={() => handleImagePopup(i)} className="zoom" style={{ cursor: 'pointer' }}>
                <i className="fa fa-search" aria-hidden="true"></i></a></li>
            </ul>
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

export default ProjectStandardSingle;