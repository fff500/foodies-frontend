import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
