import React from 'react';
import CountUpContent from '../common/counter';

const SingleCounter = ({count,icon}) => {
  return (
    <div className="single-counter-box">
      {icon && <div className="icon"><i className={count.icon} aria-hidden="true"></i></div>}
      <h2 className="number">
        <span className="timer">
          <CountUpContent number={count.count} text={count.text} />
        </span>
      </h2>
      <p>{count.title}</p>
    </div>
  );
};

export default SingleCounter;