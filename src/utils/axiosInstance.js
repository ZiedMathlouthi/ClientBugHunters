import axios from "axios";
const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || "https://backendbughunters.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
const token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export default axiosInstance;
