import React, { Component } from 'react';
import './payment.css';
import { Link } from 'react-router-dom';
class Payment extends Component {

    render() {

        return (
            <div className="App">
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card">
                                <h6>Offers</h6>
                            </div><br /><br />
                            <div className="paymentMode">
                                <h5>Choose Payment Mode</h5>
                            </div>
                            <hr />
                        </div>
                        <div className="col-sm-4" id="rightside">
                            <h6><strong>PRICE DETAILS</strong></h6>
                            <hr />
                            <div className="row">
                                <div className="col-sm-6">
                                    <div>Order Total</div>
                                    <div>Delivery Charge</div>
                                </div>
                                <div className="col-sm-6">
                                    <div>Rs 600</div>
                                    <div>Rs 50</div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-6">
                                    <strong>Total</strong>
                                </div>
                                <div className="col-sm-6">
                                    Rs 650
                                </div>
                            </div><br /><br />
                            <h4><strong>DELIVER TO:</strong></h4>
                            <div className="row">
                                <div className="col">
                                    <h5><strong>MD IRFAN(Default)</strong></h5>
                                    <h6>E-246/5, Shaheen Bagh Okhla, Near Jasola Vihar</h6>
                                    <h6>Abul Fazal Enclave-2</h6>
                                    <h6>South Delhi-110025</h6>
                                    <h6>Delhi</h6>
                                    <h6>Mobile: 9836372183</h6>
                                    <Link id="addressLink" to="/address">Change Address</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Payment;