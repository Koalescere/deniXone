import React, { useState } from "react";
import { Button, Fade, Navbar } from "reactstrap";
import "./Collapse.css";
import Pricerange from "../Selects/Pricerange";
import BoroSelect from "../Selects/BoroSelect";
import BuildingType from "../Selects/BuildingType";
import Zoned from "../Selects/Zoned";
import YearSelect from "../Selects/Year";

const SearchCollapse = props => {
  const [fadeIn, setFadeIn] = useState(true);

  const toggle = () => setFadeIn(!fadeIn);

  return (
    <div>
      <Navbar className="Snavbar navbar-expand-lg">
        <Button color="info" onClick={toggle} size="sm" className="filterbtn">
          Filter
        </Button>
        <Fade in={fadeIn} tag="h5" className="mt-3 fadebtn">
          <p className="labelz">PRICE</p>
          <Pricerange />
          <p className="labelz">BOROUGH</p>
          <BoroSelect />
          <p className="labelz">BUILDING TYPE</p>
          <BuildingType />
          <p className="labelz">ZONING</p>
          <Zoned />
          <p className="labelz">YEAR</p>
          <YearSelect />
          <Button
            color="info"
            onClick={"submit"}
            size="sm"
            className="filterbtn"
          >
            Search
          </Button>
        </Fade>
      </Navbar>
    </div>
  );
};

export default SearchCollapse;
