import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios/useAxios";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axi = useAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axi.get("/users");
      // console.log(res);
      return res.data;
    },
  });

  const handleUpdateUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update user!",
    }).then((result) => {
      if (result.isConfirmed) {
        axi.patch(`/users/${id}`).then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "The user has been Updated.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete user!",
    }).then((result) => {
      if (result.isConfirmed) {
        axi.delete(`/users/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "The user has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-[#ffffff]">
      <SectionTitle
        heading={"MANAGE ALL USERS"}
        subHeading={"How many??"}
      ></SectionTitle>
      <div className="flex justify-between">
        <h3 className="uppercase text-3xl font-bold">
          Total Users: {users?.length}
        </h3>
      </div>
      <div className="mt-10 w-full">
        <div className="overflow-x-auto w-full">
          <table className="table w-full ">
            {/* head */}
            <thead className="w-full text-xl text-white bg-[#D1A054] font-semibold rounded-xl">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {users?.map((user, idx) => (
                <tr key={user._id}>
                  <th>
                    <label className="text-xl font-bold">{idx + 1}</label>
                  </th>
                  <td>
                    <p>{user?.name}</p>
                  </td>
                  <td>
                    <p>{user?.email}</p>
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <p className="font-semibold text-lg text-green-500 uppercase">
                        {"Admin"}
                      </p>
                    ) : (
                      <button
                        onClick={() => handleUpdateUser(user._id)}
                        className="btn bg-[#D1A054] text-white text-xl hover:text-[#D1A054]"
                      >
                        <FaUsers></FaUsers>
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn bg-red-600 text-white text-xl hover:text-red-600 hover:border-red-600"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
