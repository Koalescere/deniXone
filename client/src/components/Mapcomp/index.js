import React from "react";
import "./Map.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  // "pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw";

  "pk.eyJ1Ijoic2VhbmxlaWZoZWxsaWVyIiwiYSI6ImNrNDV5anVzZDBkdjczbHA1dW5rNHNwcmEifQ.iSbpiPjqUBw2n881PqsbuQ";

class Mapcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -73.8984,
      lat: 40.6891,
      zoom: 9.74
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/seanleifhellier/ck4wtai8j0f0n1cpa682uw9h0",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('mousemove', function (e) {
      // var states = map.queryRenderedFeatures(e.point, {
      //   layers: ['statedata']
      // });
      console.log("mosemove")
      // console.log(e);
      var features = map.queryRenderedFeatures(e.point);
      // console.log(features)
      console.log(features[0] ? features[0].properties.avg_sales : "");
      console.log(features[0] ? features[0].properties.ntaname : "")
    });
    // to add the legend and mouseover effects
    map.on('load', function () {
      var layers = ['0-10', '10-20', '20-50', '50-100', '100-200', '200-500'];
      var colors = ['#c7201a', '#0d9118', '#bcea53', '#cbed40', '#1cca2a', '#1cca2a'];

      // for (i = 0; i < layers.length; i++) {
      //   var layer = layers[i];
      //   var color = colors[i];
      //   var item = document.createElement('div');
      //   var key = document.createElement('span');
      //   key.className = 'legend-key';
      //   key.style.backgroundColor = color;

      //   var value = document.createElement('span');
      //   value.innerHTML = layer;
      //   item.appendChild(key);
      //   item.appendChild(value);
      //   legend.appendChild(item);
      // }

      // map.on('mousemove', function (e) {
      //   var sales = map.queryRenderedFeatures(e.point, {
      //     layers: ['nyc-sales']
      //   });

      //   if (sales.length > 0) {
      //     document.getElementById('pd').innerHTML = '<h3><strong>' + features[0].properties.ntaname + '</strong></h3><p><strong><em>' + features[0].properties.avg_sales + '</strong> average sales / neighborhood</em></p>';
      //   } else {
      //     document.getElementById('pd').innerHTML = '<p>Hover over a neighborhood!</p>';
      //   }
      // });

    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div >
    );
  }
}

export default Mapcomp;
