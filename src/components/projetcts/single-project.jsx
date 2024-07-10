import React from 'react';
import { useState } from 'react';
import ImageLightBox from '../common/modals/image-lightbox';

const SingleProject = ({ item, index, gallery_images }) => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i)
    setOpen(true)
  }
  return (
    <>
      <div className="isotop-item marketing col-lg-3 col-md-6">
        <div className="effect-zoe">
          <img src={item.img} alt="image" />
          <div className="inner-caption">
            <h2><a href="#">{item.title}</a></h2>
            <p className="icon-links">
              <button className="icon" onClick={() => handleImagePopup(index)}>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </button>
              <button href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
            </p>
            <p className="description">{item.desc}</p>
          </div>
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={gallery_images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default SingleProject;