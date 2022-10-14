import { useContext, useEffect } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { AuthContext } from "../context/Authentication";
import ErrorPage from "../screens/error/ErrorPage";
import { Login } from "../screens/Login";
import { AuthRoutes } from "./auth.routes";

export function useRouter() {
  const { isAuth } = useContext(AuthContext);

  return createBrowserRouter([
    { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
    {
      path: "/dashboard",
      element: isAuth ? <Navigate to="/login" /> : <App />,
      errorElement: <ErrorPage />,
    },
  ]);
}
