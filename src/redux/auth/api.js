import axios from "axios";

export function registerAPI(payload) {
  return axios.post(
    `https://arcane-ravine-983.herokuapp.com/https://hometask-api.herokuapp.com/api/users`,
    payload
  );
}

export function loginAPI(payload) {
  return axios.post(
    `https://arcane-ravine-983.herokuapp.com/https://hometask-api.herokuapp.com/api/users/login`,
    payload
  );
}
export function verifyAPI(payload) {
  return axios.post(
    `https://arcane-ravine-983.herokuapp.com/https://hometask-api.herokuapp.com/api/users/verify`,
    payload
  );
}

export function verifyOtpAPI(payload) {
  return axios.post(
    `https://arcane-ravine-983.herokuapp.com/https://hometask-api.herokuapp.com/api/users/verifyOtp`,
    payload
  );
}
