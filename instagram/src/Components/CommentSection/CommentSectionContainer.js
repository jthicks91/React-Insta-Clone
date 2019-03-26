import React, { Component } from "react";
import Comment from "./Comment";
import "./CommentSection.scss";
import PropTypes from "prop-types";

// chaniging to class component to controls state and add event handlers for adding comments and rendering here

class CommentSectionContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      comments: this.props.comments,
      text: ""
    };
  }

  // addNewComment = event => {
  //   event.preventDefault();
  //   this.setState(prevState => ({
  //     comments: [
  //       ...prevState.comments,
  //       {
  //         username: "jtaylorhicks",
  //         text: this.state.text
  //       }
  //     ]
  //   }));
  //   this.setState({
  //     text: ""
  //   });
  // };

  // componentDidMount() {
  //   let id = this.props.postId;

  //   if (localStorage.getItem(id)) {
  //     this.setState({
  //       comments: JSON.parse(localStorage.getItem(this.props.postId))
  //     });
  //   } else {
  //     this.saveToLocalStorage();
  //   }
  // }

  // componentWillUnmount() {
  //   this.saveToLocalStorage();
  // }

  addNewComment = e => {
    e.preventDefault();
    let username1 = localStorage.getItem("username");
    const newComment = {
      username: `${username1}`,
      text: ""
    };
    this.setState({
      comments: [...this.state.comments, newComment]
    });
    localStorage.setItem("comments", JSON.stringify(newComment));
  };

  // saveToLocalStorage = _ => {
  //   localStorage.setItem(
  //     this.props.postId,
  //     JSON.stringify(this.state.comments)
  //   );
  // };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  // add functionality for adding new comments using prevState instead of hard-coding and using spread-operator instead to practice ES6;

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="comments-section">
        {this.state.comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}

        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="text"
            placeholder="Add A Comment..."
            onChange={this.changeHandler}
            value={this.state.text}
          />
        </form>
      </div>
    );
  }
}

CommentSectionContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSectionContainer;
