import { gql, useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import "moment/locale/pt-br";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post({ content, authorName, comments, createdAt }) {
  function handleClick(event) {
    event.preventDefault();
  }
  moment.locale("pt-br");
  const relativeTime = moment(createdAt).fromNow();
  const formattedDate = moment(createdAt).format("LLL");

  const formattedComments = comments?.map(comment => <Comment author={comment.author.name} content={comment.comment} createdAt={comment.createdAt} id={comment.id} key={comment.id}/>)
  console.log(comments)
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/102248897?v=4" />
          <div className={styles.authorInfo}>
            <strong>{authorName}</strong>
            <span>Fullstack Developer</span>
          </div>
        </div>

        <time title={formattedDate} dateTime={formattedDate}>
          {relativeTime}
        </time>
      </header>
      <div className={styles.content}>
        {content
          ? content
          : "sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text"}
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
      <div className={styles.commentList}>{formattedComments}</div>
    </article>
  );
}
