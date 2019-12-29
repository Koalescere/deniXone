import React, { useState } from "react";
import { Button, Fade } from "reactstrap";

import "./Collapse.css";
import Pricerange from "../Selects/Pricerange";
import BoroSelect from "../Selects/BoroSelect";

import React, { useState } from "react";
import { Button, Fade } from "reactstrap";

const SearchCollapse = props => {
  const [fadeIn, setFadeIn] = useState(true);

  const toggle = () => setFadeIn(!fadeIn);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Toggle Fade
      </Button>
      <Fade in={fadeIn} tag="h5" className="mt-3">
        <Pricerange />
        <BoroSelect />
      </Fade>
    </div>
  );
};

export default SearchCollapse;
