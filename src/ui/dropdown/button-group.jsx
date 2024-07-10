import React from 'react';

const ButtonGroup = ({btn}) => {
  return (
    <div className="btn-group mx-2">
      <button type="button" className={`btn btn-${btn} dropdown-toggle`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
      <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 38px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  );
};

export default ButtonGroup;