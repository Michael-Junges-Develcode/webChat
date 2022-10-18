import { gql, useMutation } from "@apollo/client";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const getToken = gql`
    mutation logIn($email: String!, $password: String!) {
      logIn(email: $email, password: $password) {
        token
      }
    }
  `;
  const [logInMutation, { data, loading }] = useMutation(getToken);

  async function logIn(email, password) {
    logInMutation({
      variables: {
        email: email,
        password: password,
      },
    });
  }

  useEffect(() => {
    const expiresAt = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //gets current time and adds 24h to it
    const item = {
      token: data?.logIn?.token,
      expiresAt,
    };
    !!data && localStorage.setItem("token", JSON.stringify(item));
    !!data && setToken(data?.logIn?.token);
  }, [data]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const formattedToken = JSON.parse(token);
    const now = new Date().toISOString();
    console.log("stored token is valid: ", formattedToken?.expiresAt > now);
    if (formattedToken?.expiresAt > now) {
      setIsAuth(true);
    } else {
      localStorage.removeItem("token");
      setToken("");
      setIsAuth(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ logIn, data, loading, token, isAuth, setIsAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
