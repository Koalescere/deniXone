import React from "react";
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhbmxlaWZoZWxsaWVyIiwiYSI6ImNrNDF5eHU5cjA2azYzZXRiaWMxajhvMW0ifQ.rbsRpnedC5remepOVsmxBg';

// class Map extends React.Component {
//     // Code from the next few steps will go here
// }

// ReactDOM.render(<Map />, document.getElementById('root'));


// class Map extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             lng: 40.75,
//             lat: -73.94,
//             zoom: 2
//         };
//     }
// componentDidMount() {
//     const map = new mapboxgl.Map({
//         container: this.mapContainer,
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [this.state.lng, this.state.lat],
//         zoom: this.state.zoom
//     });
// }
// }

function Map() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <div>
                        map
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Map;
