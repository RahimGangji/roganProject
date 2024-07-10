import React from 'react';

function ImgBox({col,img,bx}) {
  return (
    <div className={`col-${col} col-md-4 col-6`}>
    <div className={`img-box bx-${bx}`}>
      <a href="#"><img src={`/assets/images/logo/p-${img}.png`} alt="" /></a>
    </div>
  </div>
  )
}

const StudioPartners = () => {
  return (
    <>
      <div className="op-partner-section-one">
        <div className="container">
          <div className="row">
            <ImgBox col="lg-3" bx="a" img="1" />
            <ImgBox col="lg-2" bx="b" img="2" />
            <ImgBox col="lg-3" bx="c" img="3" />
            <ImgBox col="xl-2 col-lg-3" bx="d" img="4" />
            <ImgBox col="xl-2 col-lg-3" bx="e" img="5" />
            <ImgBox col="xl-4 col-lg-2" bx="f" img="6" />
            <ImgBox col="xl-2 col-lg-3" bx="g" img="7" />
            <ImgBox col="xl-3 col-lg-3" bx="h" img="8" />
            <ImgBox col="xl-3 col-lg-11" bx="i" img="9" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioPartners;