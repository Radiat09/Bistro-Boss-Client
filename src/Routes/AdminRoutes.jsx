import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin/useAdmin";
import useAuth from "../hooks/useAuth/useAuth";
import PropTypes from "prop-types";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isPending] = useAdmin();
  const location = useLocation();
  if (loading || isPending) {
    return <h1 className="text-5xl text-center">Loading</h1>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
AdminRoutes.propTypes = {
  children: PropTypes.node,
};
export default AdminRoutes;
