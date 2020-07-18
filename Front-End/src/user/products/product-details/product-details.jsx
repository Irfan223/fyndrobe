import React, { Component } from "react";
import axios from "../../../axiosConfig";
import { Button, notification, Space } from "antd";

import customCSS from "./productDetails.module.css";
import Cookies from "universal-cookie";
import { func } from "prop-types";
import { Carousel } from "antd";
const cookies = new Cookies();
const Header = React.lazy(() => import("../../header/header"));
const Footer = React.lazy(() => import("../../footer/footer"));

class ProductDetails extends Component {
  state = {
    data: [],
    // value: 1,
    userId: cookies.get("userId"),
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    productId: "",
    category: "",
    productTitle: "",
    coupon_discount: 0,
    extra_price: 0,
    gst: 5,
    image: "",
    quantity: 1,
    price: 0,
    size: "",
    totalSize: [],
    color: "",
    spl_price: 0,
    stock: 0,
    sub_total: 0,
    component: "addToCart",
    cartItems: 0,
    message: "",
    textColor: "",
    cartButton: false,
  };

  componentDidMount() {
    this.productDetails();
  }
  productDetails() {
    const id = this.props.match.params.id;
    const params = {
      id: id,
    };
    axios
      .post("productDetails", params)
      .then((res) => {
        console.log(res.data[0]);
        var oneItemPrice =
          parseInt(res.data[0].sellingPrice) +
          0.05 * parseInt(res.data[0].sellingPrice);
        this.setState({
          data: res.data,
          productId: res.data[0]._id,
          category: res.data[0].productCategory,
          productTitle: res.data[0].productTitle,
          color: res.data[0].color.color,
          image: res.data[0].color.image[0],
          totalSize: res.data[0].size,
          spl_price: res.data[0].sellingPrice,
          price: res.data[0].costPrice,
          sub_total: oneItemPrice,
        });
      })
      .catch(function (res) {
        console.log(res);
      });
  }
  size = (size, stock, event) => {
    event.preventDefault();
    console.log(size);
    console.log(stock);
    this.setState(
      {
        size: size,
        stock: stock,
        cartButton: false,
        message: " You've selected size : " + size,
        textColor: "text-success",
      },
      () => {}
    );
  };
  quantity = (event) => {
    event.preventDefault();
    this.setState(
      {
        quantity: event.target.value,
      },
      () => {}
    );
  };

