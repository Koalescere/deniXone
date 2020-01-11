import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import Slider3 from "../Slider3";

var TOKEN =
  "pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw";

var styleHolder = "";

function ReactMapGl() {
  const [viewport, setViewport] = useState({
    isFullscreen: true,
    latitude: 40.762,
    longitude: -73.943,
    zoom: 13.05,
    mapboxApiAccessToken: { TOKEN }
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        className="mapContainer"
        width="100vw"
        height="120vw"
        position="absolute"
        top="80px"
        mapStyle="mapbox://styles/daniel218/ck57oy76f0hhh1cmbv01ins8g"
        // "mapbox://styles/seanleifhellier/ck4wtai8j0f0n1cpa682uw9h0"
        // "mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      />
      <Slider3 />
    </div>
  );
}

export default ReactMapGl;
