import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="title col-sm-7 col-m-6">{props.children}</h1>
        <h3 className="col-sm-3 title">Score: {props.score}</h3>
      </div>
    </div>
  );
}

export default Header;
