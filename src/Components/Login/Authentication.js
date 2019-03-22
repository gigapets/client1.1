import React from "react";
import axios from "axios";

const initialUser = {
  password: "",
  username: ""
};

const Authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: { ...initialUser },
        message: "",
        loggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem("token")) {
        const token = JSON.parse(localStorage.getItem("token"));

        axios
          .post(`https://gigapets.herokuapp.com/login`, { token: token.token })
          .then(res => {
            console.log("token and res.data", token, res.data.token);
            res.data.token ? this.setState({ loggedIn: true }) : localStorage.clear();
          })
          .catch(error => console.log("CDM ERROR", error));
      }
    }

    // handleChanges = event => {
    //     event.preventDefault();
    //     const { name, value } = event.target;

    handleChanges = event => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      });
    }
      signIn = event => {
        event.preventDefault();

        return axios
          .post(`https://gigapets.herokuapp.com/login`, this.state.user)

          .then((res) => {
            // console.log("response: ", res.data.token);
            localStorage.setItem("token", res.data.token);
            this.setState({ loggedIn: true });
            console.log("Inside res!: ", res);
      
          })
          .catch(err => alert("SignInCatchErr:", err));
      };

      render() {
        if (this.state.loggedIn) {
          return <App loggedIn={this.state.loggedIn} />;
        } else {
          return (
            <Login
              handleChanges={this.state.handleChanges}
              signIn={this.state.signIn}
              username={this.state.username}
              password={this.state.password}
            />
          );
        }
      }
    };
  
export default Authenticate;
// console.log("resData", res.data);
// this.setState({
//   loggedIn: true
// });