import React, { Component } from 'react';
import './Footer.css';
export default class Footer extends Component {

    subsribe() {

    }

    render() {
        return (
            <div className="App">
                <div className="container" >
                    <div className="row" id="footer">
                        <div className="col-sm-3"><br /><br />
                            <div className="companyLogo">COMPANY LOGO</div>
                        </div>
                    </div>
                    <div className="row" id="footer">
                        <div className="col-sm-2"><br />
                            <div className="titlecontent"><strong>ABOUT</strong></div><br />
                            <div className="item">
                                <div>Contact Us</div>
                                <div>About Us</div>
                                <div>Career</div>
                            </div>
                        </div>
                        <div className="col-sm-2"><br />
                            <div className="titlecontent"><strong>HELP</strong></div><br />
                            <div className="item">
                                <div>Payments</div>
                                <div>Shipping</div>
                                <div>Cancellation and Return</div>
                            </div>
                        </div>
                        <div className="col-sm-2"><br />
                            <div className="titlecontent"><strong>POLICY</strong></div><br />
                            <div className="item">
                                <div>Return Policy</div>
                                <div>Terms of Use</div>
                                <div>Security</div>
                                <div>Privacy</div>
                                <div>Sitemap</div>
                            </div>
                        </div>
                        <div className="col-sm-2"><br />
                            <div className="titlecontent"><strong>SOCIAL</strong></div><br />
                            <div className="item">
                                <div>Facebook</div>
                                <div>Twitter</div>
                                <div>YouTube</div>
                            </div>
                        </div>
                        <div className="col-sm-4"><br />
                            <div className="titlecontent"><strong>Registered Office Address</strong></div><br />
                            <div className="item">
                                E-246/5, Second Floor, Shaheen Bagh, Jamia Nagar, Abul Fazal Enclave Part-2, Okhla New Delhi, 110025.
                                New Delhi, India.
                            </div><br />
                            <form className="form-inline" onSubmit={this.subsribe}>
                                <input type="email" className="inputtext" id="email"
                                    placeholder="Enter email Id" name="email" required />
                                <button type="submit" className="subscribe">SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                    <div className="row" id="footer">
                        <div className="col">
                            <div className="hrtag">< hr /></div>
                        </div>
                    </div>
                    <div className="row" id="footer">
                        <div className="col-sm-6">
                            100% Secure Payment:&nbsp;
                            <img src={require("../../assets/payment/mastercard.png")} alt="First slide" />
                        </div>
                        <div className="col-sm-6">
                            Shipping Partners:&nbsp;
                            <img src={require("../../assets/payment/mastercard.png")} alt="First slide" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}