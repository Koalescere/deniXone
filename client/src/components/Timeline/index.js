import React from "react";
import ReactDOM from "react-dom";
import Slider, { Range } from "rc-slider";
// We can just import Slider or Range to reduce bundle size
// import Slider from "rc-slider/lib/Slider";
// import Range from "rc-slider/lib/Range";
import "./Timeline.css";

// const Slider = require("rc-slider");
// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);

class Timeline extends Slider {
  render() {
    return (
      <div class="slideDiv">
        {/* <h2 class="h2slider">TIMELINE</h2> */}
        <div>
          TIMELINE
          <Slider />
        </div>
      </div>
    );
  }
}
export default Timeline;
