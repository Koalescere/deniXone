import React from "react";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
// import ReactMapGl from "./ReactMapGl";
import "./Slider3.css";

function log(value) {
  console.log(value); //eslint-disable-line
}

class Slider3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2018
    };
  }
  onSliderChange = value => {
    // dataSwitch(value);
    console.log(value);
    this.setState({
      value
    });
  };
  //        switchStyles = value => {
  //       switch (expression) {
  //         case 2018:
  //         console.log("switch 2017");
  // break;
  //         case 2017:
  //     console.log("switch 2017");
  // break;
  //         case 2016:
  //     console.log("switch 2017");
  // break;
  //         default:
  //     console.log("switch 2017");
  // }
  //     log(value);
  //     this.setState({
  //       value
  //     });

  onAfterChange = value => {
    console.log(value); //eslint-disable-line
  };

  render() {
    return (
      <div className="styleslider">
        <Slider
          id="slider"
          value={this.state.value}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
          defaultValue={2018}
          min={2016}
          max={2018}
          step={1}
          vertical
          barClassName="stylebar"
        />
      </div>
    );
  }
}
export default Slider3;
