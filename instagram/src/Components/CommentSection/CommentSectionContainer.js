import React from "react";
import Comment from "./Comment";

// chaniging to class component to controls state and add event handlers for adding comments and rendering here

class CommentSectionConatiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalComments: this.props.eachPost.comments,
      commentInput: ""
    };
  }

  addNewComment = event => {
    event.preventDefault();
    let comment = {
      username: "Jordan",
      text: this.state.commentInput
    };
    this.setState({
      totalComments: [...this.state.totalComments, comment],
      commentInput: ""
    });
  };

  commentInputHandler = event => {
    this.setState({ commentInput: event.target.value });
  };

  render() {
    return (
      <div className="comment-area">
        {this.state.totalComments.map(eachComment => (
          <Comment eachComment={eachComment} key={this.props.index} />
        ))}

        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            placeholder="... Add A Comment"
            onChange={this.commentInputHandler}
            value={this.state.commentInput}
          />
        </form>
      </div>
    );
  }
}

export default CommentSectionConatiner;
