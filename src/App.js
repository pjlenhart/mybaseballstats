import "./App.css";
import Welcome from "./components/welcome";
import About from "./components/about";
import Home from "./components/home";
import Pitchers from "./components/pitchers";
import Batters from "./components/batters";
import Teams from "./components/teams";
import TeamsPage from "./components/common/teamPage";
import GameLog from "./components/gameLog";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";

function App() {
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   function getUser() {
  //     const result = auth.getCurrentUser();
  //     setUser(result);
  //   }
  //   getUser();
  // });

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/about" exact component={About} />
        <Route path="/home" exact component={Home} />
        <Route path="/pitchers" exact component={Pitchers} />
        <Route path="/batters" exact component={Batters} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/teams/:id" component={TeamsPage} />
        <Route path="/gamelog" exact component={GameLog} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
