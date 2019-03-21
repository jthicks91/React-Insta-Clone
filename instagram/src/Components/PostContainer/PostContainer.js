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
    console.log(this.props.data);
    return (
      <div className="posts-container">
        {this.props.data.map(posts => {
          return (
            <>
              <header>
                <img src={posts.thumbnailUrl} alt="" />
                <h3>{posts.username}</h3>
              </header>
              <img src={posts.imageUrl} alt="" />
              <div className="actions">
                <img src={heart} onClick={this.likePost} alt="" />
                <img src={comment} alt="" />
              </div>
              <div className="likes">
                <p>{posts.likes} likes </p>
              </div>
              <CommentSectionConatiner
                className="commentSection"
                comments={posts.comments}
              />
            </>
          );
        })}
      </div>
    );
  }
}

PostContainer.propTypes = {
  data: PropTypes.array
};
