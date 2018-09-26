import { Slider } from "antd";
import React, { Component } from "react";

import "./Intro.css";

class Intro extends Component {
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
          defaultValue={0}
          step={50}
          autoFocus
          onChange={this.onSliderChange}
          style={{
            width: "500px",
            position: "absolute",
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      </div>
    );
  }
}

export default Intro;
