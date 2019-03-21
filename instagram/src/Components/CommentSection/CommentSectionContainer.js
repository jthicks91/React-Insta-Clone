import React, { Component } from "react";
import Comment from "./Comment";
import "./CommentSection.css";
import PropTypes from "prop-types";

// chaniging to class component to controls state and add event handlers for adding comments and rendering here

class CommentSectionConatiner extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      comments: this.props.comments,
      text: ""
    };
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState(prevState => ({
      comments: [
        ...prevState.comments,
        {
          username: "Jordan",
          text: this.state.text
        }
      ]
    }));
    this.setState({
      text: ""
    });
  };

  // add functionality for adding new comments using prevState instead of hard-coding and using spread-operator instead to practice ES6;

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state.comments);
    return (
      <div className="comments-section">
        {this.state.comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}

        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="text"
            placeholder="... Add A Comment"
            onChange={this.changeHandler}
            value={this.state.text}
          />
        </form>
      </div>
    );
  }
}

CommentSectionConatiner.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSectionConatiner;
