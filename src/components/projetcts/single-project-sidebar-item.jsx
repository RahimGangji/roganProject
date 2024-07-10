import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import ImageLightBox from '../common/modals/image-lightbox';

const SingleProjectSidebarItem = ({ item, i, images, ui_gallery = false }) => {
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
      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
        <div className="project-item">
          <div className="img-box">
            <img src={ui_gallery ? item.img_2 : item.img} alt="" />
            <a onClick={() => handleImagePopup(i)} className="zoom" style={{ cursor: 'pointer' }}>
              <img src="/assets/images/icon/zoom-in.svg" alt="" className="svg" />
            </a>
          </div>
          <div className="hover-coco">
            <div>
              <h4 className="title">
                <Link href="/project-details-standard">
                  <a>{item.title}</a>
                </Link>
              </h4>
              <p className='text-capitalize'>{item.category}</p>
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

export default SingleProjectSidebarItem;