import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/102248897?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mixagol</strong>
              <time
                title="11 de Outubro as 14:35"
                dateTime="2022/10/11 14:35:40"
              >
                Há 2 horas
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bommmmmmmm!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
