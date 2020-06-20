import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../axiosConfig";
import customStyle from "./login.module.css";
import { Form, Input, Button } from "antd";
import {
  FacebookFilled,
  FacebookOutlined,
  LockOutlined,
  MailOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import * as Yup from "yup";
const Header = React.lazy(() => import("../header/header"));
const Footer = React.lazy(() => import("../footer/footer"));
const InputField = React.lazy(() =>
  import("../../admin/views/TextFields/InputField")
);

class Login extends Component {
  state = {
    prevUrl: localStorage.getItem("curUrl"),
    email: "",
    Password: "",
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
   login = (values) => {
    // alert(this.state.email + " " + this.state.password);
    // const params = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    this.setState({
      email: values.email,
      password: values.password,
    });
    console.log(values);

    axios
      .post("userLogin", this.state)
      .then((res) => {
        console.log(res.data["code"]);
        if (res.data["code"] === 1) {
          localStorage.setItem("isLoggedIn", true);
          this.props.history.push(this.state.prevUrl);
        } else if (res.data["code"] === 2) {
        } else if (res.data["code"] === 3) {
          alert(res.data["message"]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    // console.log(this.state.prevUrl);
    return (
      <div className="App bg-white">
        <Header />
        <div className="body">
          <div className="container-fluid mt-5">
            <div className="row justify-content-center">
            <div className="col-md-4 col-sm-4 col-12 ">
                <div
                  className={`p-5 border rounded ${customStyle.FormContainer}`}
                >
                  <div className="row">
                    <div className="col md-12 col-sm-12 col-12">
                      <h4 className="text-center">Login with FyndRobe</h4>
                    </div>
                  </div>
                  <div className="row no-gutters my-3">
                    <div className="col-md-6 col-sm-6 col-6">
                      <Link to="/login">
                        <Button block type="primary">
                          LOGIN
                        </Button>
                      </Link>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6">
                      <Link to="/register">
                        <Button block type="default">
                          REGISTER
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`row no-gutters mt-4 ${customStyle.FacebookGoogle}`}
                  >
                    <div className=" col-md-6 col-sm-6 col-6">
                      <a href="http://www.facebook.com">
                        <Button
                          block
                          style={{
                            background: "#3b5998 ",
                            color: "white",
                            outline: "none",
                          }}
                          icon={<FacebookFilled />}
                        >
                          facebook
                        </Button>
                      </a>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6">
                      <a href="http://www.google.com">
                        <Button
                          block
                          // shape="round"
                          icon={<GoogleOutlined />}
                          style={{
                            background: "#db3236 ",
                            color: "white",
                            outline: "none",
                          }}
                        >
                          Google
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className={`row no-gutters mt-2 ${customStyle.Or}`}>
                    <div className=" col-md-5 col-sm-5 col-5 ">
                      <hr />
                    </div>
                    <div className="col-md-2 col-sm-2 col-2 text-center">
                      OR
                    </div>
                    <div className="col-md-5 col-sm-5 col-5 ">
                      <hr />
                    </div>
                  </div>
                  <Form
                    name="nest-message"
                    onFinish={this.login}
                    className={customStyle.Form}
                  >
                    <div className={`row no-gutters `}>
                      <div className="col-md-12 col-sm-12 col-12">
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Email is required!",
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
                              message: "Password is required!",
                            },
                          ]}
                        >
                          <Input.Password
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Item>
                      </div>
                      <div className="col-md-12 col-sm-12 col-12 mb-4">
                        <Button
                          type="primary"
                          block
                          htmlType="submit"
                          className={customStyle.LoginButton}
                        >
                          Login
                        </Button>
                      </div>
                    </div>
                  </Form>

                  <div
                    className={`d-flex justify-content-between ${customStyle.SignUp}`}
                  >
                    <div className="">
                      <Link to="/register">SignUp</Link>
                    </div>
                    <div className="">
                      <Link to="">Forgot password</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
