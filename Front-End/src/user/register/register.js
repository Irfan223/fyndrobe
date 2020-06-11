import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import customStyle from "./register.module.css";
import axios from "../../axiosConfig";
import { Formik } from "formik";
import * as Yup from "yup";
const Header = React.lazy(() => import("../header/header"));
const Footer = React.lazy(() => import("../footer/footer"));
const InputField = React.lazy(() =>
  import("../../admin/views/TextFields/InputField")
);
class Register extends Component {
  state = {
    prevUrl: localStorage.getItem("curUrl"),
    // firstName: "",
    // lastName: "",
    // email: "",
    // mobile: "",
    // password: "",
  };

  //   onChange = (event) => {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //   };
  signUp = (values, history) => {
    // event.preventDefault();
    // const params = {
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   email: this.state.email,
    //   mobile: this.state.mobile,
    //   password: this.state.password,
    // };
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
              <div className="col-11 col-sm-4 p-5 border rounded">
                <h4 className="text-center">Login with Fashion Focus</h4>
                <div className={`row no-gutters ${customStyle.logintab}`}>
                  <div className="col-sm-6 col-6">
                    <Link to="/login">
                      <button className={customStyle.login}>LOGIN</button>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-6">
                    <Link>
                      <button className={customStyle.register}>REGISTER</button>
                    </Link>
                  </div>
                </div>

                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                    password: "",
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log(values);

                    this.signUp(values, this.props.history);
                    setSubmitting(false);
                  }}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                      .min(2, "First Name is Too Short!")
                      .max(20, "First Name is Too Long!")
                      .required("First Name is Required"),
                    lastName: Yup.string()
                      .min(2, "Last Name is Too Short!")
                      .max(20, "Last Name is Too Long!")
                      .required("Last Name is Required"),
                    email: Yup.string()
                      .email("Invalid email")
                      .required("Email is Required"),
                    mobile: Yup.string()
                      .matches("^[0-9]{10}$", 'Phone Number is Not Valid')
                      .required('Phone Number is Required'),
                    password: Yup.string()
                    .min(6, "Password Should be at least 6 digits")
                    .max(10, "Password Should not be more than 10 digits")
                    .required("Password is required"),
                    confirm_password: Yup.string()
                    .required("Confirm Password is Required")
                    .oneOf(
                      [Yup.ref("password"), null],
                      "Both password need to be the same"
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
                      <form onSubmit={handleSubmit} className={`${customStyle.form}`}>
                        {/* <div className="form-group has-feedback"> */}
                        <div className="row">
                          <div className="col-sm-6 col-12">
                          <InputField
                          name="firstName"
                          label="Fisrt Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          className={errors.firstName && touched.firstName}
                        />
                        {errors.firstName && touched.firstName && (
                          <div className="text-red">{errors.firstName}</div>
                        )}
                          </div>
                          <div className="col-sm-6 col-12">
                          <InputField
                          name="lastName"
                          label="Last Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          className={errors.lastName && touched.lastName}
                        />
                        {errors.lastName && touched.lastName && (
                          <div className="text-red">{errors.lastName}</div>
                        )}
                          </div>
                        </div>
                        <InputField
                          name="email"
                          label="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className={errors.email && touched.email}
                        />
                        {errors.email && touched.email && (
                          <div className="text-red">{errors.email}</div>
                        )}
                        <InputField
                          name="mobile"
                          label="Mobile"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.mobile}
                          className={errors.mobile && touched.mobile}
                        />
                        {errors.mobile && touched.mobile && (
                          <div className="text-red">{errors.mobile}</div>
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
                        <InputField
                          name="confirm_password"
                          label="Confilr Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirm_password}
                          className={
                            errors.confirm_password && touched.confirm_password
                          }
                        />
                        {errors.confirm_password &&
                          touched.confirm_password && (
                            <div className="text-red">{errors.confirm_password}</div>
                          )}
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-12">
                          <Button
                          type="submit"
                          disabled={isSubmitting}
                          variant="contained"
                          color="primary"
                          className={`mt-3 p-2 w-100 ${customStyle.button}`}
                        >
                          Register
                        </Button>
                          </div>
                          {/* /.col */}
                        </div><br />
                      </form>
                    );
                  }}
                </Formik>
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
