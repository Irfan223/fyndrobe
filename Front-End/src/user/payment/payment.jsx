import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cssClass from "./payment.module.css";
import axios from "../../axiosConfig";
import { css } from "styled-components";
import { Collapse, Input, Tabs, Button, Form,Select } from "antd";
const { Option } = Select;
const { Panel } = Collapse;
const PriceCalculate = React.lazy(() =>
  import("../price-calculate/price-calculate")
);
const { TabPane } = Tabs;
class Payment extends Component {
  constructor() {
    super();
    this.state = {
      years: [],
      amount: 0,
      activeKey: "0",
      data: {},
      paymentMode: "card",
      cardOptions: [],
      netbankingOptions: [],
      walletOpions: [],
      upi: false,
      emiOpions: [],
      cardless_emiOpions: [],
      paylaterOptions: [],
    };
    var currentYear = new Date().getFullYear();
    for (let i = currentYear; i < currentYear + 35; i++) {
      this.state.years.push(i);
    }
  }
  componentDidMount() {
    this.props.cartUpdate(this.props.location.pathname);
    this.initPaymentMethod();
  }
  initPaymentMethod() {
    var self = this;
    var razorpay = new window.Razorpay({
      key: "rzp_live_ILgsfZCZoFIKMb", // LIVE: rzp_live_ILgsfZCZoFIKMb TEST:rzp_test_38RonBOwwEa2xh
      // logo, displayed in the payment processing popup
      image: "https://i.imgur.com/n5tjHFD.png",
    });
    razorpay.once("ready", function (response) {
      //  console.log(response.methods['card_networks'])
      self.setState(
        {
          cardOptions: response.methods["card_networks"],
          netbankingOptions: response.methods["netbanking"],
          walletOpions: response.methods["wallet"],
          upi: response.methods.upi,
          upi_intent: response.methods.upi_intent,
          emi: response.methods.emi,
          cardless_emiOpions: response.methods["cardless_emi"],
          paylaterOptions: response.methods["paylater"],
        },
        () => {
          console.log(response.methods);
        }
      );
    });
  }
  onChange = (activeKey) => {
    this.setState(
      {
        activeKey: activeKey,
      },
      () => {}
    );
  };
  formOnChange = (event) => {
    console.log(event.target.name);
  };
  initPayment = (event) => {
    const params = {
      amount: (this.props.orderTotal + this.props.deliveryCharge) * 100,
      curreny: "INR",
    };
    axios.post("razorpay", params).then((res) => {
      var razorpay = new window.Razorpay({
        key: "rzp_test_38RonBOwwEa2xh", // LIVE: rzp_live_ILgsfZCZoFIKMb TEST:rzp_test_38RonBOwwEa2xh
        // logo, displayed in the payment processing popup
        image: "https://i.imgur.com/n5tjHFD.png",
      });
      var data = {};
      if (this.state.activeKey === "1") {
        // for card
        data = {
          amount: res.data.amount, // in currency subunits. Here 1000 = 1000 paise, which equals to ₹10
          order_id: res.data.order_id, // Replace with Order ID generated in Step 4
          email: "mdirfan844@gmail.com",
          contact: "9836372183",
          notes: {
            address: "Shaheen Bagh Okhla New Delhi",
          },
          method: "card",
          "card[name]": "Gaurav Kumar",
          "card[number]": "4111111111111111",
          "card[expiry_month]": "12",
          "card[expiry_year]": "20",
          "card[cvv]": "100",
        };
      } else if (this.state.activeKey === "2") {
        // for UPI
        data = {
          // useing Collect Flow
          amount: res.data.amount,
          order_id: res.data.order_id, //sample order_id. Generate orders using Orders API
          email: "gaurav.kumar@example.com",
          contact: "9123456789",
          method: "upi",
          upi: {
            flow: "intent",
          },
        };
        // using Intent Flow implemented later
      } else if (this.state.activeKey === "3") {
        // for wallet
        data = {
          amount: res.data.amount,
          order_id: res.data.order_id, //sample order_id. Generate orders using Orders API
          email: "gaurav.kumar@example.com",
          contact: "9123456789",
          method: "wallet",
          wallet: "mobikwik",
        };
      } else if (this.state.activeKey === "4") {
        data = {
          amount: res.data.amount, // in currency subunits. Here 1000 = 1000 paise, which equals to ₹10
          order_id: res.data.order_id, // Replace with Order ID generated in Step 4
          email: "mdirfan844@gmail.com",
          contact: "9836372183",
          notes: {
            address: "Shaheen Bagh Okhla New Delhi",
          },
          method: "netbanking",
          // method specific fields
          bank: "SBIN", // bank code
        };
      } else if (this.state.activeKey === "5") {
        // fro EMI on credit card
        data = {
          amount: res.data.amount, // in currency subunits. Here 1000 = 1000 paise, which equals to ₹10
          order_id: res.data.order_id, // Replace with Order ID generated in Step 4
          email: "gaurav.kumar@example.com",
          contact: "9123456789",
          method: "emi",
          emi_duration: 6, //defines the number of months for the EMI.
          "card[name]": "Gaurav Kumar",
          "card[number]": "5241810000000000",
          "card[expiry_month]": "12",
          "card[expiry_year]": "20",
          "card[cvv]": "100",
        };
      } else if (this.state.activeKey === "6") {
        // alert("cod");
      }
      razorpay.createPayment(data);
      razorpay.on("payment.success", function (resp) {
        // alert(resp.razorpay_payment_id);
        // alert(resp.razorpay_order_id);
        // alert(resp.razorpay_signature);
      }); // will pass payment ID, order ID, and Razorpay signature to success handler.

      razorpay.on("payment.error", function (resp) {
        // alert(resp.error.description);
      }); // will pass error object to error handler
    });
  };

