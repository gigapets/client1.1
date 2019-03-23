import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  addPost = e => {
    e.preventDefault();
    // add code to create the Post using the api
    const newPost = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios.post("`http://gigapets.herokuapp.com/gigapets", newPost).then(res => {
      this.props.resetPosts(res);
      this.props.history.push("/Posts-list");
    });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

 
  render() {
    return (
      <div className="dayForm">
        <form onSubmit={this.addDayPost}>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.date}
              name="date"
              placeholder= 'Date'
            />
          </div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.name}
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.breakfast}
              name="breakfast"
              placeholder="Breakfast"
            />
         
            <input
              onChange={this.handleInputChange}
              value={this.state.bPoints}
              name="bPoints"
              placeholder="Breakfast Score "
            />
          </div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.lunch}
              name="lunch"
              placeholder="Lunch"
            />
         
            <input
              onChange={this.handleInputChange}
              value={this.state.lPoints}
              name="lPoints"
              placeholder="Lunch Score"
            />
          </div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.dinner}
              name="dinner"
              placeholder="Dinner"
            />
    
            <input
              onChange={this.handleInputChange}
              value={this.state.dPoints}
              name="dPoints"
              placeholder="Dinner Score"
            />
          </div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.snacks}
              name="snacks"
              placeholder="Snacks"
            />
         
            <input
              onChange={this.handleInputChange}
              value={this.state.sPoints}
              name="sPoints"
              placeholder="Snack Score"
            />
          </div>
        
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
