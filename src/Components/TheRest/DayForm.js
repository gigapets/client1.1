//the form at the bottom of the DayPage which allows users to input data that gets sent over to the backend.

// a form is rendered to the screen

// the form sends out a push request with the inputted data.

import React from "react";

class DayForm extends React.Component {
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
  addDayPost = event => {
    event.preventDefault();
    this.props.addDayPost(event, this.state);

    this.setState({
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
    });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
        </form>

        <button onClick={this.addDayPost}>Submit!</button>
      </div>
    );
  }
}

export default DayForm;
