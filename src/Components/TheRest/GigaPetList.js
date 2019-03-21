import React, { Component } from "react";

import "./App.css";
import DayForm from "./DayForm";
import DayPost from "./DayPost";
import DayPosts from "./DayPosts";
import axios from "axios";
import { NavLink, Route } from "react-router-dom";
import HomeNav from "./HomeNav";
import styled from 'styled-components';


class GigaPetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayPosts: []
    };
  }

  componentDidMount() {
    console.log("inside Component Did Mount", this.state);
    axios
      .get("https://gigapets.herokuapp.com/gigapets")
      .then(response => this.setState({ dayPosts: response.data }))
      .catch(err => console.log("ComponentDidMount error: ", err));
  }

  addDayPost = (event, dayPost) => {
    axios
      .post("https://gigapets.herokuapp.com/gigapets", dayPost)
      .then(response => this.setState({ dayPosts: response.data }))
      .catch(err => console.log("Add Day Post Error: ", err));
  };

  // deleteDayPost = (event, id) => {
  //   event.preventDefault();
  //   axios
  //

  // };

  deleteDayPost = (event, id) => {
    event.preventDefault();

    axios
      .delete(`https://gigapets.herokuapp.com/gigapets/${id}`)
      .then(response => {
        this.setState({ dayPosts: response.data }).catch(err =>
          console.log("error:", err)
        );
      });
  };

  render() {
    return (
      <div className="App">
        <div className="navBar" id = "nav">
          
            <NavLink exact to="/">
            <div id = "navLink">Home</div>
            </NavLink>
          
            <NavLink to="/DayForm">
              <div id = 'navLink' >Record Something</div>
              </NavLink>
          </div>
         

      
            <Route
          exact
          path="/"
          render={props => (
            <DayPosts
              {...props}
              dayPosts={this.state.dayPosts}
              handleChanges={this.handleChanges}
              deleteDayPost={this.deleteDayPost}
              updateDayPost={this.updateDayPost}
            />
          )}
        />
        <Route
          exact
          path="/DayForm"
          render={props => <DayForm {...props} addDayPost={this.addDayPost} />}
        />

       
        {/* <Route
        exact path = "/week"
        render = {props => <DayPosts {...props} dayPosts = {this.state.dayPosts} />}
        /> */}
        <Route
          path="/gigapets/:id"
          render={props => (
            <DayPost
              {...props}
              dayPosts={this.state.dayPosts}
              handleChanges={this.handleChanges}
              deleteDayPost={this.deleteDayPost}
              updateDayPost={this.updateDayPost}
            />
          )}
        />
      </div>
    );
  }
}

export default GigaPetList;
