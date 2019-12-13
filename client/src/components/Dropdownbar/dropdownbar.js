import React from "react";
import "./Dropdownbar.css";

function Dropdownbar() {
  return (
    <div>
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

export default Dropdownbar;


