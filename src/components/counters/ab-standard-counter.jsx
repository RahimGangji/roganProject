import React from 'react';
import CountUpContent from '../common/counter';

const counter_data = [
  {
    icon: '/assets/images/icon/icon44.svg',
    count: 1980,
    title: 'Founded Date',
    text: ''
  },
  {
    icon: '/assets/images/icon/icon45.svg',
    count: 3200,
    title: 'Completed Projects',
    text: '+'
  },
  {
    icon: '/assets/images/icon/icon46.svg',
    count: 1500,
    title: 'Worldwide Branches',
    text: '+'
  },
]

const AboutStandardCounter = () => {
  return (
    <div className="theme-counter-two">
      <div className="row g-0">
        {counter_data.map((item, i) => (
          <div key={i} className="col-md-4 single-counter-box d-flex align-items-center">
            <div className="icon-box"><img src={item.icon} alt="" /></div>
            <div className="text">
              <h2 className="number">
                <span className="timer">
                  <CountUpContent number={item.count} text={item.text} add_style={false} />
                </span>
              </h2>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStandardCounter;