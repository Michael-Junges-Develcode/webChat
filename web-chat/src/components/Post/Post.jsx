import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img
          className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/102248897?v=4"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Michael Junges</strong>
            <span>Fullstack Developer</span>
          </div>
        </div>

        <time title="09 de outubro de 2022 as 09:39" dateTime="2022-10-09 09:39:02">Publicado há 1h</time>
      </header>
    </article>
  );
}
