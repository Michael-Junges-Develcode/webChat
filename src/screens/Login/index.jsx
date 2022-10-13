import { TextField, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Authentication";
import styles from "./Login.module.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn } = useContext(AuthContext);

  function handleLogin() {
    logIn(email, password)
  }

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          sx={{ marginBottom: "1.5rem" }}
        />
        <TextField
          id="password"
          label="Senha"
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          sx={{ marginBottom: "1.5rem" }}
        />
        <Button
          onClick={() => handleLogin()}
          variant="outlined"
          sx={{ height: "3rem" }}
          
        >
          Outlined
        </Button>
      </form>
    </div>
  );
}