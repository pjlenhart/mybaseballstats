import NavBar from "./navBar";
import TeamTable from "./teamTable";
import { getMLBTeams } from "../services/teamService";

const mlb_teams = getMLBTeams();

const Teams = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid content-row">
        <div className="row">
          <div className="col-lg-4">
            <TeamTable
              divisionName="AL East"
              division={mlb_teams.filter((t) => t.division === "AL East")}
            />
          </div>
          <div className="col-lg-4">
            <TeamTable
              divisionName="AL Central"
              division={mlb_teams.filter((t) => t.division === "AL Central")}
            />
          </div>
          <div className="col-lg-4">
            <TeamTable
              divisionName="AL West"
              division={mlb_teams.filter((t) => t.division === "AL West")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <TeamTable
              divisionName="NL East"
              division={mlb_teams.filter((t) => t.division === "NL East")}
            />
          </div>
          <div className="col-lg-4">
            <TeamTable
              divisionName="NL Central"
              division={mlb_teams.filter((t) => t.division === "NL Central")}
            />
          </div>
          <div className="col-lg-4">
            <TeamTable
              divisionName="NL West"
              division={mlb_teams.filter((t) => t.division === "NL West")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
