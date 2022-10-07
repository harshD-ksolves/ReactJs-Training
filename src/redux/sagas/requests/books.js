import axios from "axios";

export function requestGetBooks() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/"
  });
}
