import React, { Component } from "react";
import cssClass from "./footer.module.css";
import logo from "../../assets/images/Flogo.png";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaShippingFast,
  FaWallet,
} from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import googleplay from "../../assets/images/google-play-badge.png";
import appstore from "../../assets/images/App-Store-Badge.svg";
import visa from "../../assets/images/Visa.png";
import maestro from "../../assets/images/Maestro.png";
import mastercard from "../../assets/images/MasterCard.png";
import paypal from "../../assets/images/Paypal.png";
import cirrus from "../../assets/images/Cirrus.png";
class Footer extends Component {
  render() {
    return (
      <div className={`container-fluid ${cssClass.Footer}`}>
        <div className="mx-5 my-5 align-items-center logo">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "100%",
              background: "whitesmoke",
            }}
          />
        </div>
        {/* Link as in the footer */}
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 col-xs-6">
              <div className={`footer-links  ${cssClass.FooterLinks}`}>
                <h5
                  className={`font-weight-bold text-uppercase ml-3 ${cssClass.Fred}`}
                >
                  Customer Service
                </h5>
                <ul className="nav flex-column">
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="/contact-us"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      Contact Us
                    </a>
                  </li>

                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="track-order"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      Track Order
                    </a>
                  </li>

                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="return-order"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      Return Order
                    </a>
                  </li>

                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="cancel-order"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      Cancel Order
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End first column */}
            <div className="col-6 col-md-3 col-xs-6">
              <div className={cssClass.FooterLinks}>
                <h5
                  className={`font-weight-bold text-uppercase ml-3  ${cssClass.Fred}`}
                >
                  Company
                </h5>
                <ul className=" nav flex-column ">
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="about-us"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      About Us
                    </a>
                  </li>

                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="term-and-condition"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      Term and Condition
                    </a>
                  </li>
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="privacy"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      Privacy
                    </a>
                  </li>
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a href="blog" className={`nav-link ${cssClass.NavLink}`}>
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* End Second column */}

            <div
              className={`col-6 col-md-3 col-xs-6 ${cssClass.ConnectWithUs}`}
            >
              <div className={cssClass.FooterLinks}>
                <h5
                  className={`font-weight-bold text-uppercase ml-3 ${cssClass.Fred}`}
                >
                  Connect With Us
                </h5>
                <ul className={`nav d-flex  ${cssClass.ConnectWithUs}`}>
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="https://www.facebook.com"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      <span className="mr-2 ">
                        <FaFacebookSquare
                          style={{ color: "#3b5998", fontSize: "30px" }}
                        />
                      </span>
                      {/* Facebook */}
                    </a>
                  </li>

                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="https://www.instagram.com"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      <span className="mr-2">
                        <FaInstagram
                          style={{ color: "orangered", fontSize: "30px" }}
                        />
                      </span>
                      {/* Instagram */}
                    </a>
                  </li>
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="https://www.twitter.com"
                      className={`nav-link ${cssClass.NavLink}`}
                    >
                      <span className="mr-2">
                        <FaTwitter
                          style={{
                            color: "#00acee ",
                            fontSize: "30px",
                          }}
                        />
                      </span>
                      {/* Twitter */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Third Column */}

            <div className={`col-6 col-md-3 col-xs-6 ${cssClass.KeeUpToDate}`}>
              <div className={cssClass.FooterLinks}>
                <h5 className={`ml-3 text-uppercase ${cssClass.Fred}`}>
                  Keep Up to date
                </h5>
                <form className={cssClass.Contact}>
                  <input
                    className="form-control form-control-md  ml-3"
                    type="text"
                    placeholder="Enter Email Id"
                  />

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Second row of links */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 col-md-3 col-xs-6">
              <div className={cssClass.FooterLinks}>
                <ul className=" nav flex-column ml-3 ">
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <span className={`d-flex ${cssClass.FooterInformation}`}>
                      <GiReturnArrow />
                      <p className="">15 days return policy</p>
                    </span>
                  </li>
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <span className={`d-flex ${cssClass.FooterInformation}`}>
                      <FaShippingFast />
                      <p className="">free shipping</p>
                    </span>
                  </li>
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <span className={`d-flex ${cssClass.FooterInformation}`}>
                      <FaWallet />
                      <p className="">cash on delivery</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* First column end */}
            <div className="col-6 col-md-3 col-xs-6">
              <div className={cssClass.FooterLinks}>
                <ul className="nav ml-2  store-button">
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="https://play.google.com/store?hl=en"
                      className={`nav-link ${cssClass.NavLink}`}
                    ></a>
                    <img src={appstore} alt="Google Play" />
                  </li>
                  <li className={`nav-item ${cssClass.NavItem}`}>
                    <a
                      href="https://www.apple.com/ios/app-store/"
                      className={`nav-link ${cssClass.NavLink}`}
                    ></a>
                    <img src={appstore} alt="App Store" />
                  </li>
                </ul>
              </div>
            </div>
            {/* End of second column */}
            <div className="col-6 col-md-3 col-xs-6 ml-2">
              <div className={cssClass.FooterLinks}>
                <h5 className={cssClass.Fred}>100% Secure Payment</h5>
                <div className="d-flex">
                  <img
                    src={visa}
                    alt="visa"
                    style={{ width: "20%", height: "20%" }}
                  />
                  <img
                    src={mastercard}
                    alt="mastercard"
                    style={{ width: "20%", height: "20%" }}
                  />
                  <img
                    src={maestro}
                    alt="meastro"
                    style={{ width: "20%", height: "20%" }}
                  />
                  <img
                    src={paypal}
                    alt="paypal"
                    style={{ width: "20%", height: "20%" }}
                  />
                  <img
                    src={cirrus}
                    alt="cirrus"
                    style={{ width: "20%", height: "20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
