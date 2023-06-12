import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import NavBar from "../NavBar";

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  console.log({ isAuthenticated });
  return isAuthenticated ? (
    <>
      <div className="container">
        <Outlet />
      </div>
      <NavBar />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrivateRoute;
