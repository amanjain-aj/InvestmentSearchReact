import { axios } from ".";

const Login = (body) => {
    return axios.post("/api/auth/login", body);
  };
// const Logout = () => {
//     return axios.delete("authservice/public/api/logout");
// };

const SearchStock = (searchVal) => {
    return axios.get(`/api/stocks/search${searchVal}`)
}

const GetStockDetails = (stockId) => {
    return axios.get(`/api/stocks/details/${stockId}`)
}




export {
Login,
SearchStock,
GetStockDetails
}


