import React, { Component } from "react";

import Header from "./Components/Header/Header";

import "./App.css";

class App extends Component {
  state = {
    sideBarVisible: false
  };

  toggleSideBar = () => {
    this.setState(prevState => ({
      sideBarVisible: !prevState.sideBarVisible
    }));
  };

  render() {
    return (
      <div className="App">
        <Header
          sideBarVisible={this.state.sideBarVisible}
          toggleSideBar={this.toggleSideBar}
        />
      </div>
    );
  }
}

export default App;
