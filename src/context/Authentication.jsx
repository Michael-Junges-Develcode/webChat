import { gql, useMutation } from "@apollo/client";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // eslint-disable-next-line
  const [token, setToken] = useState("");

  const getToken = gql`
    mutation logIn($email: String!, $password: String!) {
      logIn(email: $email, password: $password) {
        token
      }
    }
  `;
  // eslint-disable-next-line
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
    !!data && setToken(data);
   
  }, [data, setToken]);

  useEffect(() => {
    !!token && console.log(token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ logIn, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
