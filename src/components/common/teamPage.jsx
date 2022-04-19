import NavBar from "../navBar.jsx";
import TeamCard from "./teamCard";
import { useParams } from "react-router-dom";
import { getMLBTeamById } from "../../services/teamService.js";
import mlbLogo from "../../teamPictures/MLB-Logo-history.jpg";
import ws from "../../teamPictures/world_series_trophy.jpg";

const TeamPage = () => {
  const { id } = useParams();
  let mlb_team = getMLBTeamById(id);
  mlb_team = mlb_team[0];

  return (
    <div>
      <NavBar />
      <div className="container-fluid content-row">
        <div className="row">
          <div className="col-lg-12">
            <img src={mlb_team.img} className="team-page-header" />
            <span className="team-page-header">{mlb_team.teamName}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <TeamCard
              pic={mlbLogo}
              title={"Established"}
              description={mlb_team.established}
            />
          </div>
          <div className="col-sm-3">
            <TeamCard
              pic={mlb_team.stadiumImg}
              title={"Home Field"}
              description={`${mlb_team.homeStadium} with a capacity of ${mlb_team.capacity}`}
            />
          </div>
          <div className="col-sm-3">
            <TeamCard
              pic={ws}
              title={"World Series Titles"}
              description={mlb_team.titles}
            />
          </div>
          <div className="col-sm-3">
            <TeamCard
              pic={mlb_team.fav_player_img}
              title={"PJ's Favorite Player"}
              description={mlb_team.fav_player}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
