import React, { Component } from "react";
import { Link } from "react-router-dom";
import customStyle from "./register.module.css";
import axios from "../../axiosConfig";
import { Form, Input, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
const Header = React.lazy(() => import("../header/header"));
const Footer = React.lazy(() => import("../footer/footer"));
const InputField = React.lazy(() =>
  import("../../admin/views/TextFields/InputField")
);
class Register extends Component {
  state = {
    prevUrl: localStorage.getItem("curUrl"),
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  };

  //   onChange = (event) => {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //   };
  signUp = (values) => {
    // event.preventDefault();
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      mobile: this.state.mobile,
      password: this.state.password,
    });
    console.log(values);

    axios
      .post("userRegister", values)
      .then((res) => {
        alert(res.data["msg"]);
        if (res.data["code"] === 1) {
          this.props.history.push(this.state.prevUrl);
        }
      })
      .catch(function (res) {
        console.log(res);
      });
  };
  render() {
    return (
      <div className="App bg-white">
        <Header />
        <div className="body">
          <div className="container-fluid mt-5">
            <div className="row justify-content-center">
            <div
                className={`col-11 col-sm-4 p-5 border rounded ${customStyle.FormContainer}`}
              >
                <h4 className="text-center mb-4">
                  Register with FyndRobe
                </h4>
                <div className={`row no-gutters ${customStyle.logintab}`}>
                  <div className="col-sm-6 col-6">
                    <Link to="/login">
                      <Button block type="defult">
                        LOGIN
                      </Button>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-6">
                    <Link to="/login">
                      <Button block type="primary">
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>

                <Form name="nests-message" onFinish={this.signUp}>
                  <div className={`row mt-4 ${customStyle.Register} `}>
                    <div className="col-md-6 col-sm-6 col-12">
                      <Form.Item
                        name="firstName"
                        rules={[
                          {
                            type: "string",
                            required: true,
                            message: "First Name required!",
                            whitespace: true,
                          },
                        ]}
                      >
                        <Input maxLength="10" placeholder="Fisrt Name" />
                      </Form.Item>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <Form.Item
                        name="lastName"
                        rules={[
                          {
                            type: "string",
                            required: true,
                            message: "Last Name required!",
                            whitespace: true,
                          },
                        ]}
                      >
                        <Input maxLength="10" placeholder="Last Name" />
                      </Form.Item>
                    </div>

                    <div className="col-md-12 col-sm-12 col-12">
                      <Form.Item
                        name="mobile"
                        rules={[
                          {
                            required: true,
                            message: "Mobile is required",
                            pattern: new RegExp(/^[6-9][0-9]{9}$/),
                          },
                          () => ({
                            validator(rule, value) {
                              if (
                                !value ||
                                RegExp(/^[6-9][0-9]{9}$/).test(value)
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                "This is not a valid mobile number"
                              );
                            },
                          }),
                        ]}
                      >
                        <Input
                          addonBefore={"+" + 91}
                          style={{
                            width: "100%",
                          }}
                          // minLength="10"
                          maxLength="10"
                          placeholder="Mobile Number"
                        />
                      </Form.Item>
                    </div>

                    <div className="col-md-12 col-sm-12 col-12">
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: " Email is required!",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <MailOutlined className="site-form-item-icon" />
                          }
                          placeholder="Email"
                        />
                      </Form.Item>
                    </div>

                    <div className="col-md-12 col-sm-12 col-12">
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: " Password is required!",
                          },
                        ]}
                      >
                        <Input.Password
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          placeholder="Password"
                        />
                      </Form.Item>
                    </div>

                    <div className="col-md-12 col-sm-12 col-12">
                      <Form.Item
                        name="confirm_password"
                        rules={[
                          {
                            required: true,
                            message: " Please Confirm your password!",
                          },
                          ({ getFieldValue }) => ({
                            validator(rule, value) {
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
                                return Promise.resolve();
                              }

                              return Promise.reject(
                                "The two passwords that you entered do not match!"
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          placeholder="Confirm Password"
                        />
                      </Form.Item>
                    </div>
                    <div
                      className={`col-md-12 col-sm-12 col-12 ${customStyle.RegisterButton}`}
                    >
                      <Button
                        type="primary"
                        block
                        htmlType="submit"
                        className={customStyle.Button}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
