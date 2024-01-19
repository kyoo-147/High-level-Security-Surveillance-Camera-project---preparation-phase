import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3009",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;