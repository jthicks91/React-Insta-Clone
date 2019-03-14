import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./Components/PostContainer/PostContainer";
import SearchBar from "./Components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
