import React from 'react';
import { team_data } from '../../data';
import SingleTeam from './single-team';

const team_items = team_data.filter(team => team.about_standard);

const TeamStandard = () => {
  return (
    <>
      <div className="team-standard our-team mt-200 pb-100">
        <div className="container">
          <div className="theme-title-one text-center pb-100">
            <div className="upper-title">Team</div>
            <h2 className="main-title">Our Qulified Agents</h2>
          </div>
          <div className="row">
            {team_items.map((team) => (
              <div key={team.id} className="col-lg-4 col-md-6 col-12">
                <SingleTeam team={team} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStandard;
