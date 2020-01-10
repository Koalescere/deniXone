import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import { Container, Col } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer";
// import ReactMapGl from "./components/ReactMapGl";
import Slider3 from "./components/Slider3";
import { render } from "react-dom";
import MapGL, { Source, Layer } from "react-map-gl";
import ControlPanel from "./control-panel";

import { dataLayer } from "./map-style.js";
import { updatePercentiles } from "./utils";
import { json as requestJson } from "d3-request";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw ";

map.on("load", function() {
  map.addLayer({
    id: "collisions",
    type: "circle",
    source: {
      type: "geojson",
      data: "" // replace this with the url of your own geojson
    },
    paint: {
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["number", ["get", "Casualty"]],
        0,
        4,
        5,
        24
      ],
      "circle-color": [
        "interpolate",
        ["linear"],
        ["number", ["get", "Casualty"]],
        0,
        "#2DC4B2",
        1,
        "#3BB3C3",
        2,
        "#669EC4",
        3,
        "#8B88B6",
        4,
        "#A2719B",
        5,
        "#AA5E79"
      ],
      "circle-opacity": 0.8
    }
  });
});

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <container className="sidemap">
            {/* <Slider3 /> */}
            <ReactMapGl />
          </container>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

{
  /* <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Timeline />
          <container className="sidemap">
            <ReactMapGl />
          </container>
          <Footer />
        </div>
      </Provider> */
}
{
  /* <row className="listmap">
<Col xs={2}>
  <Sidebar />
</Col>
<Col md={8}>
  <ReactMapGl />
</Col>
</row> */
}
