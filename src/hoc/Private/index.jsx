import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const isAuth = useSelector(({ auth }) => auth.token);
  const location = useLocation();

  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};