  render() {
    localStorage.setItem("curUrl", this.props.match.url);

    return (
      <div className="App">
        <Header />
        <div className="body">
          <hr />
          <div className="container">
            <div className={`row `}>
              <div className={`col-md-8 col-sm-8 col-12  ${cssClass.CreditCardSection}`}>
                <div className="pt-4">
                  <strong>Choose Payment Mode</strong>
                </div>
                <br />
                <div>
                  <Collapse activeKey={this.state.activeKey} onChange={this.onChange} accordion expandIconPosition='right' className={cssClass.Collapse}>
                    <Panel
                      header="Credit Card/Debit Card"
                      key="1"
                      className="font-weight-bold"
                    >
                      <div className={`${cssClass.PaymentForm}`}>
                        {/* <div>
                          <strong>CREDIT/DEBIT CARD </strong>
                        </div>
                        <hr /> */}
                        <Form onChange={this.formOnChange} className="" layout='vertical'>
                          <Form.Item name="cardNumber" 
                          label='Card Number'
                          rules={[{
                            required:true,
                            message:'Card Number is mandatory'
                          }]}
                          >
                         
                          <Input placeholder='xxxx-xxxx-xxxx-xxxx'  size="large" />
                          </Form.Item>
                          <Form.Item  name="nameOnCard"
                          label='Name on Card'
                           rules={[{
                            required:true,
                            message:'Name On Card is mandatory'
                          }]}
                          >
                          <Input placeholder='Your Name'  size="large" />
                          </Form.Item>
                          <div className="row">
                            <div className="col-sm-6 col-6">
                            
                              <Select defaultValue="Expiry month" size='large' className={cssClass.selectDropdown}>
                                {/* <Option value="0"></Option> */}
                                <Option name="JAN" value="1">
                                  01 (JAN)
                                </Option>
                                <Option name="FEB" value="2">
                                  02 (FEB)
                                </Option>
                                <Option name="MAR" value="3">
                                  03 (MAR)
                                </Option>
                                <Option name="APR" value="4">
                                  04 (APR)
                                </Option>
                                <Option name="MAY" value="5">
                                  05 (MAY)
                                </Option>
                                <Option name="JUN" value="6">
                                  06 (JUN)
                                </Option>
                                <Option name="JUL" value="7">
                                  07 (JUL)
                                </Option>
                                <Option name="AUG" value="8">
                                  08 (AUG)
                                </Option>
                                <Option name="SEP" value="9">
                                  09 (SEP)
                                </Option>
                                <Option name="OCT" value="10">
                                  10 (OCT)
                                </Option>
                                <Option name="NOV" value="11">
                                  11 (NOV)
                                </Option>
                                <Option name="DEC" value="11">
                                  12 (DEC)
                                </Option>
                              </Select>
                            </div>
                            <div className="col-sm-6 col-6">
                              <Select defaultValue='Expiry year' size='large' className={cssClass.selectDropdown} >
                                {/* <Option value="0">Expiry year</Option> */}
                                {this.state.years.map((year) => (
                                  <Option>{year}</Option>
                                ))}
                              </Select>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-4 col-6">
                             
                              <Form.Item name='cvv' label='CVV'
                              rules={[{
                                required:true,
                                message:'Enter Your CVV Number'
                              }]}
                              >
                            
                              <Input placeholder="***" size='large' />
                              </Form.Item>
                             
                              <br />
                              <br />
                            </div>
                            <div className="col-sm-8 col-6">
                              <br />
                              Last 3 digits printed on the back of the card
                            </div>
                          </div>
                        </Form>
                        <Button
                          type="primary"
                          size='large'
                          htmlType='submit'
                          block
                          onClick={this.initPayment}
                          className={cssClass.payButton}
                        >
                          Pay Now
                        </Button>
                      </div>
                    </Panel>
                    <Panel header="UPI" key="2" className="font-weight-bold">
                      <div className={`pt-3 ${cssClass.PaymentForm}`}>
                      <Button
                          type="primary"
                          size='large'
                          htmlType='submit'
                          block
                          onClick={this.initPayment}
                          className={cssClass.payButton}
                        >
                          Pay Now
                        </Button>
                      </div>
                    </Panel>
                    <Panel
                      header="WALLETS"
                      key="3"
                      className="font-weight-bold"
                    >
                      <div className={`pt-3 ${cssClass.PaymentForm}`}>
                      <Button
                          type="primary"
                          size='large'
                          htmlType='submit'
                          block
                          onClick={this.initPayment}
                          className={cssClass.payButton}
                        >
                          Pay Now
                        </Button>
                      </div>
                    </Panel>
                    <Panel
                      header="NET BANKING"
                      key="4"
                      className="font-weight-bold"
                    >
                      <div className={`pt-3 ${cssClass.PaymentForm}`}>
                      <Button
                          type="primary"
                          size='large'
                          htmlType='submit'
                          block
                          onClick={this.initPayment}
                          className={cssClass.payButton}
                        >
                          Pay Now
                        </Button>
                      </div>
                    </Panel>
                    <Panel header="EMI" key="5" className="font-weight-bold">
                      <div className={`pt-3 ${cssClass.PaymentForm}`}>
                      <Button
                          type="primary"
                          size='large'
                          htmlType='submit'
                          block
                          onClick={this.initPayment}
                          className={cssClass.payButton}
                        >
                          Pay Now
                        </Button>
                      </div>
                    </Panel>
                    <Panel
                      header="CASH ON DELIVERY"
                      key="6"
                      className="font-weight-bold"
                    >
                      <div className={`pt-3 ${cssClass.PaymentForm}`}>
                      <Button
                          type="primary"
                          size='large'
                          htmlType='submit'
                          block
                          onClick={this.initPayment}
                          className={cssClass.payButton}
                        >
                          Pay Now
                        </Button>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-12">
                <PriceCalculate />
              </div>
            </div>
          </div>
        </div>
        <Footer />
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
    currentComponent: state.currentComponent,
  };
};
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
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
