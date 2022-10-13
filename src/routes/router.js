import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../screens/error/ErrorPage";
import { AuthRoutes } from "./auth.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoutes />,
    errorElement: <ErrorPage />,
  },
]);
