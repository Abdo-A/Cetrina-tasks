import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import HeaderAndMainMenu from "./Components/HeaderAndMainMenu/HeaderAndMainMenu";
import Intro from "./Components/Intro/Intro";
import ObjectBox from "./Components/ObjectBox/ObjectBox";
import UserForm from "./Components/UserForm/UserForm";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Intro} />
        <Switch>
          <Route path="/header" component={HeaderAndMainMenu} />
          <Route path="/objectBox" component={ObjectBox} />
          <Route path="/userForm" component={UserForm} />
        </Switch>
      </div>
    );
  }
}
