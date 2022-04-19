import pitcher from "../pitchers.jpg";
import batter from "../batters.jpg";

import NavBar from "./navBar";
import Card from "./common/card";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid content-row">
        <div className="row">
          <div className="col-lg-6">
            <Card
              pic={pitcher}
              title={"Pitchers"}
              description={
                "Pitching statistics for all observed and scored pitchers. Batting statistics are not included in this section."
              }
              path={"pitchers"}
            />
          </div>
          <div className="col-lg-6">
            <Card
              pic={batter}
              title={"Batters"}
              description={
                "Batting statistics for all observed and scored batters. Fielding statistics are not included in this section."
              }
              path={"batters"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
