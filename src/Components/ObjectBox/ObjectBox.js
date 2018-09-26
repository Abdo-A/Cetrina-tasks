import { Card, Checkbox, Icon } from "antd";
import React, { Component } from "react";

import "./ObjectBox.css";

class ObjectBox extends Component {
  state = {
    object: null,
    chosenItems: []
  };

  componentDidMount() {
    this.setState(() => ({
      object: this.basicObject
    }));
  }

  basicObject = {
    name: "Sandwich ",
    quantity: "3",
    items: [
      {
        _id: "hKaXkHDNvRgdgZw8Dkju",
        name: "Burger"
      },
      {
        _id: "hKaXkHDNvRddaZw8Dkju",
        name: "beef"
      },
      {
        _id: "hKaXkHDNvRZwd8Dkju",
        name: "pizza"
      }
    ]
  };

  onItemChecked = e => {
    let item = e.target.value;
    let chosenItems = this.state.chosenItems;

    if (chosenItems.includes(item)) {
      let index = chosenItems.indexOf(item);
      chosenItems.splice(index, 1);
    } else {
      chosenItems.push(item);
    }

    this.setState(() => ({
      chosenItems: chosenItems
    }));
  };

  deleteBox = () => {
    this.setState(() => ({
      object: null
    }));
  };

  render() {
    return (
      <div className="objectBox">
        {/* Box */}
        {this.state.object ? (
          <Card
            title={this.state.object.name}
            extra={
              <Icon
                type="delete"
                theme="outlined"
                className="deleteIcon"
                title="Delete"
                onClick={this.deleteBox}
              />
            }
            style={{ width: 300, margin: "0 auto" }}
          >
            {this.state.object.items.map(item => (
              <div key={item._id} className="item">
                {item.name}
                <Checkbox value={item.name} onChange={this.onItemChecked} />
              </div>
            ))}
          </Card>
        ) : (
          ""
        )}
        {this.state.chosenItems.length > 0 && (
          <div>
            <b>Chosen Items:</b>
            <div className="chosenItemsContainer">
              {this.state.chosenItems.map(item => (
                <span key={item} className="chosenItem">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ObjectBox;
