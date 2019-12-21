import React from "react";
import "./Welcomejumbo.css";

function Welcomejumbo() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4 head">
          DENI<strong className="cross">X</strong>ONE
        </h1>
        <p className="lead">
        DENIXONE is a visual tool designed to show trends in property values.  
        </p>
        {/* <hr className="my-4" /> */}
        <p className="follows">
         Built upon our database of current and historical real estate sales. DENIXONE provides   
        </p>
        <p className="follows">
          <a className="btn btn-primary btn-lg" href="./books" role="button">
            Start your search{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Welcomejumbo;
