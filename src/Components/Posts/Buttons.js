import React from "react";

const Buttons = props => {
  return (
    <div>
      <button onClick={e => props.deletePost(e, props.id)}>Delete</button>
      {!props.isEditing ? (
        <button onClick={props.toggleEdit}>Update</button>
      ) : (
        <button onClick={e => props.updatePost(e, props.id, props.reset())}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Buttons;
