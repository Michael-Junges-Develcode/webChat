import styles from "./Header.module.css";
import igniteLogo from "../../assets/imgs/Ignite-simbol.svg";
import { AuthContext } from "../../context/Authentication";
import { useContext } from "react";

export function Header() {
  const { setIsAuth } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="igniteLogo" />
      <strong>Ignite Feed</strong>
      <button onClick={() => {setIsAuth(false); localStorage.removeItem("token")}}>Sair</button>
    </header>
  );
}
