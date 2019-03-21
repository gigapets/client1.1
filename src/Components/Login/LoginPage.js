import React, { Component } from "react";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Render() {
    return (
      <Div classname="login">
        <h1>Log In</h1>
        <form>
          <input
            placeholder="Username"
            type="text"
            value={this.props.username}
            name="username"
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Password"
            type="text"
            value={this.props.password}
            name="password"
            onChange={this.props.handleChange}
          />
        </form>
        <button onClick={this.props.signIn}> Log In</button>
      </Div>
    );
  }
}

export default LoginPage;
