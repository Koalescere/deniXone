import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import Slider3 from "../Slider3";

var TOKEN =
  "pk.eyJ1Ijoic2VhbmxlaWZoZWxsaWVyIiwiYSI6ImNrNDV5anVzZDBkdjczbHA1dW5rNHNwcmEifQ.iSbpiPjqUBw2n881PqsbuQ";
// "pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw";

var styleHolder = "";

function ReactMapGl() {
  const [mapStyle, setMapStyle] = useState(2018);

  const [viewport, setViewport] = useState({
    isFullscreen: true,
    latitude: 40.762,
    longitude: -73.943,
    zoom: 13.05,
    mapboxApiAccessToken: { TOKEN }
  });

  function showShowStyle() {
    console.log(mapStyle);
    switch (mapStyle) {
      case 2016:
        return "mapbox://styles/seanleifhellier/ck53x0eyf04it1cl6tdcpr69c";
      case 2017:
        return "mapbox://styles/seanleifhellier/ck53x1ro30kye1co9c9u1gzvc";
      case 2018:
        return "mapbox://styles/seanleifhellier/ck53x36sg1rqv1ck59hy7zg6q";
      default:
        return "mapbox://styles/seanleifhellier/ck53x36sg1rqv1ck59hy7zg6q";
    }
  }

  return (
    <div>
      <ReactMapGL
        {...viewport}
        className="mapContainer"
        width="100vw"
        height="120vw"
        position="absolute"
        top="80px"
        mapStyle={showShowStyle()}
        // "mapbox://styles/daniel218/ck57oy76f0hhh1cmbv01ins8g"
        // "mapbox://styles/seanleifhellier/ck4wtai8j0f0n1cpa682uw9h0"
        // "mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      />
      <Slider3 setMapStyle={setMapStyle} mapStyle={mapStyle} />
    </div>
  );
}

export default ReactMapGl;
// 2016
// mapbox://styles/seanleifhellier/ck53x0eyf04it1cl6tdcpr69c
