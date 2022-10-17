import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { redirect, RouterProvider, useNavigate } from "react-router";
import App from "../App";
import { AuthContext } from "../context/Authentication";
import { Login } from "../screens/Login";
import { authedRouter, useRouter } from "./authed.routes";

export function AuthRoutes() {
  return <RouterProvider router={useRouter()} />;
}
