import { useContext } from "react";
import App from "../App";
import { AuthContext } from "../context/Authentication";
import { Login } from "../screens/Login";

export function AuthRoutes() {
  const { token } = useContext(AuthContext);

  return token ? <App /> : <Login />;
}
