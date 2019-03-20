import React from "react";
import "./Comment.css";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <p className="comment">
      <span>{props.comment.username}</span> {props.comment.text}
    </p>
  );
};

Comment.propTypes = {
  comment: PropTypes.object
};

export default Comment;
