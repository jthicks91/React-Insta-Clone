import React, { Component } from "react";

import "./PostContainer.css";
import PropTypes from "prop-types";
import CommentSectionConatiner from "../CommentSection/CommentSectionContainer";

import heart from "./heart.png";
import pinkheart from "./pinkheart.png";
import comment from "./comment.png";

//moving liked feature into this component and out of post.js

export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.data.likes,
      liked: false
    };
  }

  likePost = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      likes: !prevState.liked ? prevState.likes + 1 : prevState.likes - 1
    }));
  };

  render() {
    return (
      <div className="posts-container">
        <header>
          <img src={this.props.data.thumbnailUrl} alt="" />
          <h3>{this.props.data.username}</h3>
        </header>
        <img src={this.props.data.imageUrl} alt="" />
        <div className="actions">
          <img
            src={this.state.liked ? pinkheart : heart}
            onClick={this.likePost}
            alt=""
          />
          <img src={comment} alt="" />
        </div>
        <div className="likes">
          <p>{this.state.likes} likes </p>
        </div>
        <CommentSectionConatiner
          className="commentSection"
          comments={this.props.data.comments}
        />
      </div>
    );
  }
}

PostContainer.propTypes = {
  data: PropTypes.object
};
