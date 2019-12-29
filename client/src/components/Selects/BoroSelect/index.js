import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../Selects.css";

const BoroSelect = props => {
  return (
    <div>
      <FormGroup>
        {/* <Label for="exampleSelect" className="selectlabel">
          Select
        </Label> */}
        <Input
          type="select"
          className="Selex"
          // name="select"
          bsSize="sm"
          id="exampleSelect"
          placeholder="sm"
        >
          <option className="Selex">1</option>
          <option className="Selex">2</option>
          <option className="Selex">3</option>
          <option className="Selex">4</option>
          <option className="Selex">5</option>
        </Input>
      </FormGroup>
    </div>
  );
};

export default BoroSelect;
