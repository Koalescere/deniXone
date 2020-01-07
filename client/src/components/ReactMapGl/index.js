import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import Mapmenu from "../Mapmenu";

var TOKEN =
  
"pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw";
function ReactMapGl() {
  const [viewport, setViewport] = useState({
    isFullscreen: true,

   
    latitude: 40.762,
    longitude: -73.943,
    zoom: 13.05

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
        mapStyle=
        // "mapbox://styles/seanleifhellier/ck4wtai8j0f0n1cpa682uw9h0"
        "mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      />
      <Mapmenu />
    </div>
  );
}

export default ReactMapGl;
