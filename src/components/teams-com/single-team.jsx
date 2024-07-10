import React from 'react';

const SingleTeam = ({team}) => {
  return (
    <div className="single-team-member">
      <div className="wrapper">
        <div className="img-box">
          <img src={team.img} alt="" />
        </div>
        <div className="info-meta">
          <h6 className="name">{team.name}</h6>
          <span>{team.title}</span>
        </div>
      </div>
      <div className="hover-content">
        <ul>
          {team.social_links.map((link, i) => (
            <li key={i}>
              <a href={link.link} target={"_blank"} rel="noreferrer">
                <i className={link.icon} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleTeam;