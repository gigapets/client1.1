import React from "react";

import DayPost from "./DayPost";

import "./DayPostContainer.css";

class DayPosts extends React.Component {
  render() {
    return (
      <div className="dayPosts">
        <h1>Your Days</h1>
        {this.props.dayPosts.map(dayPost => {
          console.log("this.props:", this.props);
          return (
            <div id="dayPost" className="dayPostContainer">
              <DayPost
                date={dayPost.date}
                name={dayPost.name}
                breakfast={dayPost.breakfast}
                bPoints={dayPost.bPoints}
                lunch={dayPost.lunch}
                lPoints={dayPost.lPoints}
                dinner={dayPost.dinner}
                dPoints={dayPost.dPoints}
                snacks={dayPost.snacks}
                sPoints={dayPost.spoints}
                key={dayPost.id}
                handleChanges={this.props.handleChanges}
                deleteDayPost={this.props.deleteDayPost}
                updateDayPost={this.props.updateDayPost}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

// contains the form for inputing the days meals and and the post once its made.

// it will have to render all the posts the back end stores, so make a fetch or get request with axios than render them

// it will also have two links, one to home(calandar) and another to your monster.

// axios get (posts)

// class MonthPosts extends React.Component {
//     render(){
//         return(
//             <div className = "monthPosts">
//             <h1>Your Days</h1>
//             {this.props.dayPosts.map(dayPost => {
//                 return (
//                     <div id = "monthPost" className = 'monthPostContainer'>
//                     <DayPost
//                     date = {dayPost.date}
//                     name = {dayPost.name}
//                     breakfast = {dayPost.breakfast}
//                     bPoints = {dayPost.bPoints}
//                     lunch = {dayPost.lunch}
//                     lPoints = {dayPost.lPoints}
//                     dinner = {dayPost.dinner}
//                     dPoints = {dayPost.dPoints}
//                     snacks = {dayPost.snacks}
//                     sPoints = {dayPost.spoints}
//                     />
//                     </div>
//                 );
//             })}

//                 </div>
//         );
//     }
// }
DayPost.defaultProps = {
  dayPosts: []
};
export default DayPosts;
//If rout = dayPosts, show date,
//If rout = week, show week start <=  data <= week end
