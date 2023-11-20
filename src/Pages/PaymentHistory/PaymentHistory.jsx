import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios/useAxios";

const PaymentHistory = () => {
  const axi = useAxios();
  const { user } = useAuth();
  const { data: payments } = useQuery({
    queryKey: ["paymentHis"],
    queryFn: async () => {
      const res = await axi.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  console.log(payments);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <SectionTitle
        heading={"PAYMENT HISTORY"}
        subHeading={"At a Glance!"}
      ></SectionTitle>
      <div className="flex justify-between">
        <h3 className="uppercase text-3xl font-bold">
          Total Payments: {payments?.length}
        </h3>
      </div>
      <div className="mt-10 w-full">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="w-full text-xl text-white bg-[#D1A054] font-semibold rounded-xl">
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Category</th>
                <th>Total Price</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {payments?.map((item, idx) => (
                <tr key={item._id}>
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>{item?.email}</td>
                  <td>
                    <p>{item?.status}</p>
                  </td>
                  <td>
                    <p>${item?.total ? item?.total : "not Found"}</p>
                  </td>
                  <td>
                    <p>{item?.date}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
