import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";
import "./PostContainer.css";

const Post = props => {
  return (
    <div clasName="border-post">
      <PostHeader
        username={props.post.username}
        thumbnairlUrl={props.post.thumbnairlUrl}
      />
      <div className="wrapper-post-image">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
