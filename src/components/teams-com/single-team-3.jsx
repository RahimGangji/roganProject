import React from 'react';

const SingleTeamThree = ({ team }) => {
  return (
    <div className="single-team-member">
      <div className="wrapper d-sm-flex">
        <div className="img-box">
          <img src={team.img} alt="" />
        </div>
        <div className="info-meta">
          <h6 className="name">{team.name}</h6>
          <span>{team.title}</span>
          <q>{team.subtitle}</q>
          <img src="/assets/images/home/sign2.png" alt="" className="signature" />
        </div>
      </div>
    </div>
  );
};

export default SingleTeamThree;