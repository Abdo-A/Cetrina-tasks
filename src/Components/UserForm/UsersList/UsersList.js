import { List } from "antd";
import React from "react";

import "./UsersList.css";

const UsersList = props => {
  return (
    <div className="UsersList">
      <List
        header={<div className="UsersListHeader">Clients</div>}
        bordered
        dataSource={props.users}
        renderItem={item => (
          <List.Item>
            <div className="ListItem">
              <span>
                <span className="UsersListLabel">Name:</span> {item.name}
              </span>
              <span>
                <span className="UsersListLabel">Email:</span> {item.email}
              </span>
              <span>
                <span className="UsersListLabel">Phone:</span> {item.phoneNo}
              </span>
              <span>
                <span className="UsersListLabel">Selected Item:</span>
                {item.selectedItem}
              </span>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default UsersList;
