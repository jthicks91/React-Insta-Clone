import React, { Component } from "react";
import "./App.css";

import PostsPage from "./Components/PostContainer/PostsPage";
import Login from "./Components/Login/Login";
import withAuthenticate from "./Components/Authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

// import PostsContainer from "./Components/PostContainer/PostContainer";
// import SearchBar from "./Components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
