import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  function handleClick(event) {
    event.preventDefault();

  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/102248897?v=4" />
          <div className={styles.authorInfo}>
            <strong>Michael Junges</strong>
            <span>Fullstack Developer</span>
          </div>
        </div>

        <time
          title="09 de outubro de 2022 as 09:39"
          dateTime="2022-10-09 09:39:02"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifólio. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>

        <p>
          👉
          <a href="https://avatars.githubusercontent.com/u/102248897?v=4">
            jane.design/doctorcare
          </a>
        </p>

        <p>
          <a href="https://avatars.githubusercontent.com/u/102248897?v=4">
            #novoprojeto #nwl #rocketseat
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button onClick={(event) => handleClick(event)} type="submit">
            Comentar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
