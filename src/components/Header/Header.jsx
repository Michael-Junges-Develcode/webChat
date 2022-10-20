import styles from "./Header.module.css";
import igniteLogo from "../../assets/imgs/Ignite-simbol.svg";
import { AuthContext } from "../../context/Authentication";
import { useContext } from "react";

export function Header() {
  const { setIsAuth } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.emptyBox}></div>
      <div className={styles.logoWrapper}>
        <img src={igniteLogo} alt="igniteLogo" />
        <strong className={styles.title}>Ignite Feed</strong>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.logOut}
          onClick={() => {
            setIsAuth(false);
            localStorage.removeItem("token");
          }}
        >
          Sair
        </button>
      </div>
    </header>
  );
}
