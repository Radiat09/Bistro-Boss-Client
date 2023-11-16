import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaStarAndCrescent,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useAdmin from "../hooks/useAdmin/useAdmin";

const Dashboard = () => {
  const [isAdmin, isPending] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="space-y-5 mt-10">
          {/* {isLoading ? (
            <div>
              <span className="loading loading-spinner text-warning"></span>
            </div>
          ) : (
            <> */}
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageBookings"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/uerHome"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/payment"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaWallet></FaWallet>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/mycart"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaShoppingCart></FaShoppingCart>
                  Mycart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addReview"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaStarAndCrescent></FaStarAndCrescent>
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myBooking"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                      : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  }
                >
                  <FaCalendarCheck></FaCalendarCheck>
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          {/* </>
          )} */}
          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
              }
            >
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
              }
            >
              <FaBars></FaBars>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
              }
            >
              <FaShoppingBag></FaShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/contactUs"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-xl font-medium flex items-center justify-start gap-1 ml-10"
                  : "text-black text-xl font-medium flex items-center justify-start gap-1 ml-10"
              }
            >
              <MdEmail></MdEmail>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet className="bg-[#F6F6F6]"></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
