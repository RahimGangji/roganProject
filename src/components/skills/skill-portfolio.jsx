import React, { useState } from 'react';
import { InView } from "react-intersection-observer";
import CountUpContent from '../common/counter';

function SkillBar({ percent, count, text, title, category }) {
  const [progress, setProgress] = useState(false)
  return (
    <div className="col-lg-6">
      <div className="skill-bar">
        <div className="progress">
          <InView as="div" className="progress-bar"
            style={{ width: progress ? percent : '0', transition: 'width 3s ease 0s' }}
            onChange={(inView, entry) => setProgress(inView)}>
            <span className="percent-text">
              <span className="count">
                <CountUpContent number={count} text={text} />
              </span>
            </span>
          </InView>
        </div>
        <div className="skill-title">{title}</div>
        <span className="category">{category}</span>
      </div>
    </div>
  )
}

const SkillPortfolio = () => {
  return (
    <div className="section-portfo skill-section-portfo">
      <div className="section-num show-pr"><span>0</span><span>2</span></div>
      <div className="container">
        <h2 className="theme-title-two">Experties<span>.</span></h2>
        <div className="row">
          <SkillBar percent="80%" count={80} text="%" title="Web Designing" category="HTML/CSS" />
          <SkillBar percent="63%" count={63} text="%" title="Graphic Design." category="UI/UX" />
          <SkillBar percent="75%" count={75} text="%" title="Web Development" category="WORDPRESS/PHP" />
          <SkillBar percent="85%" count={85} text="%" title="Application Dev." category="ANDROID/ IOS" />
        </div>
      </div>
    </div>
  );
};

export default SkillPortfolio;