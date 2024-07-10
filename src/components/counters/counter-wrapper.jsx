import React from 'react';
import SingleCounter from './single-counter';

const counter_data = [
  { count: 16, text: 'k', title: 'Global Customer',icon:'fa fa-smile-o' },
  { count: 500, text: '+', title: 'Completed Projects',icon:'fa fa-diamond' },
  { count: 460, text: '+', title: 'Experts Worker',icon:'fa fa-user-o' },
]

const CounterWrapper = ({icon=false}) => {
  return (
    <div className="counter-wrapper">
    <div className="row">
      {counter_data.map((count, i) => (
        <div key={i} className="col-sm-4">
          <SingleCounter count={count} icon={icon} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default CounterWrapper;