import React, { Component } from "react";
import MapGL from "react-map-gl";

const mapController = MyMapController;

function MyMapController() {
  return <ReactMapGL controller={mapController} />;
}

export default MyMapController;
