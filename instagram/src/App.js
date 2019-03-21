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
      input: ""
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData, filtered: dummyData });
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.searchHandler(event);
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <SearchBar
          data={this.state.data}
          inputHandler={this.inputHandler}
          input={this.state.input}
        />
        <PostsContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
