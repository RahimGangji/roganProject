import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { Footer, Header } from '../../layout';
import ButtonGroup from './button-group';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Dropdowns'} />
      {/* dropdown items start */}

      {/* <!-- Element Style --> */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Single button dropdowns</div>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Element Style --> */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">And with <code className="highlighter-rouge">&lt;a&gt;</code> elements:</div>

          <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Element Style --> */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Color variant</div>
          <div className="bd-example">
           <ButtonGroup btn={'primary'} />
           <ButtonGroup btn={'secondary'} />
           <ButtonGroup btn={'success'} />
           <ButtonGroup btn={'info'} />
           <ButtonGroup btn={'warning'} />
           <ButtonGroup btn={'danger'} />
          </div>
        </div>
      </div>


      {/* <!-- Element Style --> */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Dropup variation</div>

          {/* <!-- Default dropup button --> */}
          <div className="btn-group dropup">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropup
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </div>

          {/* <!-- Split dropup button --> */}
          <div className="btn-group dropup mx-2">
            <button type="button" className="btn btn-secondary">
              Split dropup
            </button>
            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        </div>
      </div>
      {/* dropdown items end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;