import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import defaultProImg from "../../../assets/others/profile.png";
import cartImg from "../../../assets/icon/pngwing.com.png";
import useCart from "../../../hooks/useCart/useCart";
import useAdmin from "../../../hooks/useAdmin/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCart();
  const [isAdmin] = useAdmin();

  const NavLinks = (
    <>
      <li className="font-bold text-xl ">
        <NavLink className="text-white" to="/">
          Home
        </NavLink>
      </li>
      <li className="font-bold text-xl ">
        <NavLink className="text-white" to="/ourmenu">
          Our Menu
        </NavLink>
      </li>
      <li className="font-bold text-xl ">
        <NavLink className="text-white" to="/order/salad">
          Order
        </NavLink>
      </li>
      <li className="font-bold text-xl ">
        <NavLink className="text-white" to="/contactus">
          Contact Us
        </NavLink>
      </li>
      <li className="font-bold text-xl ">
        {user && isAdmin && (
          <NavLink className="text-white" to="/dashboard/adminHome">
            Dashboard
          </NavLink>
        )}
        {user && !isAdmin && (
          <NavLink className="text-white" to="/dashboard/userHome">
            Dashboard
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar fixed z-50 bg-black bg-opacity-50 text-white lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
          <Link to="/" className="flex flex-col uppercase">
            <span className="text-3xl font-black">Bistro Boss</span>
            <span className="text-2xl font-bold tracking-[5px]">
              Restaurant
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-8">
              <Link to="/dashboard/mycart">
                <div className="indicator cursor-pointer">
                  <span className="indicator-item badge badge-secondary">
                    {carts?.length}
                  </span>
                  <img
                    src={cartImg}
                    className="w-10"
                    alt="an image icon of cart"
                  />
                </div>
              </Link>

              <div className="flex justify-center items-center gap-2">
                <img
                  src={defaultProImg}
                  className="w-10 rounded-full cursor-pointer"
                  alt="image of logged user"
                />
                <Link
                  onClick={logOut}
                  className="font-bold text-xl text-white link-hover"
                >
                  Sign out
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/login" className="font-bold text-xl text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
