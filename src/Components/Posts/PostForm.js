import React, { Component } from "react";


class PostForm extends Component {
  state = {
    post: this.props.activePost || {
      post: {
        date: "",
        name: "",
        breakfast: "",
        bPoints: "",
        lunch: "",
        lPoints: "",
        dinner: "",
        dPoints: "",
        snacks: "",
        sPoints: ""
      }
    }
  };
  
  componentDidUpdate(prevProps) {
  if (
    this.props.activePost &&
    prevProps.activePost !== this.props.activePost
  ) {
    this.setState({
      post: this.props.activePost
    });
    }
    }
  
    changeHandler = e => {
      e.persist();
      let value = e.target.value;
      this.setState(prevState => ({
        post: {
          ...prevState.post,
          [e.target.name]: value
        }
      }));
    };

    handleSubmit = e => {
      if (this.props.activePost) {
        this.props.updatePost(e, this.state.post);
      } else {
        this.props.addPost(e, this.state.post);
      }
      this.setState({
        post: {
          date: "",
          name: "",
          breakfast: "",
          bPoints: "",
          lunch: "",
          lPoints: "",
          dinner: "",
          dPoints: "",
          snacks: "",
          sPoints: ""
        }
      });
    };

    render() {
      return (
        <div className="dayForm">
          
          <h1>Add A Post!</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                onChange={this.handleInputChange}
                value={this.state.post.date}
                name="date"
                placeholder="Date"
              />
            </div>
            <div>
              <input
                onChange={this.handleInputChange}
                value={this.state.post.name}
                name="name"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                onChange={this.handleInputChange}
                value={this.state.post.breakfast}
                name="breakfast"
                placeholder="Breakfast"
              />
  
              <input
                onChange={this.handleInputChange}
                value={this.state.post.bPoints}
                name="bPoints"
                placeholder="Breakfast Score "
              />
            </div>
            <div>
              <input
                onChange={this.handleInputChange}
                value={this.state.post.lunch}
                name="lunch"
                placeholder="Lunch"
              />
  
              <input
                onChange={this.handleInputChange}
                value={this.state.post.lPoints}
                name="lPoints"
                placeholder="Lunch Score"
              />
            </div>
            <div>
              <input
                onChange={this.handleInputChange}
                value={this.state.post.dinner}
                name="dinner"
                placeholder="Dinner"
              />
  
              <input
                onChange={this.handleInputChange}
                value={this.state.post.dPoints}
                name="dPoints"
                placeholder="Dinner Score"
              />
            </div>
            <div>
              <input
                onChange={this.handleInputChange}
                value={this.state.post.snacks}
                name="snacks"
                placeholder="Snacks"
              />
  
              <input
                onChange={this.handleInputChange}
                value={this.state.post.sPoints}
                name="sPoints"
                placeholder="Snack Score"
              />
            </div>
  
            <button type="submit">Add Post!</button>
          </form>
        </div>
      );
    }
  }

  

export default PostForm;
