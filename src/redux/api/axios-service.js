import axios from "axios";
import { Environment } from "../../config";

axios.defaults.baseURL = Environment.GOOGLE_PLACE_API_BASE_URL;

const AxiosService = function () {
  function get(endPoint) {
    return axios.get(endPoint);
  }

  function post(endPoint, params = {}) {
    return axios.post(endPoint, params);
  }

  function put(endPoint, params = {}) {
    return axios.put(endPoint, params);
  }

  return {
    get,
    post,
    put,
  };
};

export default AxiosService();
