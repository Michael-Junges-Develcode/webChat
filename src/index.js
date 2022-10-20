import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/client";
import { AuthProvider } from "./context/Authentication";
import { AuthRoutes } from "./routes/auth.routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  </ApolloProvider>
);
