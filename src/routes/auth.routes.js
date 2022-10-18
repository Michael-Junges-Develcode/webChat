import { RouterProvider } from "react-router";
import { useRouter } from "./authed.routes";

export function AuthRoutes() {
  return <RouterProvider router={useRouter()} />;
}
