import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Posts.module.css";

const Posts = ({ setSelectedPost }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const posts = response.data;
        const only5posts = posts.slice(0, 5);
        setPosts(only5posts);
      });
  }, []);

  const results = posts.map((post) => (
    <article key={post.id} onClick={() => setSelectedPost(post.id)}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ));

  return (
    <div className={classes.Posts}>
      {results}
    </div>
  );
}

export default Posts;