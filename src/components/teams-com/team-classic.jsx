import React from 'react';
import SliderTeam from './slider-team';


const TeamClassic = () => {
 
  return (
    <>
      <div className="team-classic our-team mt-200">
        <div className="container">
          <div className="theme-title-one text-center pb-150">
            <div className="upper-title">Team</div>
            <h2 className="main-title">Our Qulified Agents</h2>
          </div>
          {/* slider team start */}
          <SliderTeam/>
          {/* slider team end */}
        </div>
      </div>
    </>
  );
};

export default TeamClassic;