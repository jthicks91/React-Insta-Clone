import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div className="commentSection">
      {props.comments.map(c => {
        return <Comment key={c.username} comment={c} />;
      })}

      <p className="LoggedTime">{props.LoggedTime}</p>
      <input className="inputText" placeholder="Add Comment..." />
    </div>
  );
};

CommentSection.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default CommentSection;
