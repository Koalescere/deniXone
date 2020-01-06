import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

var TOKEN =
  "pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw";
// var mapStyle = "mapbox://styles/daniel218/ck4e9kqxn12kv1crxnwha3k7o";
function ReactMapGl() {
  const [viewport, setViewport] = useState({
    isFullscreen: true,

    // width: 100,
    // height: 400,
    latitude: 40.6891,
    longitude: -73.8984,
    zoom: 9
  });

  return (
    <ReactMapGL
      {...viewport}
      className="mapContainer"
      width="100vw"
      height="44vw"
      mapStyle="mapbox://styles/daniel218/ck4e9kqxn12kv1crxnwha3k7o"
      onViewportChange={setViewport}
      mapboxApiAccessToken={TOKEN}
    />
  );
}

export default ReactMapGl;
