import React from "react";

import "./Post.css";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";

// Check if length of search str is greater than 0
// If so, then filter the dummyData & check the search criteria for matches with same characters in username
// if the resulting filtered array ahs a length greater than 0, some results were found so display those
// if the resulting filtered array has a length of 0, no results were found so display that
// if the search criteria's length is 0, we arent searching for anything so just display all posts

// still need to fix error on the below code

// const Post = props => {
//   return (
//     <div className="posts">
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
//             .map((dummy, index) => <PostContainer data={dummy} key={index} />)
//         ) : (
//           <h2>No Results Found</h2>
//         )
//       ) : (
//         props.dummyData.map((dummy, index) => (
//           <PostContainer data={dummy} key={dummy} />
//         ))
//       )}
//     </div>
//   );
// };
export default Post;

/* // likeHandler = () => {
  //   let num = this.state.like;
  //   if (this.state.liked === false) {
  //     this.setState({ like: num + 1, liked: true });
  //   } else this.setState({ like: num - 1, liked: false });
  // }; */
