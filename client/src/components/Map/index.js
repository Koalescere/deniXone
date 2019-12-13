import React from "react";
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { Col, Row, Container } from "../Grid";
// import Jumbotron from "../components/Jumbotron";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhbmxlaWZoZWxsaWVyIiwiYSI6ImNrNDF5eHU5cjA2azYzZXRiaWMxajhvMW0ifQ.rbsRpnedC5remepOVsmxBg';

class Map extends React.Component {
    state = {
        lng: 40.75,
        lat: -73.94,
        zoom: 12
    };

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }
    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
            </div>
        )
    }

}

// function Map() {
//     return (
//         <Container fluid>
//             <Row>
//                 <Col size="md-12">
//                     <div>
//                         this is a map
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

export default Map;
