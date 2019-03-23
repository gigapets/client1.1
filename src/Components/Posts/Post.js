import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Buttons from "./Buttons";

class Post extends Component {
  state = {
    isEditing: false,
    name: "",
    age: "",
    height: ""
  };

  // componentDidMount() {
  // change this line to grab the id passed on the URL
  //   this.fetchPost(this.props.id);
  // }

  updatePost = (e, id) => {
    e.preventDefault();

    const updatedPost = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios
      .put(`http://gigapets.herokuapp.com/gigapets/${id}`, updatedPost)
      .then(res => {
        this.props.resetPosts(res);
      })
      .catch(error => {
        console.error(error);
      });
  };

  toggleEdit = e => {
    e.preventDefault();

    this.state.isEditing
      ? this.setState({ isEditing: false })
      : this.setState({ isEditing: true });
  };

  resetEdit = () => {
    this.state.isEditing
      ? this.setState({ isEditing: false })
      : this.setState({ isEditing: true });
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchPost = id => {
    axios
      .get(`http://gigapets.herokuapp.com/gigapets/${id}`)
      .then(res => {
        this.props.resetPosts(res);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.props.updatePost}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChanges}
            autoComplete="off"
            required
          />
          <input
            type="text"
            placeholder="Enter Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChanges}
            autoComplete="off"
            required
          />
          <input
            type="text"
            placeholder="Enter Height"
            name="height"
            value={this.state.height}
            onChange={this.handleChanges}
            autoComplete="off"
            required
          />
          <Buttons
            toggleEdit={this.toggleEdit}
            isEditing={this.state.isEditing}
            handleChanges={this.props.handleChanges}
            deletePost={this.props.deletePost}
            updatePost={this.updatePost}
            id={this.props.id}
            reset={this.resetEdit}
          />
        </form>
      );
    } else {
      return (
        // <Link to={`/Posts/${this.props.id}`}>
        <div className="Post">
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} Post years old</p>
          <Buttons
            toggleEdit={this.toggleEdit}
            isEditing={this.state.isEditing}
            handleChanges={this.props.handleChanges}
            deletePost={this.props.deletePost}
            updatePost={this.updatePost}
            id={this.props.id}
            reset={this.resetEdit}
          />
        </div>
        // </Link>
      );
    }
  }
}

Post.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Post;
