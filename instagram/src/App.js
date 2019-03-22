import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data.js";

import PostsContainer from "./Components/PostContainer/PostContainer";
import SearchBar from "./Components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
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
    this.searchHandler(event);
  };

  searchPostsHandler = e => {
    const filteredPosts = this.state.posts.filter(post => {
      return post.username.includes(e.target.value);
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

export default App;
