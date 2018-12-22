import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="friendCard ml-sm-5">
      <div
        className="img-container"
        onClick={() => props.handleClick(props.id)}
        id={props.name}
      >
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
