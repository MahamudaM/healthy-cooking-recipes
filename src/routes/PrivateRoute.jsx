
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/Auth/AuthProvider";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const{user,loading} = useContext(AuthContext);
  let location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

