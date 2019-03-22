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
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <SearchBar
          data={this.state.data}
          inputHandler={this.inputHandler}
          input={this.state.input}
          searchPosts={this.searchPostsHandler}
          searchTerm={this.state.searchTerm}
        />
        <PostsContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
