import React, { useState } from 'react';
import { team_data } from '../../data';
import SingleTeamThree from './single-team-3';

const teams = team_data.filter(team => team.team_business);

const perView = 6;

const TeamBusiness = () => {
  const [next, setNext] = useState(perView);
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 2)
  }
  return (
    <>
      <div className="team-business our-team pt-150 pb-200">
        <div className="container">
          <div className="row">
            {teams?.slice(0, next)?.map((team) => (
              <div key={team.id} className="col-lg-6">
                <SingleTeamThree team={team} />
              </div>
            ))}
          </div>

          {next < teams.length && <div className="text-center pt-15" onClick={handleLoadData}>
            <a style={{cursor:'pointer'}} className="theme-button-one">Load More</a>
          </div>}
        </div>
      </div>
    </>
  );
};

export default TeamBusiness;