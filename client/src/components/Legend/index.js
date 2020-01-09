import React from "react";
import Slider3 from "../Slider2";

function Legend() {
  return (
    <container className="legendbox">
      <row>
        <col>
          <Slider3 />
        </col>
        {/* container to hold the multiple swatches */}
        <div classNamep="gradientbox">
          <div id="color1">$500,000</div>
          <div id="color2">$700,000</div>
          <div id="color3">$1,000,000</div>
          <div id="color4">$1,500,000</div>
          <div id="color5">$2,000,000</div>
          <div id="color6">$2,500,000</div>
          <div id="color7">$3,000,000</div>
          <div id="color8">$4,000,000</div>
          <div id="color9">$5,000,000</div>
          <div id="color10">$7,500,000</div>
          <div id="color11">$10,000,000</div>
          <div id="color12">$15,000,000</div>
          <div id="color13">$20,000,000</div>
          <div id="color14">$30,000,000</div>
          <div id="color15">$50,000,000</div>
          <div id="color16">$100,000,000</div>
        </div>
        <col></col>
      </row>
    </container>
  );
}

export default Legend;
