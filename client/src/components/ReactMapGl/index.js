import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import Mapmenu from "../Mapmenu";

var TOKEN =
  "pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw";
// var mapStyle = "mapbox://styles/daniel218/ck4e9kqxn12kv1crxnwha3k7o";
function ReactMapGl() {
  const [viewport, setViewport] = useState({
    isFullscreen: true,

    // width: 100,
    // height: 400,
    latitude: 40.651166,
    longitude: -73.992694,
    zoom: 9.5
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        className="mapContainer"
        width="100vw"
        height="42vw"
        mapStyle="mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      />
      <Mapmenu />
    </div>
  );
}

export default ReactMapGl;
