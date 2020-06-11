import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import customStyle from "./login.module.css";
import axios from "../../axiosConfig";
import { Formik } from "formik";
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
  login = (values, history) => {
    //   alert(this.state.email + ' ' +this.state.password)
    // event.preventDefault();
    // const params = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    axios
      .post("userLogin", values)
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
              <div className="col-12 col-sm-4 p-5 border rounded">
                <h4 className="text-center">Login with Fashion Focus</h4>
                <div className="row no-gutters mb-3 mt-3">
                  <div className="col-sm-6">
                    <Link>
                      <button className={customStyle.login}>LOGIN</button>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link to="/register">
                      <button className={customStyle.register}>REGISTER</button>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <button className="btn btn-facebook w-100" type="button">
                      <span>facebook</span>
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button className="btn btn-google-plus w-100" type="button">
                      <span>Google</span>
                    </button>
                  </div>
                </div>
                <div className="row no-gutters mt-3">
                  <div className="col-sm-5">
                    <hr />
                  </div>
                  <div className="col-sm-2 text-center">OR</div>
                  <div className="col-sm-5">
                    <hr />
                  </div>
                </div>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log(values);

                    this.login(values, this.props.history);
                    setSubmitting(false);
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email().required("Email is required"),
                    password: Yup.string()
                      .required("Password is required")
                      .min(5, "Passwod is too short should be 6 character long")
                      .matches(
                        /(?=.*[0-9])/,
                        "Password should contain a number"
                      ),
                  })}
                >
                  {(props) => {
                    const {
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    } = props;

                    return (
                      <form onSubmit={handleSubmit}>
                        <InputField
                          name="email"
                          label="Email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className={errors.email && touched.email}
                        />
                        {errors.email && touched.email && (
                          <div className="text-red">{errors.email}</div>
                        )}

                        <InputField
                          name="password"
                          label="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className={errors.password && touched.password}
                        />
                        {errors.password && touched.password && (
                          <div className="text-red">{errors.password}</div>
                        )}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          variant="contained"
                          color="primary"
                          className="mt-3 p-2 w-100"
                        >
                          Login
                        </Button>
                      </form>
                    );
                  }}
                </Formik>
                <div className="row mt-3">
                  <div className="col-6 col-sm-6">
                    New to here ,&nbsp;
                    <Link to="/register" variant="contained" color="primary">
                      Sign Up
                    </Link>
                  </div>
                  <div className="col-6 col-sm-6">
                    <Link
                      className="float-right"
                      variant="contained"
                      color="primary"
                    >
                      Forgot Password
                    </Link>
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
