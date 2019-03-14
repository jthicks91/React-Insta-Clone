import React from "react";
import "./Posts.css";

const PostHeader = props => {
  return (
    <div className="header-post">
      <div className="post-wrapper-thumbnail">
        <img
          alt="post header"
          className="thumb-post"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
