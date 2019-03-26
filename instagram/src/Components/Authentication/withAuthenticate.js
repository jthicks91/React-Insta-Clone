import React from "react";

const withAuthenticate = WrappedComponent1 => WrappedComponent2 => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn === true) {
        return <WrappedComponent1 />;
      } else {
        return <WrappedComponent2 />;
      }
    }
  };
};

export default withAuthenticate;
