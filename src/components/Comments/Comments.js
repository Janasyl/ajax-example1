import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Comments.module.css";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/post/' + postId + '/comments')
      .then((response) => {
        const comments = response.data;
        const only5comments = comments.slice(0, 5);
        setComments(only5comments);
      });
  }, [postId]);

  const results = comments.map((comment) => (
    <div key={comment.id}>
      <strong>{comment.name}</strong>
      <p>{comment.body}</p>
    </div>
  ));

  return (
    <div className={classes.Comments}>
      {results}
    </div>
  );
}

export default Comments;