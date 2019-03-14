import React from "react";
import Post from "./Post";
import "./PostContainer.css";

// displays post container with appropiate imageUrl via the elements key from dummyData;

const PostsContainer = props => {
  return (
    <div className="posts-container-wrap">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostsContainer;
