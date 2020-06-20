import React, { Component, Fragment } from "react";
import { Card, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import cssClass from "./address.module.css";
import { Link } from "react-router-dom";
import AddressModal from "./address-modal";
import Header from "../header/header";
import Footer from "../footer/footer";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import axios from "../../axiosConfig";
// import _ from 'lodash';
const cookies = new Cookies();
const PriceCalculate = React.lazy(() =>
  import("../price-calculate/price-calculate")
);
class Address extends Component {
  state = {
    isAddressModal: false,
    id: "",
    address: [],
    userId: cookies.get("userId"),
  };
  componentDidMount() {
    this.getAddress();
  }
  getAddress = () => {
  console.log("userid" + this.state.userId);
  
    this.props.cartUpdate(this.props.location.pathname);
    axios
      .get("address/" + this.state.userId)
      .then((res) => {
        console.log(res.data)
        const copyAddress = [];
        res.data.addresses.forEach((add) => {
          copyAddress.push(add);
        });
        this.setState(
          {
            address: copyAddress,
          },
          () => {
            console.log(this.state.address);
          }
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  deleteAddress = () => {
    axios
      .delete("address", this.state.userId)
      .then((res) => console.log(res.data.addresses._id));
  };
  OpenAddressModal = (id, event) => {
    this.setState({ isAddressModal: true, id: id });
  };
  CloseAddressModal = () => {
    this.setState({ isAddressModal: false });
  };
  render() {
    const { Meta } = Card;
    let addressLength;
    let AddNewAddressCard;
    if (this.state.address.length < 5) {
      AddNewAddressCard = (
        <div className={cssClass.AddNewAddressOption}>
          <Card
          className={cssClass.Card}
          style={{ width: 300, height: "250px" }}
          cover=""
        >
          <PlusCircleOutlined
            className={`${cssClass.PlusSign}`}
            onClick={this.OpenAddressModal}
          />
          <p className={`${cssClass.PlusSignText}`}>Add new address</p>
        </Card>
        </div>
      );
    } else {
    }
    return (
      <Fragment>
        <div className="App">
          <Header />

          <div className="body">
            {/* <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <Link
                  to="/cart"
                  className="breadcrumb-item active"
                  aria-current="page"
                >
                  Cart
                </Link>
                <span to="" className="breadcrumb-item">
                  Address
                </span>
                <span to="" className="breadcrumb-item">
                  payment
                </span>
              </ol>
            </nav> */}
              <div className={`container`}>
              <div className={`row`}>
                <div className={`col-md-8 col-sm-8 col-12`}>
                  <p className="text-capitalize">select delivery address</p>
                  <div className={`row  ${cssClass.AddressCard}`}>
                    {this.state.address.map((add) => (
                      <Card
                        key={add._id}
                        className={cssClass.Card}
                        style={{ width: '300px',height:'100%', margin: "5px" }}
                        cover=""
                        actions={[
                          <span className="d-flex justify-content-center">
                            <EditOutlined
                              className="pt-1 px-1"
                              key="edit"
                              onClick={this.OpenAddressModal.bind(
                                this,
                                add._id
                              )}
                            />
                            <span className="">Edit</span>
                          </span>,
                          <span className="d-flex justify-content-center">
                            <DeleteOutlined
                              className="pt-1 px-1"
                              key="delete"
                              onClick={() => alert("Deleted")}
                            />
                            <span className="">Delete</span>
                          </span>,
                        ]}
                      >
                        <Meta
                          title={
                            <div>
                              {add.firstName} {add.lastName}
                            </div>
                          }
                          description={
                            <div
                              className={`mt-2 p-0  ${cssClass.AddressDetails}`}
                            >
                              {/* <div>{add.houseAndBuildingName}, {add.landmark}, {add.locality}, {add.cityOrDistrict}, {add.state}, {add.pincode}</div> */}
                              <span>{add.houseAndBuildingName}</span>,
                              <span> {add.landmark}</span>,
                              <span>{add.locality}</span>,
                              <span>{add.cityOrDistrict}</span>,
                              <span> {add.state}</span>,
                              <span>{add.pincode}</span>
                              <p>
                                Mobile: <strong>{add.mobile}</strong>
                              </p>
                            </div>
                          }
                        />
                      </Card>
                    ))}
                  </div>

                  {AddNewAddressCard}
                </div>

                {/*Start Order Summary */}
                <div className="col-md-4 col-sm-4 col-12">
                  {/* <div className="row"> */}
                  <PriceCalculate />
                  {/* </div> */}
                </div>
                {/*end Order Summary */}
              </div>
            </div>
            <Footer />
            {/*  Start Address Modal  */}
            <AddressModal
              id={this.state.id}
              isOpen={this.state.isAddressModal}
              onRequestClose={this.CloseAddressModal}
            />
            {/*  end Address Modal  */}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cartUpdate: (currentComponent) => {
      dispatch({
        type: "UPDATE_COMPONENT",
        payload: {
          currentComponent,
        },
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Address);
