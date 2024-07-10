import Link from 'next/link';
import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Breadcrumbs'} />
      {/* solid banner style start */}

      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Breadcrumbs One</div>
        </div>
        <div className="solid-inner-banner">
          <h2 className="page-title">Breadcrumbs</h2>
          <ul className="page-breadcrumbs">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Breadcrumbs</li>
          </ul>
        </div>
      </div>
      {/* solid banner style end */}

      {/* breadcrumb two start */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Breadcrumbs Two</div>
        </div>
        <div className="breadcrumbs-two">
          <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
              <h2 className="page-title">Breadcrumbs</h2>
              <ul className="page-breadcrumbs">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                <li>Breadcrumbs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb two end */}


      {/* breadcrumb three start */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Breadcrumbs Three</div>
        </div>
        <div className="breadcrumbs-three b-wh-text" style={{ backgroundImage: 'url(/assets/images/blog/31.jpg)' }}>
          <div className="container">
            <h2 className="page-title">Breadcrumbs</h2>
            <ul className="page-breadcrumbs">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
              <li>Breadcrumbs</li>
            </ul>
          </div>
        </div>
      </div>
      {/* breadcrumb three end */}

      {/* breadcrumb four start */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Breadcrumbs Four</div>
        </div>
        <div className="breadcrumbs-four b-wh-text" style={{ backgroundImage: 'url(/assets/images/blog/31.jpg)' }}>
          <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
              <h2 className="page-title">Breadcrumbs</h2>
              <ul className="page-breadcrumbs">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                <li>Breadcrumbs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb four end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;