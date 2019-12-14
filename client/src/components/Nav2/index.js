import React from "react";
import "./dropdownbar.css";

function Nav2() {
  return (
    <div>

      <input className="form-control form-control-md mr-3 w-100" type="text" placeholder="Search"
      aria-label="Search"></input>
    <i className="fas fa-search" aria-hidden="true"></i>

<select className="custom-select navselect">
    <option selected>Bedrooms</option>
    <option value="1">1 bedroom</option>
    <option value="2">2 bedrooms</option>
    <option value="3">3 bedrooms</option>
    <option value="4">4 bedrooms</option>
  </select>

  <select className="custom-select">
      <option selected>Price Range</option>
      <option value="1">$300,000 to $400,000</option>
      <option value="2">$400,000 to $500,000</option>
      <option value="3">$500,000 to $600,000</option>
      <option value="4">$600,000 to $700,000</option>
      <option value="5">$700,000 to $800,000</option>
      <option value="6">$800,000 to $900,000</option>
      <option value="7">$900,000 to $1,000,000</option>
      <option value="8">$1,250,000 to $1,500,000</option>
      <option value="9">$1,500,000 to $2,000,000</option>
    </select>

    <select className="custom-select navselect">
        <option selected>Residence type</option>
        <option value="1">Houses</option>
        <option value="2">Condo/Condo</option>
        <option value="3">Apartment</option>
        <option value="4">Multi-family</option>
        <option value="5">Townhouses</option>
        <option value="6">Lots/Land</option>
        <option value="7">Manufactured</option>
      </select>

  </div>

  );
}

export default Nav2;


