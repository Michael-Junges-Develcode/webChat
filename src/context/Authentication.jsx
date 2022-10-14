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
  const [logInMutation, { data, loading, error }] = useMutation(getToken);

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
      token: data,
      expiresAt,
    };
    !!data && localStorage.setItem("token", JSON.stringify(item));
    !!data && setToken(data);
  }, [data]);

  return (
    <AuthContext.Provider value={{ logIn, data, loading, token, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
