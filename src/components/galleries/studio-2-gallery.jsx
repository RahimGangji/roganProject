import Link from 'next/link';
import React from 'react';
import ImageLightBox from '../common/modals/image-lightbox';

const images = [
  '/assets/images/portfolio/17.jpg',
  '/assets/images/portfolio/18.jpg',
  '/assets/images/portfolio/19.jpg',
]

const StudioTwoGallery = () => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = React.useState(null);
  // image open state
  const [open, setOpen] = React.useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }

  function ProjectHolder({ img, sm_text, title, index }) {
    return (
      <div className="studio-project-holder">
        <button onClick={() => handleImagePopup(index)} className="fancybox">
          <img src={`/assets/images/portfolio/${img}.jpg`} alt="" />
        </button>
        <div className="text">
          <p>{sm_text}</p>
          <h2 className="font-k2d">{title}</h2>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="studio-project-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="theme-title-one studio-title">
                <div className="upper-title">Projects</div>
                <h2 className="main-title font-k2d">Our recently projects.</h2>
              </div>

              <ProjectHolder img="17" sm_text="Tesla" title="Mobile App UI & UX Design." index={0} />

              <div className="text-block scree-lg">
                <h3 className="font-k2d">We have done more than 150+ project with well know company & still counting</h3>
                <p>But you can still ask me if you’d like to see more <br />projects I have done in past.</p>
                <Link href="/project-standard">
                  <a className="white-shdw-button">Check our all work <i className="icon flaticon-next"></i></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <ProjectHolder img="18" sm_text="Uber" title="Interface Design & Branding." index={1} />
              <ProjectHolder img="19" sm_text="Google" title="Interface Design & Branding." index={1} />
            </div>
          </div>

          <div className="text-block scree-mobile">
            <h3 className="font-k2d">We have done more than 150+ project with well know company & still counting</h3>
            <p>But you can still ask me if you’d like to see more <br />projects I have done in past.</p>
            <Link href="/project-standard">
              <a className="white-shdw-button">Check our all work <i className="icon flaticon-next"></i></a>
            </Link>
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

export default StudioTwoGallery;