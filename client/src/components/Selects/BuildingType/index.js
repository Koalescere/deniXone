import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "../Selects.css";

const BuildingType = props => {
  return (
    <FormGroup>
      <Label for="exampleSelect" className="selectlabel">
        Building Type
      </Label>
      <Input
        type="select"
        className="Selex"
        bsSize="sm"
        name="select"
        id="exampleSelect"
        placeholder="sm"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
  );
};

export default BuildingType;
