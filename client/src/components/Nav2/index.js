import React from "./node_modules/react";
import "./dropdownbar.css";

function Nav2() {
  return (
    <div className="dropbar">
      <select class="custom-select navselect">
    <option selected>Bedrooms</option>
    <option value="1">1 bedroom</option>
    <option value="2">2 bedrooms</option>
    <option value="3">3 bedrooms</option>
    <option value="4">4 bedrooms</option>
  </select>
     </div>
  );
}

export default Nav2;


