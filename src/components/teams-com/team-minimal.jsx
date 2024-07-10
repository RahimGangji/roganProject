import React, { useState } from 'react';
import team_data from '../../data/team-data';
import SingleTeamTwo from './single-team-2';

const teams = team_data.filter(team => team.team_minimal);

const perView = 6;

const TeamMinimal = () => {
  const [next, setNext] = useState(perView);
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 3)
  }
  return (
    <>
      <div className="team-minimal our-team pt-150 pb-200">
        <div className="container">
          <div className="row">
            {teams?.slice(0, next)?.map((team) => (
              <div key={team.id} className="col-lg-4 col-md-6">
                <SingleTeamTwo team={team} />
              </div>
            ))}
          </div>

          {next < teams.length && <div className="text-center pt-15" onClick={handleLoadData}>
            <a style={{ cursor: 'pointer' }} className="theme-button-one">Load More</a>
          </div>}
        </div>
      </div>
    </>
  );
};

export default TeamMinimal;