import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useReducer } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const initialState = { comments: [] };

  //const deleteComment = gql`
  // mutation deleteComment($commentId: Float!) {
  //   deleteComment(commentId: $commentId) {
  //
  //    }
  //  }
  //`;
  //const [deleteCommentMutation, { data: deleteCommentData }] =
  //useMutation(deleteComment);

  function handleDeleteComment(commentId) {
    //deleteCommentMutation({ variables: { commentId } });
  }

  const getFirstPosts = gql`
    query getFirstPostsPage {
      getFirstPostsPage {
        author {
          name
        }
        id
        content
        comments {
          comment
          id
          author {
            name
          }
          createdAt
        }
        createdAt
      }
    }
  `;

  const getAllPosts = gql`
    query getAllPosts($cursor: Float!) {
      getAllPosts(cursor: $cursor) {
        author {
          name
        }
        id
        content
        comments
        createdAt
      }
    }
  `;

  const { loading, error, data } = useQuery(getFirstPosts);

  function log(commentId) {
    console.log("id do comentario: ", commentId);
  }

  const add = () => {
    const commentsArray = data?.getFirstPostsPage.map((post) => post.comments);
    return commentsArray;
  };

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return [
          ...state.comments,
          add().map((comment) => {
            return comment;
          }),
        ];
      case "delete":
        return [...state.comments, log(action.payload.commentId)];
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, {comments: []});

  useEffect(() => {
    data && dispatch({ type: "add" });
  }, [data]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const posts = data?.getFirstPostsPage.map((post, index) => (
    <Post
      content={post.content}
      authorName={post.author.name}
      createdAt={post.createdAt}
      comments={state[index]}
      key={post.id}
    />
  ));

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>{posts}</main>
      </div>
    </div>
  );
}

export default App;
