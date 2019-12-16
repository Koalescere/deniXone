import React from "react";
import "./searchbar.css";

function Searchbar() {
  return(
   
    <div className="searchbar">
        <div className="search">
      <input className="" id="drop" type="text" placeholder="Search"
      aria-label="Search"></input>
      </div>
          <div className="drop">
      <select className="">
    <option selected>Bedrooms</option>
    <option value="1">1 bedroom</option>
    <option value="2">2 bedrooms</option>
    <option value="3">3 bedrooms</option>
    <option value="4">4 bedrooms</option>
  </select>
  <select className="">
    <option selected>Bedrooms</option>
    <option value="1">1 bedroom</option>
    <option value="2">2 bedrooms</option>
    <option value="3">3 bedrooms</option>
    <option value="4">4 bedrooms</option>
  </select>
  <select className="">
    <option selected>Bedrooms</option>
    <option value="1">1 bedroom</option>
    <option value="2">2 bedrooms</option>
    <option value="3">3 bedrooms</option>
    <option value="4">4 bedrooms</option>
  </select>
  <select className="">
    <option selected>Bedrooms</option>
    <option value="1">1 bedroom</option>
    <option value="2">2 bedrooms</option>
    <option value="3">3 bedrooms</option>
    <option value="4">4 bedrooms</option>
  </select>
  </div>
  
    </div>
  );
    }

    export default Searchbar;

    // form-control form-control-sm mr-3 w-10
    // form-control form-control-sm navselect
{/* <div classname="searchbar">
    <row>
        <col className="col-4">
        </col>
        <col className="col-8">
        </col>
    </row>
</div> */}
