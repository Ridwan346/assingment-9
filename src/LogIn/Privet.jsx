import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../LogIn/Api";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Auth checking চলাকালে কিছুই দেখাবে না
  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  // User logged in হলে page দেখাবে
  if (user) {
    return children;
  }

  // User না থাকলে Login page এ পাঠাবে
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
