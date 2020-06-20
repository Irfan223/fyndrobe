import React, { Component } from "react";
import customCSS from "./price-calculate.module.css";
import axios from "../../axiosConfig";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import { Form, Input, Button } from "antd";
class PriceCalculate extends Component {
  state = {
    button: ''
  };
  componentDidMount() {
    // this.changeValue();
  }
  // componentDidUpdate(prevProps) {
  //   if (this.state.component != this.props.component)
  //     this.setState(
  //       {
         
  //         BagTotal: this.props.BagTotal,
  //         BagDiscount: this.props.BagDiscount,
  //         couponDiscount: this.props.couponDiscount,
  //         orderTotal: this.props.orderTotal,
  //         deliveryCharge: this.props.deliveryCharge,
  //         component: this.props.component,
  //       },
  //       () => {}
  //     );
  // }
  // changeValue = () => {
  //   this.props.changeValue(
  //     this.props.BagTotal,
  //     this.props.BagDiscount,
  //     this.props.couponDiscount,
  //     this.props.orderTotal,
  //     this.props.deliveryCharge
  //   );
  // };
  goToAddress = (event) => {
    // console.log(this.props.history)
    this.props.history.push("/address");
  };
  goToPayment = (event) => {
    this.props.history.push("/payment");
  };
  goToConfirmation = (event) => {
    this.props.history.push("/confirmation");
  };
  render() {
    // console.log( "price calculate order total " + this.props.orderTotal);
   console.log(this.props)
    let button;
    if (this.props.currentComponent === "/cart") {
      button = <button className={customCSS.button} onClick={this.goToAddress}>PLACE ORDER</button>;
    } else if (this.props.currentComponent === "/address") {
      button = <button className={customCSS.button} onClick={this.goToPayment}>CONTINUE</button>;
    } 
    return (
      <div className="App">
        <div className="body  mt-3">
        <div className="container-fluid">
            <div className="row">
              <div
                className={` col-md-11 col-sm-11 col-12 p-3 ${customCSS.coupon} border `}
              >
                <div className="p-1">
                  <strong>Have a Coupon?</strong>
                </div>

                <Form layout="inline">
                  <Form.Item className={customCSS.FormItem}>
                    <Input placeholder="Enter Coupon" />
                  </Form.Item>

                  <div className={` ${customCSS.submitButtonContainer}`}>
                    <Button
                      className={customCSS.submitButton}
                      type="default"
                      size="middle"
                      htmlType="submit"
                      style={{ outlineStyle: "none" }}
                    >
                      Apply
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
            <div className="">
              <div className="row">
                <div className=" col-md-11 col-sm-11 col-12  border p-3 mt-2">
                  <div className="">
                    <h6>BILLING DETAILS</h6>
                  </div>
                  <div className="row pb-2 text-muted small">
                    <div className="col-sm-6 col-6">
                      <div className="pb-2">Bag Total:</div>
                      <div className="pb-2">Bag Discount:</div>
                      <div className="pb-2">Coupon Discount:</div>
                      <div className="pb-2">Order Total:</div>
                      <div className="pb-2">Delivery Charges:</div>
                    </div>
                    <div className="col-sm-6 col-6">
                      <div className="float-right text-right">
                        <div className="pb-2">
                          &#8377; {this.props.BagTotal}
                        </div>
                        <div className="pb-2">
                          &#8377; {this.props.BagDiscount}
                        </div>
                        <div className="pb-2">
                          &#8377; {this.props.couponDiscount}
                        </div>
                        <div className="pb-2">
                          &#8377; {this.props.orderTotal}
                        </div>
                        <div className="pb-2">
                          &#8377; {this.props.deliveryCharge}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <div>
                        <strong>Total</strong>
                      </div>
                    </div>
                    <div className="col-sm-6 col-6">
                      <div className="float-right">
                        <strong>
                          &#8377;{" "}
                          {this.props.orderTotal + this.props.deliveryCharge}
                        </strong>
                      </div>
                    </div>
                  
                  
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-12">
                  <div className={customCSS.placeOrder}>{button}</div>
                  </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    BagTotal: state.BagTotal,
    BagDiscount: state.BagDiscount,
    couponDiscount: state.couponDiscount,
    orderTotal: state.orderTotal,
    deliveryCharge: state.deliveryCharge,
    currentComponent: state.currentComponent
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cartUpdate: (
      BagTotal,
      BagDiscount,
      couponDiscount,
      orderTotal,
      deliveryCharge,
    ) => {
      dispatch({
        type: "UPDATE_TOTAL",
        payload: {
          BagTotal,
          BagDiscount,
          couponDiscount,
          orderTotal,
          deliveryCharge,
        },
      });
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PriceCalculate));
