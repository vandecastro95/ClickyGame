import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-6"></div>
        <h5 className="col-sm-6 footer mt-2">{props.children}</h5>
      </div>
    </div>
  );
}

export default Footer;
