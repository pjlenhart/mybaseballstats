import http from "./httpService";

const apiEndpoint = "/api/games";

export function getGames() {
  return http.get(apiEndpoint);
}

export function getGameByID(gameId) {
  return http.get(apiEndpoint + `/${gameId}`);
}
