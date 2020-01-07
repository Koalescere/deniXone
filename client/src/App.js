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
import Sidebar from "./components/Sidebar";
// import Timeline from "./components/Timeline";

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
          {/* <Timeline /> */}
          <container className="sidemap">
            <row>
              <Col>
                <Sidebar />
              </Col>
              <Col>
                <ReactMapGl />
              </Col>
            </row>
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
