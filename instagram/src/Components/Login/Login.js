import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit(e) {
    localStorage.setItem("username", `{this.state.user}`);
    this.setState({
      username: "",
      password: ""
    });
    window.location.reload();
  }

  render() {
    return (
      <div className="login-form">
        <h3>Welcome to Instagram</h3>
        <div>Please Login</div>
        <form>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange.bind(this)}
          />
        </form>
        <form>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange.bind(this)}
          />
          <br />
          <button onClick={this.handleLoginSubmit.bind(this)}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
