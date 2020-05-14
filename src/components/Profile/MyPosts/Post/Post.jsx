import React from 'react';
import classes from './Post.module.css'; //object

const Post = (props) => {  //props is object
  return (
    <div>
      <div>{props.message}</div>
      <span>Likes: {props.likesCount}</span>

    </div>
  )
}

export default Post;