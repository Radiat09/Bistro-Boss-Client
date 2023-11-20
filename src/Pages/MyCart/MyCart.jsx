import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart/useCart";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios/useAxios";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [carts, refetch] = useCart();
  const axi = useAxios();
  const totalPrice = carts?.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axi.delete(`/carts/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-40">
      <div className="flex justify-between">
        <h3 className="uppercase text-3xl font-bold">
          Total Orders: {carts?.length}
        </h3>
        <h3 className="uppercase text-3xl font-bold">
          Total Price: ${totalPrice}
        </h3>
        {carts?.length ? (
          <Link to="/dashboard/payment">
            <button className="btn bg-[#D1A054] text-2xl hover:text-[#D1A054] hover:border-[#D1A054] text-white">
              Pay
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="btn bg-[#D1A054] text-2xl hover:text-[#D1A054] hover:border-[#D1A054] text-white"
          >
            Pay
          </button>
        )}
      </div>
      <div className="mt-10 w-full">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="w-full text-xl text-white bg-[#D1A054] font-semibold rounded-xl">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {carts?.map((item, idx) => (
                <tr key={item._id}>
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{item?.name}</p>
                  </td>
                  <td>
                    <p>{item?.price}</p>
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

export default MyCart;
