import axios from "axios";
import Swal from "sweetalert";

const user = JSON.parse(localStorage.getItem("user"));

let instance;
if (user) {
  instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "X-ACCESS-TOKEN": user.token,
    },
  });
} else {
  instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "X-API-KEY": process.env.REACT_APP_BASE_KEY,
    },
  });
}

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      Swal.fire({
        icon: "warning",
        title: "Session expired",
        text: "Please sign in again!",
        confirmButtonText: "OK",
        closeOnConfirm: false,
      }).then((result) => {
        if (result.value) {
          localStorage.clear();
          window.location.href = process.env.REACT_APP_BASE_NAME_LOCATION;
        }
      });
    }
    return Promise.reject(error);
  }
);

export { instance as axios };
