import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";
import useAuth from "../useAuth/useAuth";

const useCart = () => {
  const axi = useAxios();
  const { user } = useAuth();
  // tan stack query
  const { data: carts, refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axi.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [carts, refetch];
};

export default useCart;
