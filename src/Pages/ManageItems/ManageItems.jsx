import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios/useAxios";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxios/useAxiosPublic";

const ManageItems = () => {
  const axiosPUblic = useAxiosPublic();

  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPUblic.get("/menu");
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
        axiosPUblic.delete(`/menu/${id}`).then((res) => {
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
        heading={"MANAGE ALL items"}
        subHeading={"Hurry up!"}
      ></SectionTitle>
      <div className="flex justify-between">
        <h3 className="uppercase text-3xl font-bold">
          Total Users: {menu?.length}
        </h3>
      </div>
      <div className="mt-10 w-full">
        <div className="overflow-x-auto w-full">
          <table className="table w-full ">
            {/* head */}
            <thead className="w-full text-xl text-white bg-[#D1A054] font-semibold rounded-xl">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {menu?.map((item, idx) => (
                <tr key={item._id}>
                  <th>
                    <label className="text-xl font-bold">{idx + 1}</label>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item?.image} alt={`image of ${item?.name}`} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{item?.name}</p>
                  </td>
                  <td>
                    <p>${item?.price}</p>
                  </td>
                  <td>
                    {item.role === "admin" ? (
                      <p className="font-semibold text-lg text-green-500 uppercase">
                        {"Admin"}
                      </p>
                    ) : (
                      <button
                        onClick={() => handleUpdateUser(item._id)}
                        className="btn bg-[#D1A054] text-white text-xl hover:text-[#D1A054]"
                      >
                        <FaEdit></FaEdit>
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
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

export default ManageItems;
