import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostsContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      filteredPosts: [],
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData, filtered: dummyData });
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.searchPostsHandler(event);
  };

  searchPostsHandler = e => {
    const filteredPosts = this.state.data.filter(post => {
      return post.username.toLowerCase().includes(e.target.value);
    });
    return this.setState({ filteredPosts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
          data={this.state.data}
          // inputHandler={this.inputHandler}
          // input={this.state.input}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.data
          }
        />
        {/* posts={this.state.data} */}
      </div>
    );
  }
}

export default PostsPage;
