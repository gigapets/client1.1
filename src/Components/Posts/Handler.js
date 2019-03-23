import React, { Component } from "react";
import axios from "axios";
// import "./App.css";
import PostForm from "./PostForm";
import Posts from "./Posts";
import Post from "./Post";
import NavBar from "./NavBar";
import Home from "./Home";
import { Route } from "react-router-dom";

class Handler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: []
    };
  }
  // add any needed code to ensure that the Posts collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Posts.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount = () => {
    axios.get("http://gigapets.herokuapp.com/gigapets").then(res => {
      this.setState({ Posts: res.data });
    });
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deletePost = (e, id) => {
    e.preventDefault();

    axios.delete(`http://gigapets.herokuapp.com/gigapets/${id}`).then(res => {
      this.setState({ Posts: res.data });
    });
  };

  resetPosts = res => {
    this.setState({ Posts: res.data });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/" exact render={props => <Home />} />
        <Route
          path="/PostForm"
          render={props => <PostForm {...props} resetPosts={this.resetPosts} />}
        />

        <Route
          path="/gigapets"
          render={props => (
            <Posts
              {...props}
              Posts={this.state.Posts}
              handleChanges={this.handleChanges}
              deletePost={this.deletePost}
              updatePost={this.updatePost}
              resetPosts={this.resetPosts}
            />
          )}
        />

      <Route
          path="/Posts/:id"
          render={props => (
            <Post
              {...props}
              Posts={this.state.Posts}
              handleChanges={this.handleChanges}
            deletePost={this.deletePost}
              updatePost={this.updatePost}
              resetPosts={this.resetPosts}
            />
          )}
        /> 
      </div>
    );
  }
}

export default Handler;
