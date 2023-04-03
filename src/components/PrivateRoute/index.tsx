import React, { useContext } from 'react';
import { RouteProps, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

type PrivateRouteProps = {
  component: React.FC<RouteProps>;
} & RouteProps;

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    isAuthenticated ? 
    <Outlet />
    : 
    <Navigate to={"/login"} />
  );
};

export default PrivateRoute;