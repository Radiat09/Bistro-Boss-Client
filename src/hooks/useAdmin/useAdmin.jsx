import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxios from "../useAxios/useAxios";

const useAdmin = () => {
  const { user } = useAuth();
  const axi = useAxios();
  const { data: isAdmin, isPending } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await axi.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isPending];
};

export default useAdmin;
