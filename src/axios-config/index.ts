import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export default axiosInstance;
