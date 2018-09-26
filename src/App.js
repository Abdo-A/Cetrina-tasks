import React, { Component } from "react";

import HeaderAndMainMenu from "./Components/HeaderAndMainMenu/HeaderAndMainMenu";
import Routes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