  openNotificationWithIcon = (placement, type, message) => {
    notification[type]({
      message,
      placement,
      top: 70,
      duration: 2,
    });
  };
  addToCart = (event) => {
    event.preventDefault();

    if (this.state.size == "" && this.state.stock == 0) {
      this.setState({
        message: "Please select size",
        textColor: "text-danger",
      });
      return false;
    }

    var totalPrice = this.state.sub_total * this.state.quantity;
    this.setState(
      {
        sub_total: totalPrice,
      },
      () => {
        if (
          this.state.isLoggedIn === "null"
        ) {
          const {
            productId,
            category,
            productTitle,
            coupon_discount,
            extra_price,
            gst,
            image,
            quantity,
            price,
            size,
            totalSize,
            color,
            spl_price,
            stock,
            sub_total,
          } = this.state;
          const data = {
            productId,
            category,
            productTitle,
            coupon_discount,
            extra_price,
            gst,
            image,
            quantity,
            price,
            size,
            totalSize,
            color,
            spl_price,
            stock,
            sub_total,
          };
          let localcart = [];
          if (!localStorage.getItem('localcart')) {
            localcart.push(data);
            localStorage.setItem("localcart", JSON.stringify(localcart));
            return;
          }
          localcart = JSON.parse(localStorage.getItem('localcart'));
          let cartIndex = localcart.findIndex(item => item.productId === productId && item.size === size);
          if (cartIndex > -1) {
            this.openNotificationWithIcon(
              "topRight",
              "warning",
              " Product is already in cart"
            );
          } else {
            localcart.push(data);
            localStorage.setItem('localcart', JSON.stringify(localcart));
            this.setState({
              cartItems: localcart.length
            });
            this.openNotificationWithIcon(
              "topRight",
              "success",
              "Product has been added to your cart"
            );
          }
        } else {
          axios
            .post("cart", this.state)
            .then((res) => {
              if (res.status === 200) {
                this.openNotificationWithIcon(
                  "topRight",
                  "warning",
                  " Product is already in cart"
                );
              } else if (res.status === 201) {
                this.openNotificationWithIcon(
                  "topRight",
                  "success",
                  "Product has been added to your cart"
                );
                console.log(res.data.products.length);
                this.setState({
                  cartItems: res.data.products.length,
                  cartButton: true,
                });
              } else {
                this.openNotificationWithIcon(
                  "topRight",
                  "success",
                  "Product has been added to your cart"
                );
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    );
  };
  goToCart = () => {
    this.props.history.push("/cart");
  };
  similarProduct() {
    const id = this.props.match.params.id;
    const title = this.props.match.params.productTitle;
  }
  render() {
    localStorage.setItem("curUrl", this.props.match.url);
    const data = this.state.data;
    let cartButton;
    if (!this.state.cartButton) {
      cartButton = (
        <button className={customCSS.addToCart} onClick={this.addToCart}>
          ADD TO CART
        </button>
      );
    } else {
      cartButton = (
        <button className={customCSS.addToCart} onClick={this.goToCart}>
          GO TO CART
        </button>
      );
    }
    return (
      <div className="App">
        <Header cartItems={this.state.cartItems} />
        <div className="body">
          <div className={`container-fluid ${customCSS.imageSection}`}>
            {data.map((item) => (
              <div className="row">
                <div className="col-sm-7 col-md-7 col-lg-7">
                  <div className="row no-gutters">
                    {item.color.image.map((img) => (
                      <div className="col-sm-6" id={customCSS.productImage}>
                        <div className="row">
                          <div className="col-sm-12 d-none d-sm-block">
                            <img
                              src={img}
                              width="100%"
                              className="img-responsive"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Start Mobile View Carousel */}
                  <div className="row">
                    <div className="col-12 d-block d-sm-none">
                      <Carousel autoplay>
                        {item.color.image.map((img) => (
                          <img
                            src={img}
                            width="100%"
                            className="img-responsive"
                          />
                        ))}
                      </Carousel>
                      {/* End Mobile View Carousel */}
                    </div>
                  </div>
                  <br />
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5 ">
                  <h6 className="font-weight-normal">
                    <div>
                      <strong>{item.brandName}</strong>
                    </div>
                    <div>{item.productTitle}</div>
                    <div className="pt-2">
                      <span>
                        <strong>Rs {item.sellingPrice}</strong>
                      </span>
                      &nbsp;
                      <span className="font-weight-light">
                        <del>Rs {item.costPrice}</del>
                      </span>
                      &nbsp;
                      <span style={{ color: "orange" }}>
                        (
                        {(
                          ((item.costPrice - item.sellingPrice) /
                            item.costPrice) *
                          100
                        ).toFixed(0)}
                        % OFF)
                      </span>
                    </div>
                  </h6>
                  {/* Start size section */}
                  <div className="row pt-4 mb-3">
                    {/* Start size selection */}
                    <div className="col-sm-12 col-12">
                      <div className="row">
                        <div className="col-sm-6 col-6">
                          <h6>SELECT SIZE</h6>
                        </div>
                        <div className="col-sm-6 col-6">
                          <h6>SIZE CHART</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-12">
                      {item.size.map((s) => (
                        <span>
                          <button
                            type="button"
                            className={
                              s.quantity == 0
                                ? `${customCSS.sizeCross} center-block`
                                : `${customCSS.sizeButton} center-block `
                            }
                            onClick={this.size.bind(this, s.value, s.quantity)}
                            value={(s.value, s.quantity)}
                          >
                            {s.value}
                            <div
                              className={
                                s.quantity == 0 ? `${customCSS.line}` : ""
                              }
                            ></div>
                          </button>
                        </span>
                      ))}
                      <div
                        className={`col-sm-12 col-12 pt-2 pb-0 ${this.state.textColor}`}
                      >
                        {this.state.message}
                      </div>
                    </div>
                    {/* End size selection */}
                    {/* Start select quantity dropdown */}
                    <div
                      className={`col-sm-12 col-12 ${customCSS.quantity} pt-3 pb-3`}
                    >
                      SELECT QUANTITY
                      <select
                        onChange={this.quantity}
                        value={this.state.value}
                        className={customCSS.select}
                      >
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    {/* End select quantity dropdown */}
                    {/* Start Add To Cart and Go to Cart Button */}
                    <div
                      className={`col-md-12 col-sm-12 col-12 ${customCSS.AddToCartButton}`}
                    >
                      {cartButton}
                    </div>
                    {/* End Add To Cart and Go to Cart Button */}
                  </div>
                  <div className={`row ${customCSS.productDetails}`}>
                    <div className="col-sm-12 col-12">
                      <hr />
                      {/* End selection div */}
                      {/* <hr /> */}
                      <div className="">
                        <h6>
                          <strong>PRODUCT DETAILS</strong>
                        </h6>
                        <div>{item.description}</div>
                      </div>
                      <div className="pt-3">
                        <h6>
                          <strong>Material & Care</strong>
                        </h6>
                        <div className="text-capitalize">
                          Top fabric - &nbsp;{item.details.kurtaFabric}
                        </div>
                        <div className="text-capitalize">
                          Bottom fabric - &nbsp;{item.details.salwarFabric}
                        </div>
                        <div className="text-capitalize">
                          Dupatta fabric - &nbsp;{item.details.dupattaFabric}
                        </div>
                        <div className="text-capitalize">
                          Wash Care - &nbsp;{item.details.washCare}
                        </div>
                      </div>
                      <div className="pt-3">
                        <h6>
                          <strong>Specifications</strong>
                        </h6>
                        <div className="row">
                          <div className="col-sm-6 col-6">
                            <div className="pr-2 border-bottom">
                              <div
                                className={`${customCSS.spectTitle} text-capitalize`}
                              >
                                Sleeve Length
                              </div>
                              <div
                                className={`${customCSS.spectValue} text-capitalize`}
                              >
                                {item.details.sleeve}
                              </div>
                            </div>
                            <div className="pr-2 border-bottom">
                              <div
                                className={`${customCSS.spectTitle} text-capitalize`}
                              >
                                Occasion
                              </div>
                              <div
                                className={`${customCSS.spectValue} text-capitalize`}
                              >
                                {item.details.occasion}
                              </div>
                            </div>
                            <div className="pr-2 border-bottom">
                              <div
                                className={`${customCSS.spectTitle} text-capitalize`}
                              >
                                Prints and Pattern
                              </div>
                              <div
                                className={`${customCSS.spectValue} text-capitalize`}
                              >
                                {item.details.printsAndPattern}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-6">
                            <div className="pr-2 border-bottom">
                              <div
                                className={`${customCSS.spectTitle} text-capitalize`}
                              >
                                Color
                              </div>
                              <div
                                className={`${customCSS.spectValue} text-capitalize`}
                              >
                                {item.color.color}
                              </div>
                            </div>
                            <div className="pr-2 border-bottom">
                              <div
                                className={`${customCSS.spectTitle} text-capitalize`}
                              >
                                Neck
                              </div>
                              <div
                                className={`${customCSS.spectValue} text-capitalize`}
                              >
                                {item.details.neck}
                              </div>
                            </div>
                            <div className="pr-2 border-bottom">
                              <div
                                className={`${customCSS.spectTitle} text-capitalize`}
                              >
                                Work
                              </div>
                              <div
                                className={`${customCSS.spectValue} text-capitalize`}
                              >
                                {item.details.work}
                              </div>
                            </div>
                          </div>
                        </div>
                        <di className="p-3">
                          <div>
                            <strong>Disclaimer</strong>
                          </div>
                          <div>{item.disclaimer}</div>
                        </di>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductDetails;
