import axios from "axios";

export function loginAPI(payload) {
  return axios.post(
    `https://arcane-ravine-983.herokuapp.com/https://hometask-api.herokuapp.com/api/users`,
    payload
  );
}
