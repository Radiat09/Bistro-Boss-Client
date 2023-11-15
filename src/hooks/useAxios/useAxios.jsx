import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000/api/v1",
  //http://localhost:9000
});
const useAxios = () => {
  // instance.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (err) {
  //     console.log("from Axios", err);
  //   }
  // );
  return instance;
};

export default useAxios;
