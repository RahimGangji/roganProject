import React, { useState } from 'react';
import { team_data } from '../../data';
import SingleTeam from './single-team';

const teams = team_data.filter(team => team.team_standard);

const perView = 6;

const TeamStandardTwo = () => {
  const [next, setNext] = useState(perView);
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 3)
  }
  return (
    <>
      <div className="team-standard our-team pt-150 pb-200">
        <div className="container">
          <div className="row">
            {teams?.slice(0, next)?.map((team) => (
              <div key={team.id} className="col-lg-4 col-md-6 col-12">
                <SingleTeam team={team} />
              </div>
            ))}
          </div>

          {next < teams.length && <div className="text-center pt-50" onClick={handleLoadData}>
            <a style={{ cursor: 'pointer' }} className="theme-button-one">Load More</a>
          </div>}
        </div>
      </div>
    </>
  );
};

export default TeamStandardTwo;