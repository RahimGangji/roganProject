import React from 'react';

const FooterThree = () => {
  return (
    <footer className="op-footer-one">
    <div className="container">
      <h2 className="font-k2d">Work inquiry, Job oportunities or somthing elase? <a href="#">Email us</a></h2>
      <div className="bottom-text">
        <div className="d-lg-flex align-items-center justify-content-between">
          <ul className="clearfix">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Dribbble</a></li>
            <li><a href="#">Linkedin</a></li>
          </ul>
          <p>copyright &copy;{new Date().getFullYear()} Rogan inc.</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default FooterThree;