import React from "react";
import { getGames } from "../services/gameService";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./navBar";
import Table from "./common/table";
import _ from "lodash";

const GameLog = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getGames();
      const data = response.data;
      setGames(data);
    }
    fetchData();
  }, []);

  const columns = [
    { path: "HomeTeam", label: "Home" },
    { path: "AwayTeam", label: "Away" },
    { path: "GameDate", label: "Game Date" },
    {
      path: "GameID",
      label: "GameID",
      content: (game) => (
        <Link to={`/gamelog/${game.GameID}`}>{game.GameID}</Link>
      ),
    },
    { path: "HomeRuns", label: "Home Team Runs" },
    { path: "AwayRuns", label: "Away Team Runs" },
    { path: "HomeHits", label: "Home Team Hits" },
    { path: "AwayHits", label: "Away Team Hits" },
    { path: "HomeErrors", label: "Home Team Errors" },
    { path: "AwayErrors", label: "Away Team Errors" },
  ];

  return (
    <div>
      <NavBar />
      <Table columns={columns} sortColumn="GameDate" data={games} />
    </div>
  );
};

export default GameLog;
