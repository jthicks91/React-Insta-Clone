import React, { Component } from "react";

import "./Post.css";

import comment from "./comment.png";
import heart from "./heart.png";
import pinkheart from "./pinkheart.png";

// import PostContainer from "./PostContainer";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import PropTypes from "prop-types";

// still need to fix error on the below code

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.post.likes,
      liked: false
    };
  }

  likePost = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      likes: !prevState.liked ? prevState.likes + 1 : prevState.likes - 1
    }));
  };

  // likePost = () => {
  //   let likes = this.props.post.likes;
  //   likes++;
  //   this.setState({ likes });
  // };

  render() {
    console.log(this.props.data);
    return (
      <div className="posts-container">
        <>
          <header>
            <img src={this.props.post.thumbnailUrl} alt="" />
            <h3>{this.props.post.username}</h3>
          </header>
          <img src={this.props.post.imageUrl} alt="" />
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
          <CommentSectionContainer
            className="commentSection"
            comments={this.props.post.comments}
          />
        </>
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.array
};
