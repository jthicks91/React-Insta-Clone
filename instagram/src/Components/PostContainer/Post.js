import React, { Component } from "react";

import "./Post.css";

import comment from "./comment.png";
import heart from "./heart.png";
import pinkheart from "./pinkheart.png";

// import PostContainer from "./PostContainer";
import CommentSectionConatiner from "../CommentSection/CommentSectionContainer";
import PropTypes from "prop-types";

// See if length of search str is greater than 0
// If so, then filter the dummyData & check the search criteria for matches with same characters in username
// if the resulting  array ahs a length greater than 0, some results were found so display those
// if the resulting filtered\ array has a length of 0, no results were found so display that
// if the search criteria's length is 0, we arent searching for anything so just display all posts

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
          <CommentSectionConatiner
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

// const Post = props => {
//   return (
//     <div>
//       {props.search.length > 0 ? (
//         props.dummyData.filter(
//           dummy =>
//             dummy.username.slice(0, props.search.length).toLowerCase() ===
//             props.search.toLowerCase()
//         ).length > 0 ? (
//           props.dummyData
//             .filter(
//               dummy =>
//                 dummy.username.slice(0, props.search.length).toLowerCase() ===
//                 props.search.toLowerCase()
//             )
//             .map((dummy, index) => <Post data={dummy} key={index} />)
//         ) : (
//           <h2>No Results Found</h2>
//         )
//       ) : (
//         props.dummyData.map((dummy, index) => (
//           <Post data={dummy} key={dummy} />
//         ))
//       )}
//     </div>
//   );
// };
