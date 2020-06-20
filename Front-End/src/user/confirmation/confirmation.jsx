import React, { Component } from "react";
import { Card, Button } from "antd";
import cssClass from "./confirmation.module.css";
const Header = React.lazy(() => import("../header/header"));
class Confirmation extends Component {
  render() {
    localStorage.setItem("curUrl", this.props.match.url);
    return (
      <div className="App">
        {/* <Header /> */}
        <div className="body">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-sm-10 col-12 ">
                <Card>
                  <div
                    className={` d-flex justify-content-center ${cssClass.BrandName}`}
                  >
                    <h2 className="">FyndRobe</h2>
                  </div>
                  <div
                    className={` d-flex flex-column align-items-center p-3 ${cssClass.Thanksmessage}`}
                  >
                    <h3 className="mb-4">Thanks for your purchase,Shakeeb!</h3>
                    <h4>Order Number: 0054866</h4>
                    <h4>Order Placed on : June 14,2020</h4>
                    <Button
                      className={`mt-4 ${cssClass.orderDetailsButton}`}
                      type="primary"
                      size="large"
                      shape="round"
                    >
                      View Order
                    </Button>
                  </div>
                  <div className="mt-3">
                    <h6>Hi,Shakeeb</h6>
                    <h6>
                      Thank you for shopping with Fashion Focus! We've received
                      your order and will get started on right away.We'll send
                      you an email when your order ships with tracking details
                      and expected delivery date
                    </h6>
                  </div>

                  {/* Billing Details  */}

                  <div
                    className={`d-flex justify-content-between mx-2 mt-5 ${cssClass.ShoppingDetails}`}
                  >
                    <div className={`${cssClass.BillingDetails}`}>
                      <h5>Billing Details</h5>
                      <p>
                        {" "}
                        <strong> Shakeeb Arsalan </strong>{" "}
                      </p>
                      <p>E246/5 Shaheenbagh Jamia Nagar PhaseII</p>
                      <p>Metro Station Jasola vihar Shaheenbagh</p>
                      <p>Delhi,110025</p>
                    </div>
                    <div className={`${cssClass.ShippingDetails}`}>
                      <h5>Shipping Details</h5>
                      <p>
                        <strong> Shakeeb Arsalan </strong>
                      </p>
                      <p>E246/5 Shaheenbagh Jamia Nagar PhaseII</p>
                      <p>Metro Station Jasola vihar Shaheenbagh</p>
                      <p>Delhi,110025</p>
                    </div>
                    <div className={`${cssClass.PaymentMethod} `}>
                      <h5>Card Type</h5>
                      <p>
                        <strong>Visa</strong>{" "}
                      </p>
                      <p>
                        xxxx-xxxx-xxxx-<strong>1234</strong>
                      </p>
                    </div>

                    <div className={`${cssClass.PaymentMethod}`}>
                      <h5>Total Amount</h5>
                      <p>
                        <strong>$1703</strong>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
