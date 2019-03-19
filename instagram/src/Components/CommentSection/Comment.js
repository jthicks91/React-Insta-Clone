import React from "react";
import "./Comment.css";

function Comment(props) {
  return (
    <div className="comment-wrapper">
      <p>{props.eachComment.text}</p>
      <h3>{props.eachComment.username}</h3>
    </div>
  );
}

// Comment.propTypes = {
//   comment: PropTypes.shape({
//     text: PropTypes.string,
//     username: PropTypes.string
//   })
// };

export default Comment;
