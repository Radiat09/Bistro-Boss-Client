import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:9000/api/v1",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;