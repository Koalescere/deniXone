import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer";
import Newmap from "./components/Newmap";
import Mapcomp from "./components/Mapcomp";
import SearchCollapse from "./components/SearchCollapse";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <SearchCollapse />
          <Newmap />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
