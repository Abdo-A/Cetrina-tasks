import React, { Component } from "react";

import Header from "./Header/Header";

import "./HeaderAndMainMenu.css";

class HeaderAndMainMenu extends Component {
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
      <div className="HeaderAndMainMenu">
        <Header
          sideBarVisible={this.state.sideBarVisible}
          toggleSideBar={this.toggleSideBar}
        />
      </div>
    );
  }
}

export default HeaderAndMainMenu;
