import styles from "./Sidebar.module.css";
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1665157296251-9ed707fe0cf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80"
        alt=""
      />
      <div className={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/102248897?v=4"
          alt=""
        />

        <strong>Mixagol</strong>
        <span>Fullstack Developer</span>
      </div>

      <footer>
        <a href="https://github.com/Michael-Junges-Develcode">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
