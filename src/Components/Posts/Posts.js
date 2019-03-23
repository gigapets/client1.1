import React, { Component } from "react";

import Post from "./Post";

class Posts extends Component {
  state = {
    isEditing: false
  };

  render() {
    return (
      <div className="Posts">
        <ul>
          {this.props.Posts.map(Post => {
            return (
              <Post
                handleChanges={this.props.handleChanges}
                deletePost={this.props.deletePost}
                updatePost={this.props.updatePost}
                resetPosts={this.props.resetPosts}
                Posts={this.props.Posts}
                name={Post.name}
                id={Post.id}
                age={Post.age}
                height={Post.height}
                key={Post.id}
                nameMain={this.props.name}
                ageMain={this.props.age}
                heightMain={this.props.height}
                isEditing={this.isEditing}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Post.defaultProps = {
  Posts: []
};

export default Posts;
