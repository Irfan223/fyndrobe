import React, { Component } from 'react';
import './address.css';
import { Link } from 'react-router-dom';
class Address extends Component {

    render() {

        return (
            <div className="App">
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div><strong>MD IRFAN(Default)</strong></div>
                                        <div className="address">
                                            <div>
                                                <div>E246/5, Shaheen Bagh Okhla, Jasola Vihar</div>
                                                <div>Abul Fazal Enclave Part-2</div>
                                                <div>South Delhi-110025</div>
                                                <div>Delhi</div>
                                            </div>
                                            <div>
                                                Mobile: <strong>9836372183</strong>
                                                <li>Cash On Delivery Available</li>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-6 col-sm-9">
                                                <button id="button">REMOVE</button>
                                            </div>
                                            <div className="col-6 col-sm-3">
                                                <button id="button">EDIT</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div><strong>MD IRFAN(Default)</strong></div>
                                        <div className="address">
                                            <div>
                                                <div>E246/5, Shaheen Bagh Okhla, Jasola Vihar</div>
                                                <div>Abul Fazal Enclave Part-2</div>
                                                <div>South Delhi-110025</div>
                                                <div>Delhi</div>
                                            </div>
                                            <div>
                                                Mobile: <strong>9836372183</strong>
                                                <li>Cash On Delivery Available</li>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-6 col-sm-9">
                                                <button id="button">REMOVE</button>
                                            </div>
                                            <div className="col-6 col-sm-3">
                                                <button id="button">EDIT</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4" id="rightside">
                            <div className="delivery"> ESTIMATED DELIVERY DATE </div><br />
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src={require("../../assets/images/t-shirt.jpg")} />
                                </div>
                                <div className="col-sm-6">
                                    <div className="deliveryFor">
                                        <div><strong>10 Nov 2019</strong></div>
                                        <div>Eligible for Cash on Delivery</div>
                                    </div>
                                </div>
                            </div><br />
                            <div className="priceDetails">PRICE DETAILS</div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-8">
                                    <div>Order Total</div>
                                    <div>Delivery Charge</div>
                                </div>
                                <div className="col-sm-4">
                                    <div>Rs 600</div>
                                    <div>Free<strike>Rs 149</strike></div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-8">
                                    <div>Total</div>
                                </div>
                                <div className="col-sm-4">
                                    <div>Rs 600</div>
                                </div>
                            </div><br />
                            <div>
                            <Link to="/payment"><button className="continue">Continue</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Address;