import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import { Container, Col } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer";
import ReactMapGl from "./components/ReactMapGl";
import Slider3 from "./components/Slider3";
// import Legend from "./components/Legend";

// import Newmap from "./components/Newmap";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <container className="sidemap">
            <Slider3 />
            <ReactMapGl />
            {/* <Legend /> */}
          </container>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

{
  /* <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Timeline />
          <container className="sidemap">
            <ReactMapGl />
          </container>
          <Footer />
        </div>
      </Provider> */
}
{
  /* <row className="listmap">
<Col xs={2}>
  <Sidebar />
</Col>
<Col md={8}>
  <ReactMapGl />
</Col>
</row> */
}
