import { useContext, useEffect } from "react";
import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import App from "../App";
import { AuthContext } from "../context/Authentication";
import { EditProfilePage } from "../screens/EditProfile/EditProfile";
import ErrorPage from "../screens/error/ErrorPage";
import { Login } from "../screens/Login";
import { AuthRoutes } from "./auth.routes";

export function useRouter() {
  const { isAuth } = useContext(AuthContext);

  return createBrowserRouter([
    {
      path: "/",
      element: isAuth ? <Navigate to="/dashboard" /> : <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: !isAuth ? <Navigate to="/" /> : <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile",
      element: !isAuth ? <Navigate to="/" /> : <EditProfilePage />,
      errorElement: <ErrorPage />,
    },
  ]);
}
