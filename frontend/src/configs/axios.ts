import Axios from "axios";
const axios = Axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api/v1",
});

export default axios;
