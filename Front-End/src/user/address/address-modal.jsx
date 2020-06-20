import React, { Component } from "react";
import cssClass from "./address-modal.module.css";
import Modal from "react-modal";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  AutoComplete,
} from "antd";
import { Link } from "react-router-dom";
import axios from "../../axiosConfig";
import InputText from "../../admin/views/TextFields/InputField";
import Cookies from "universal-cookie";
const cookies = new Cookies();
class AddressModal extends Component {
  state = {
    userId: cookies.get("userId"),
    firstName: "",
    lastName: "",
    mobile: "",
    houseAndBuildingName: "",
    locality: "",
    landmark: "",
    pincode: "",
    cityOrDistrict: "",
    state: "",
    country: "",
  };

  // changeHandler = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: values.name,
  //   });
  // };

  // onFinish = (values) => {

  //   console.log(this.state.firstName);

  // };
  onFinish = (values) => {
    // e.preventDefault();
    this.setState({
      firstName: values.firstName,
      lastName: values.lastName,
      mobile: values.mobile,
      houseAndBuildingName: values.houseAndBuildingName,
      locality: values.locality,
      landmark: values.landmark,
      pincode: values.pincode,
      cityOrDistrict: values.cityOrDistrict,
      state: values.state,
      country: values.country,
    });
    console.log(this.state);

    // for adding new address
    if (this.props.id === undefined || null) {
      axios
        .post("address", this.state)
        .then((res) => {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // for edit existing address
      axios
        .post("address", this.state)
        .then((res) => {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  render() {
    const { isOpen, onRequestClose, id } = this.props;
    // alert(id);

    return (
      <div>
        <Modal
          className={cssClass.AddressModal}
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          // overlayClassName={cssClass.AddressOverlay}
          style={{
            overlay: { background: "rgba(0,0,0,.5)" },
            content: {},
          }}
        >
          <h6 className="pl-3"> Add New Address</h6>
          <hr />
          {/* <div className={cssClass.CloseIcon}></div> */}
          <div className={cssClass.modalBody}>
            <Form
              // onChange={this.changeHandler}

              name="nest-message"
              onFinish={this.onFinish}

              // validateMessages={validateMessages}
            >
              <div className={` ${cssClass.AddressInputText}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-12">
                      <div className="row">
                        <div className="col-sm-6">
                          <Form.Item
                            name="firstName"
                            rules={[
                              {
                                required: true,
                                message: "First Name is required!",
                              },
                            ]}
                          >
                            <Input placeholder="First Name" />
                          </Form.Item>
                        </div>
                        <div className="col-sm-6">
                          <Form.Item
                            name="lastName"
                            rules={[
                              {
                                required: true,
                                message: "Last Name is required!",
                              },
                            ]}
                          >
                            <Input placeholder="Last Name" />
                          </Form.Item>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-12 col-xs-12">
                      <Form.Item
                        name="mobile"
                        rules={[
                          {
                            required: true,
                            message: "Phone Number is required",
                          },
                        ]}
                      >
                        <Input placeholder="Phone Number" />
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12 col-xs-12">
                      <Form.Item
                        name="houseAndBuildingName"
                        rules={[
                          {
                            required: true,
                            message:
                              "House number and building name is required!",
                          },
                        ]}
                      >
                        <Input placeholder="House number and building name" />
                      </Form.Item>

                      <Form.Item
                        name="locality"
                        rules={[
                          { required: true, message: "Locality is required!" },
                        ]}
                      >
                        <Input placeholder="Locality" />
                      </Form.Item>

                      <Form.Item
                        name="landmark"
                        rules={[
                          { required: true, message: "Land mark is required!" },
                        ]}
                      >
                        <Input placeholder="Land mark" />
                      </Form.Item>
                    </div>

                    <div className="col-sm-12 col-12">
                      <div className="row">
                        <div className="col-sm-6">
                          <Form.Item
                            name="pincode"
                            rules={[
                              {
                                required: true,
                                message: "Pincode is required!",
                              },
                            ]}
                          >
                            <Input placeholder="Pin code" />
                          </Form.Item>
                        </div>
                        <div className="col-sm-6">
                          <Form.Item
                            name="cityOrDistrict"
                            rules={[
                              {
                                required: true,
                                message: "City or district is required!",
                              },
                            ]}
                          >
                            <Input
                              placeholder="City or district"
                              // className="col-sm-5 col-xs-5"
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`col-sm-12 col-12 ${cssClass.AddressCountry}`}
                    >
                      <div className="row">
                        <div className="col-sm-6">
                          <Form.Item
                            name="state"
                            rules={[
                              {
                                required: true,
                                message: "State  is required!",
                              },
                            ]}
                          >
                            <Input placeholder="State" />
                          </Form.Item>
                        </div>
                        <div className="col-sm-6">
                          <Form.Item
                            name="country"
                            rules={[
                              {
                                required: true,
                                message: "Country  is required!",
                              },
                            ]}
                          >
                            <Input placeholder="Country" />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`d-flex justify-content-start ml-3 ${cssClass.SaveCancelButton}`}
                >
                  <div className="">
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        shape="round"
                        size="large"
                        // onClick={this.onSubmit}
                      >
                        SAVE
                      </Button>
                    </Form.Item>
                  </div>

                  <div className="">
                    <Form.Item>
                      <Button
                        type="danger"
                        htmlType="reset"
                        shape="round"
                        size="large"
                        onClick={onRequestClose}
                      >
                        CANCEL
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddressModal;
