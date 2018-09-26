import { Slider } from "antd";
import React, { Component } from "react";

import "./Intro.css";

class Intro extends Component {
  state = {
    sliderValue: 0
  };

  componentWillMount() {
    this.props.history.push("/header");

    switch (this.props.location.pathname) {
      case "/header":
        this.setState(() => ({
          sliderValue: 0
        }));
        break;

      case "/objectBox":
        this.setState(() => ({
          sliderValue: 50
        }));
        break;

      case "/userForm":
        this.setState(() => ({
          sliderValue: 100
        }));
        break;

      default:
        break;
    }
  }

  onSliderChange = value => {
    switch (value) {
      case 0:
        this.props.history.push("/header");
        break;
      case 50:
        this.props.history.push("/objectBox");
        break;
      case 100:
        this.props.history.push("/userForm");
        break;

      default:
        break;
    }
  };

  sliderMarks = {
    0: {
      style: {
        color: "#f50"
      },
      label: <strong>Header</strong>
    },

    50: {
      style: {
        color: "#f50"
      },
      label: <strong>ObjectBox</strong>
    },

    100: {
      style: {
        color: "#f50"
      },
      label: <strong>UserForm</strong>
    }
  };

  render() {
    return (
      <div>
        <Slider
          marks={this.sliderMarks}
          defaultValue={this.state.sliderValue}
          step={50}
          autoFocus
          onChange={this.onSliderChange}
          style={{
            width: "500px",
            position: "absolute",
            top: "85%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      </div>
    );
  }
}

export default Intro;
