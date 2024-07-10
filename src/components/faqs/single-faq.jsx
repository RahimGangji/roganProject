import React from 'react';

const SingleFaq = ({ show = false, id, title, desc, pr, desc_2, icon,img_1,img_2 }) => {
  return (
    <div className="panel">
      <div className={`panel-heading ${show ? 'active-panel' : ''}`}>
        <h6 className="panel-title">
          <button className={`accordion-button ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse"
            data-bs-target={`#question-${id}`} aria-expanded={show ? 'true' : 'false'}>
            {icon && <i className={icon} aria-hidden="true"></i>} {title}
          </button>
        </h6>
      </div>
      <div id={`question-${id}`} className={`panel-collapse collapse ${show ? 'show' : ''}`}
        data-bs-parent={`#accordion-${pr}`}>
        <div className="panel-body">
          <p>{desc}</p>
          {img_1 && img_2 &&<div className="img-gallery">
            <div className="row">
              <div className="col-lg-6"><img src={`/assets/images/gallery/${img_1}.jpg`} alt="" /></div>
              <div className="col-lg-6"><img src={`/assets/images/gallery/${img_2}.jpg`} alt="" /></div>
            </div>
          </div>}
          {desc_2 && <p>{desc_2}</p>}
        </div>
      </div>
    </div>
  );
};

export default SingleFaq;