import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import SingleTeam from '../../components/teams-com/single-team';
import SingleTeamTwo from '../../components/teams-com/single-team-2';
import SingleTeamThree from '../../components/teams-com/single-team-3';
import SliderTeam from '../../components/teams-com/slider-team';
import team_data from '../../data/team-data';
import { Footer, Header } from '../../layout';

const teams = team_data.filter(team => team.team_minimal).slice(0, 3);
const teams_two = team_data.filter(team => team.team_standard).slice(0, 3);
const team_three = team_data.filter(team => team.team_business).slice(0, 2);

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Team Member'} />
      {/* team one start */}
      <div className="element-section mb-150">
        <div className="team-minimal our-team">
          <div className="container">
            <div className="row">
              {teams.map((team) => (
                <div key={team.id} className="col-lg-4 col-md-6">
                  <SingleTeamTwo team={team} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* team one end */}

      {/* team two start */}
      <div className="element-section mb-150">
        <div className="team-standard our-team">
          <div className="container">
            <div className="row">
              {teams_two.map((team) => (
                <div key={team.id} className="col-lg-4 col-md-6 col-12">
                  <SingleTeam team={team} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* team two end */}

      {/* team three start */}
      <div className="element-section mb-150">
        <div className="team-classic our-team">
          <div className="container">
            {/* slider team start */}
            <SliderTeam />
            {/* slider team end */}
          </div>
        </div>
      </div>
      {/* team three end */}

      {/* team four start */}
      <div className="element-section mb-150">
        <div className="team-business our-team">
          <div className="container">
            <div className="row">
              {team_three.map((team) => (
                <div key={team.id} className="col-lg-6">
                  <SingleTeamThree team={team} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* team four end */}
      
      <Footer top_border={true} />
    </div>
  );
};

export default index;