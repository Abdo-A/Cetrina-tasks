import { Form, Icon, Input, Button, Select } from "antd";
import React, { Component } from "react";

import "./UserForm.css";

const FormItem = Form.Item;
const Option = Select.Option;

class UserForm extends Component {
  state = {
    output: {},
    selectOptions: ["Sandwitch", "Potato", "Tomato"]
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Form submitted successfully");
        this.setState(
          () => ({
            output: values
          }),
          () => {
            console.log("state", this.state.output);
          }
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="userForm">
        <div className="formTitle">Form</div>
        {/* Form */}

        <Form onSubmit={this.onFormSubmit}>
          <FormItem label="Name">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Name"
              />
            )}
          </FormItem>

          <FormItem label="Phone number">
            {getFieldDecorator("phoneNo", {
              rules: [
                {
                  required: false,
                  message: "Please input your phone number!"
                }
              ]
            })(
              <Input
                type="number"
                prefix={
                  <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Phone Number"
              />
            )}
          </FormItem>

          <FormItem label="Email">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </FormItem>

          <FormItem label="Select">
            {getFieldDecorator("selectedItem", {
              rules: [{ required: true, message: "Please select!" }]
            })(
              <Select placeholder="Please select an option">
                {this.state.selectOptions
                  ? this.state.selectOptions.map(option => (
                      <Option key={option} value={option}>
                        {option}
                      </Option>
                    ))
                  : ""}
              </Select>
            )}
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

UserForm = Form.create({})(UserForm); //to receive the prop 'form'

export default UserForm;
