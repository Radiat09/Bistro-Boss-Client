import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

const instance = axios.create({
  baseURL: "https://bistro-boss-server-tau-six.vercel.app/api/v1",
  //https://bistro-boss-server-tau-six.vercel.app/api/v1
});
const useAxios = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  instance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("token in interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  // intercepts 401,404,403
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      // console.log("status error in intercerptors", error);
      const status = error.response?.status;
      if (status === 401 || status === 403 || status === 404) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

export default useAxios;
