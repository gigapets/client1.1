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
        this.setState({ loggedIn: true });

        // axios
        //   .post(`https://gigapets.herokuapp.com/login`, {
        //     username:this.state.username,
        //       password: this.state.password
        //   })
        //   .then(res => {
        //     console.log("token and res.data", token, res.data.token);
        //     res.data.token ? this.setState({ loggedIn: true }) : localStorage.clear();
        //   })
        //   .catch(error => console.log("CDM ERROR", error));
      }
    }

    // handleChanges = event => {
    //     event.preventDefault();
    //     const { name, value } = event.target;

    // handleChanges = event => {
    //   event.preventDefault();
    //   this.setState({
    //     [event.target.name]: event.target.value
    //   });
    // }

    // handleChanges = e => this.setState({ [e.target.name]: e.target.value });


    // signIn = event => {
    //   event.preventDefault();

    //   axios
    //     .post(`https://gigapets.herokuapp.com/login`, {
    //       username: this.state.username,
    //       password: this.state.password
    //     })

    //     .then(res => {
    //       console.log("then", res.data);
    //       localStorage.setItem("token:", res.data.token);
    //       this.props.history.push('/')
    //     })
    //     .catch(err => {
    //     console.log("login Error")
    //   })
    //   };
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