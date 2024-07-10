import React from 'react';
import CountUpContent from '../../components/common/counter';

const counter_data = [
  { count: 16, text: 'k', title: 'Global Customer', icon: 'fa fa-smile-o' },
  { count: 502, text: '', title: 'Completed Projects', icon: 'fa fa-diamond' },
  { count: 462, text: '+', title: 'Experts Worker', icon: 'fa fa-headphones' },
  { count: 72, text: '+', title: 'Award Winning', icon: 'fa fa-diamond' },
]

const ThemeCounterThree = ({icon=false}) => {
  return (
    <div className="row">
      {counter_data.map((count, i) => (
        <div className="col-lg-3 col-sm-6" key={i}>
          <div className="single-counter-box">
            {icon && <div className="icon"><i className={count.icon} aria-hidden="true"></i></div>}
            <h2 className="number">
              <span className="timer">
                <CountUpContent number={count.count} text={count.text} />
              </span>
            </h2>
            <p>{count.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeCounterThree;