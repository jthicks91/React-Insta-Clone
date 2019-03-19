import React from "react";
import Post from "./Post";
import "./PostContainer.css";
import PropTypes from "prop-types";

// displays post container with appropiate imageUrl via the elements key from dummyData;

function PostContainer(props) {
  return (
    <div className="posts-container">
      {props.posts.map((eachPost, index) => (
        <Post eachPost={eachPost} key={index} />
      ))}
    </div>
  );
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
};

export default PostContainer;
