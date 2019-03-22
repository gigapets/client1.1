import React from "react";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
   
    console.log(this.state, "loginstate", this.props);
      return (
      <div className="login">
        <h1>Log In</h1>
              <form onSubmit={this.props.signIn}>
          <input
            placeholder="Username"
            type="text"
            value={this.props.username}
            name="username"
            onChange={this.props.handleChanges}
          />
          <input
            placeholder="Password"
            type="text"
            value={this.props.password}
            name="password"
            onChange={this.props.handleChanges}
          />
        <button type = "submit"> Log In</button> 
        </form>
                 
      </div>
    );
  }
}

export default LoginPage;
