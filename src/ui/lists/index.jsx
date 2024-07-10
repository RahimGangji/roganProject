import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'List'} />
      {/* list area start */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">List</div>

          <div className="row">
            <div className="col-xl-4 col-md-6">
              <ul className="theme-list-item pb-70">
                <li><i className="fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
              </ul>
            </div>

            <div className="col-xl-4 col-md-6">
              <ul className="theme-list-item pb-70">
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
              </ul>
            </div>

            <div className="col-xl-4 col-md-6">
              <ul className="theme-list-item pb-70">
                <li><span><b>1.</b></span> Quo fastidii perpetua reprimique impetus</li>
                <li><span><b>2.</b></span> Quo fastidii perpetua reprimique impetus</li>
                <li><span><b>3.</b></span> Quo fastidii perpetua reprimique impetus</li>
                <li><span><b>4.</b></span> Quo fastidii perpetua reprimique impetus</li>
                <li><span><b>5.</b></span> Quo fastidii perpetua reprimique impetus</li>
              </ul>
            </div>

            <div className="col-xl-4 col-md-6">
              <ul className="theme-list-item pb-70">
                <li><i className="fa fa-chevron-right" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-chevron-right" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-chevron-right" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-chevron-right" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="fa fa-chevron-right" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
              </ul>
            </div>

            <div className="col-xl-4 col-md-6">
              <ul className="theme-list-item pb-70">
                <li><span className="color-style"><b>1.</b></span> Quo fastidii perpetua reprimique impetus</li>
                <li><span className="color-style"><b>2.</b></span> Quo fastidii perpetua reprimique impetus</li>
                <li><span className="color-style"><b>3.</b></span> Quo fastidii perpetua reprimique impetus</li>
                <li><span className="color-style"><b>4.</b></span> Quo fastidii perpetua reprimique impetus</li>
                <li><span className="color-style"><b>5.</b></span> Quo fastidii perpetua reprimique impetus</li>
              </ul>
            </div>

            <div className="col-xl-4 col-md-6">
              <ul className="theme-list-item pb-70">
                <li><i className="color-style fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="color-style fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="color-style fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="color-style fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
                <li><i className="color-style fa fa-check" aria-hidden="true"></i> Quo fastidii perpetua reprimique impetus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* list area end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;