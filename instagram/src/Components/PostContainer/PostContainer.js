// import React, { Component } from "react";

import React from "react";
import "./PostContainer.scss";
import PropTypes from "prop-types";
import Post from "./Post";
// import CommentSectionConatiner from "../CommentSection/CommentSectionContainer";

// import heart from "./heart.png";
// import pinkheart from "./pinkheart.png";
// import comment from "./comment.png";

//moving liked feature into this component and out of post.js

const PostsContainer = props => {
  return (
    <div classname="posts">
      {props.posts.map(p => (
        <Post post={p} key={p.imageUrl} likePost={props.likePost} />
      ))}
    </div>
  );
};

PostsContainer.propTypes = {
  data: PropTypes.array
};

export default PostsContainer;
