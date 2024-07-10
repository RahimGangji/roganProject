import React from 'react';
import SingleCounter from './single-counter';

const counter_data = [
  { count: 16, text: 'k', title: 'Global Customer' },
  { count: 500, text: '+', title: 'Completed Projects' },
  { count: 460, text: '+', title: 'Experts Worker' },
]

const AgnCounter = () => {
  return (
    <div className="agn-counter-section fix-bg-position m0 pt-50">
      <div className="container">
        <div className="main-wrapper">
          <div className="counter-wrapper">
            <div className="row">
              {counter_data.map((count, i) => (
                <div key={i} className="col-sm-4">
                  <SingleCounter count={count} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgnCounter;