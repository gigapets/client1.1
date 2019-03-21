import React from "react";



const DayPost = props => {
  return(
    <div className="dayPost">
    <h3>{props.date}</h3>
    <h3>{props.name}</h3>
    <p>Breakfast: {props.breakfast}</p>
    <p>Breakfast Score: {props.bPoints}</p>
    <p>Lunch:  {props.lunch}</p>
    <p>Lunch Score: {props.lPoints}</p>
    <p>Dinner: {props.dinner}</p>
    <p>Dinner Score: {props.dPoints}</p>
    <p>Snacks: {props.snacks}</p>
      <p>Snack Score: {props.sPoints}</p>
      
      <button onClick={event => { props.deleteDayPost(event, props.id) }}>Delete Post</button>
                    
    </div>
  );
};

// DayPost.defaultProps = {
//   date: "",
//   name: "",
//   breakfast: "",
//   bPoints: "",
//   lunch: "",
//   lPoints: "",
//   dinner: "",
//   dPoints: "",
//   snacks: "",
//   sPoints: ""
// };

export default DayPost;
