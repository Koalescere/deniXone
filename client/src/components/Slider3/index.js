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
};
  // onSliderChange = value => {
  //   log(value);
  //   this.setState({
  //     value
  //   });

onSliderChange = value => {
      switch (this.setState({value})) {
        case 2018:
    mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd
          break;
        case 2017:
    mapbox://styles/daniel218/ck52f7j01lii71co4cpbzl8kp
          break;
        case 2016:
    mapbox://styles/daniel218/ck52f6er28cdi1cp5jfxfe7q3
          break;
        default:
    mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd
      }





   






    // switchStyles = value => {
    //   switch (expression) {
    //     case 2018:
    // mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd
    //       break;
    //     case 2017:
    // mapbox://styles/daniel218/ck52f7j01lii71co4cpbzl8kp
    //       break;
    //     case 2016:
    // mapbox://styles/daniel218/ck52f6er28cdi1cp5jfxfe7q3
    //       break;
    //     default:
    // mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd
    //   }
  
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
