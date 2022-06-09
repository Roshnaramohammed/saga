/* eslint-disable no-unused-vars */
import axios from "axios";

export const apiGateway = axios.create({
  // put backend base url here
  baseURL: "http://localhost:8000",
  timeout: 300000,
  withCredentials: true,
});

apiGateway.interceptors.response.use(
  (res) => {
    return res;
  },
  function (res) {
    if (res.response && res.response.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
    return res;
  }
);

apiGateway.interceptors.request.use(function (config) {
  const token = localStorage.getItem("fca-token");
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };
  return config;
});