import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

const Comment = props => {
  return (
    <div className="comment-wrapper">
      <p className="comment">{props.comment.text}</p>
      <h3 className="usrnm">{props.comment.username}</h3>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
