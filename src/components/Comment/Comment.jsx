import moment from "moment";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({content, author, createdAt, id}) {

  const relativeTime = moment(createdAt).fromNow();
  const formattedDate = moment(createdAt).format("LLL");


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
              <strong>{author}</strong>
              <time
                title={formattedDate}
                dateTime={createdAt}
              >
                {relativeTime}
              </time>
            </div>
            <button onClick={() => console.log(`comentário ${id} deletado`)} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
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
