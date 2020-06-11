import React, { Component, Fragment } from "react";
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
    let addressLength;
    let addressCard;
    if (this.state.address.length === 0) {
      addressLength = 0;
    } else {
      addressCard = (
        <div className="col-md-6 col-sm-6 col-12 pl-2">
          {this.state.address.map((add) => (
            <div className={`border rounded p-4 ${cssClass.AddressDetail}`}>
              <div className="font-weight-normal">
                <div className="pt-2 pb-2">
                  <strong>
                    {add.firstName} {add.lastName}
                  </strong>
                </div>
                <div className="font-weight-light small">
                  {add.houseAndBuildingName}, {add.landmark}, {add.locality},
                  {add.cityOrDistrict}, {add.state}- {add.pincode}
                </div>
                <div className="pt-2">
                  Mobile: <strong>{add.mobile}</strong>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-sm-6 col-6">
                  <button
                    onClick={this.OpenAddressModal.bind(this, add._id)}
                    className={cssClass.editOrRemove}
                  >
                    Edit
                  </button>
                </div>
                <div className="col-sm-6 col-6">
                  <button className={cssClass.editOrRemove}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
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
                <div className={`col-md-7 col-sm-7 col-12`}>
                  <p className="text-capitalize">select delivery address</p>
                  <div className={`row  ${cssClass.AddressCard}`}>
                    {this.state.address.map((add) => (
                      <div className="col-md-6 col-sm-6 col-12 pl-2 pb-2">
                        <div
                          className={`border rounded p-4 ${cssClass.AddressDetail}`}
                        >
                          <div className="font-weight-normal">
                            <div className="pt-2 pb-2">
                              <strong>
                                {add.firstName} {add.lastName}
                              </strong>
                            </div>
                            <div className="font-weight-light small">
                              {add.houseAndBuildingName}, {add.landmark},{" "}
                              {add.locality},{add.cityOrDistrict}, {add.state}-{" "}
                              {add.pincode}
                            </div>
                            <div className="pt-2">
                              Mobile: <strong>{add.mobile}</strong>
                            </div>
                          </div>
                          <div className="row pt-4">
                            <div className="col-sm-6 col-6">
                              <button
                                onClick={this.OpenAddressModal.bind(
                                  this,
                                  add._id
                                )}
                                className={cssClass.editOrRemove}
                              >
                                Edit
                              </button>
                            </div>
                            <div className="col-sm-6 col-6">
                              <button
                                className={cssClass.editOrRemove}
                                onClick={this.deleteAddress}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="border rounded">
                        <div className={` ${cssClass.AddressButton}`}>
                          <button onClick={this.OpenAddressModal}>
                            <span className="d-block">
                              <i
                                className="fa fa-plus-circle fa-3x"
                                aria-hidden="true"
                              ></i>
                            </span>
                            ADD ADDRESS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Start Order Summary */}
                <div className="col-md-5 col-sm-5 col-12">
                  <PriceCalculate />
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
