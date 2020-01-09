// import React from "react";
// import { Slider } from "rsuite";
// import "rsuite/dist/styles/rsuite-default.css";
// import "./Slider2.css";

// export const Slider2 = () => {
//   const style = {
//     height: 400
//   };

//   // Template.myTemplate.rendered = function(){
//   //   document.getElementById("slider").oninput = function() {
//   //       slidervalue()
//   //   };
//   //   }
//   //   function slidervalue() {
//   //      var val = document.getElementById("slider").value //gets the oninput value
//   //      document.getElementById('output').innerHTML = val //displays this value to the html page
//   //      console.log(val)
//   //   }

//   return (
//     <div className="styleslider" id="sliderbar">
//       <h2>
//         YEAR: <label id="active-year">2018</label>
//       </h2>
//       <input
//         id="slider"
//         class="row"
//         type="range"
//         min="2016"
//         max="2018"
//         step="1"
//         value="2018"
//       ></input>
//       {/* </input>
//       <output id="output"></output> */}
//       {/* <Slider id={slider} defaultValue={0} min={2016} step={1} max={2018} vertical /> */}
//     </div>
//   );
// };

// document.getElementById('slider').addEventListener('input', function(e) {
//   var Year = parseInt(e.target.value);
//   // update the map
//   map.setFilter('sales', ['==', ['number', ['get', 'year']], year]);

//   // converting 0-23 year to AMPM format
//   // var ampm = year >= 12 ? 'PM' : 'AM';
//   // var year12 = year % 12 ? year % 12 : 12;

//   // update text in the UI
//   document.getElementById('active-year').innerText = ;
// });

// export default Slider2;
