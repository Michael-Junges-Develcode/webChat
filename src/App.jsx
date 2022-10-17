import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const getFirstPosts = gql`
    query getFirstPostsPage {
      getFirstPostsPage {
        author {
          name
        }
        id
        content
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
        createdAt
      }
    }
  `;
  const { loading, error, data } = useQuery(getFirstPosts);

  useEffect(() => {
    error && console.log(error)
  }, [error]);

  const posts = data?.getFirstPostsPage.map((post) => (
    <Post
      content={post.content}
      authorName={post.author.name}
      createdAt={post.createdAt}
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
