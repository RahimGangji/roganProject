import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'List'} />
      {/* pagination area start */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile text-center">Paginations Left</div>
          <div className="theme-pagination-one pt-15">
            <ul>
              <li><a href="#"><i className="flaticon-back-1"></i></a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#"><i className="flaticon-next-1"></i></a></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile text-center">Paginations Right</div>
          <div className="theme-pagination-one text-right pt-15">
            <ul>
              <li><a href="#"><i className="flaticon-back-1"></i></a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#"><i className="flaticon-next-1"></i></a></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile text-center">Pagination Center</div>
          <div className="theme-pagination-one text-center pt-15">
            <ul>
              <li><a href="#"><i className="flaticon-back-1"></i></a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#"><i className="flaticon-next-1"></i></a></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile text-center">Pagination Center</div>
          <div className="theme-pagination-one text-center pt-15">
            <ul>
              <li><a href="#"><i className="flaticon-back-1"></i></a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li>....</li>
              <li><a href="#">Last</a></li>
              <li><a href="#"><i className="flaticon-next-1"></i></a></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile text-center">Pagination pager</div>
          <div className="pd-footer d-md-flex justify-content-between align-items-center pt-15">
            <a href="#" className="theme-pager prev"><span className="flaticon-back"></span> &nbsp;&nbsp;Previous</a>
            <a href="#" className="theme-pager next">Next &nbsp;&nbsp;<span className="flaticon-next"></span></a>
          </div>
        </div>
      </div>
      {/* pagination area end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;