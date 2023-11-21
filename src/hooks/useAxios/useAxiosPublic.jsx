import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-tau-six.vercel.app/api/v1",
});
//https://bistro-boss-server-tau-six.vercel.app/api/v1
//https://bistro-boss-server-tau-six.vercel.app/api/v1
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
