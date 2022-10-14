import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import App from "../App";
import { AuthContext } from "../context/Authentication";
import { Login } from "../screens/Login";
import { authedRouter, useRouter } from "./authed.routes";

export function AuthRoutes() {
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const formattedToken = JSON.parse(storedToken);
    const now = new Date();
    if (now < formattedToken.expiresAt) {
      console.log("token is expired");
    } else if (now > formattedToken.expiresAt) console.log("token is valid");
  }, []);

  return <RouterProvider router={useRouter()} />
}
