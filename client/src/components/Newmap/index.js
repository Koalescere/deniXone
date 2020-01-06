import React, { Component } from "react";
import MapGL from "react-map-gl";
import Range from "../Range";
import "./Map.css";

var MapboxAccessToken =
  "pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw";

class Newmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullscreen: true,
      viewport: {
        latitude: 40.6891,
        longitude: -73.8984,
        zoom: 9,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    return (
      <div>
        <Range />
        <MapGL
          {...this.state.viewport}
          className="mapContainer"
          width="100vw"
          height="100vw"
          mapStyle="mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd"
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MapboxAccessToken}
        />
      </div>
    );
  }
}

export default Newmap;
