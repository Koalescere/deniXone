import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer";
import Mapcomp from "./components/Mapcomp";
// import Searchbar from "./components/searchbar";
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
          <Container>
            <Mapcomp />
            <Footer />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
