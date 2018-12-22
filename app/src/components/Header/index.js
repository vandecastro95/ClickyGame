import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="title col-sm-8 col-m-2">{props.children}</h1>
        <h3 className="col-sm-2 title">Score: {props.score}</h3>
      </div>
    </div>
  );
}

export default Header;
