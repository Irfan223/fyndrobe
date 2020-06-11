import React, { Component, Fragment } from "react";
import cssClass from "./cart.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "../../axiosConfig";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import  {ShoppingCartOutlined} from '@ant-design/icons'

import emptyCartImage from "../../assets/img/brand/EmptyCart.svg";
const PriceCalculate = React.lazy(() =>
  import("../price-calculate/price-calculate")
);
const cookies = new Cookies();

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Cart extends Component {
  state = {
    loading: false,
    isQuantityOpen: false,
    isRemoveOpen: false,
    size: "",
    isSizeOpen: false,
    isAddressModal: false,
    cart: [],
    paybleAmount: 0,
    quantityArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    totalSize: [],
    userId: cookies.get("userId"),
    removeItemId: "",
    removeItemSize: "",
    quantity: 0,
    orderTotal: 0,
    BagDiscount: 0,
    couponDiscount: 0,
    BagTotal: 0,
    deliveryCharge: 50,
    cartItems: 0,
    component: "",
  };
  componentDidMount() {
    this.getCart();
  }
  getCart() {
    axios
      .get("cart" + "/" + this.state.userId)
      .then((res) => {
        // console.log(res.data.products);
        // var totalAmount = 0;
        var BagTotal = 0;
        var BagDiscount = 0;
        var couponDiscount = 0;
        var orderTotal = 0;
        // var tempArray = [];
        res.data.products.map((data) => {
          //   tempArray.push(data);
          BagTotal += data.price * data.quantity;
          BagDiscount += (data.price - data.spl_price) * data.quantity;
          couponDiscount += data.coupon_discount;
          orderTotal += data.spl_price * data.quantity;
          // console.log('order total'+ orderTotal);

          // BagTotal+=data.spl_price;
        });

        this.setState(
          {
            // totalSize: tempArray,
            BagTotal: BagTotal,
            BagDiscount: BagDiscount,
            couponDiscount: couponDiscount,
            orderTotal: orderTotal,
            cart: res.data.products,
          },
          () => {
            this.props.cartUpdate(
              this.state.BagTotal,
              this.state.BagDiscount,
              this.state.couponDiscount,
              this.state.orderTotal,
              this.state.deliveryCharge,
              this.props.location.pathname
            );
          }
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  removeItemFromCart = (id, size, event) => {
    // alert(id + 'size' + size + 'userId=' +this.state.userId)
    this.setState({
      loading: true,
    });
    const userId = this.state.userId;
    axios
      .patch("cart" + "/" + userId + "/" + id + "/" + size)
      .then((res) => {
        // alert(res.status);
        if (res.status === 201) {
          this.setState(
            {
              cartItems: res.data.products.length,
              loading: false,
            },
            () => {
              this.getCart();
            }
          );
          this.closeRemoveModal();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  OpenRemoveModal = (id, size, event) => {
    this.setState(
      {
        isRemoveOpen: !this.state.isRemoveOpen,
        removeItemId: id,
        removeItemSize: size,
      },
      () => {}
    );
  };
  closeRemoveModal = () => {
    this.setState({ isRemoveOpen: !this.state.isRemoveOpen });
  };
  size = (id, quantity, event) => {
    event.preventDefault();
    // alert(id + ' ' +quantity + ' '+event.target.value);
    const params = {
      userId: this.state.userId,
      productId: id,
      quantity: quantity,
      size: event.target.value,
    };
    axios
      .post("cart", params)
      .then((res) => {
        console.log(res.status);
        this.getCart();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  quantity = (id, size, event) => {
    event.preventDefault();
    // alert(id + ' ' +size + ' '+event.target.value);
    const params = {
      userId: this.state.userId,
      productId: id,
      size: size,
      quantity: event.target.value,
    };
    console.log(params);
    axios
      .post("cart", params)
      .then((res) => {
        console.log(res.status);
        this.getCart();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    localStorage.setItem("curUrl", this.props.match.url);
    const {
      removeItemId,
      removeItemSize,
      BagTotal,
      BagDiscount,
      couponDiscount,
      orderTotal,
      deliveryCharge,
      cartItems,
    } = this.state;

    return (
      <div className="App">
        <Header cartItems={cartItems} />
        <div className="body">
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <span className="breadcrumb-item">Cart</span>
              <span className="breadcrumb-item">Delivery</span>
              <span className="breadcrumb-item">Payment</span>
            </ol>
          </nav> */}
          <div className="container">
            {!this.state.cart.length == 0 ? (
              <div className="row mt-4">
                <div className="col-md-8 col-sm-8 col-12">
                  <div className="row p-2">
                    <div className="col-sm-6 col-6">
                      <strong>Cart ( {this.state.cart.length} items)</strong>
                    </div>
                    <div className="col-sm-6 col-6">
                      <strong className="float-right">
                        Rs {this.state.orderTotal + this.state.deliveryCharge}
                      </strong>
                    </div>
                  </div>
                  {this.state.cart.map((item) => (
                    <div className="container-fluid pt-1">
                      <div className="row border rounded">
                        {/* start Image Section */}
                        <div className="col-md-4 col-sm-4 col-4 py-3 px-3">
                          <div className={`${cssClass.ImageDiv}`}>
                            <img src={item.image} alt="" />
                          </div>
                        </div>
                        {/* End of image section */}
                        <div className="col-md-8 col-sm-8 col-8 px-0">
                          <div className="row">
                            <div className="col-md-8  col-sm-8 col-12">
                              <div
                                className={`row mt-1 py-2 ${cssClass.ProductTitle}`}
                              >
                                <p className="">{item.productTitle}</p>
                              </div>
                              {/* start Select section */}
                              <div
                                className={`row mb-5 ${cssClass.selectSection} `}
                              >
                                <div className="p-1">
                                  <select
                                    onChange={this.size.bind(
                                      this,
                                      item.productId,
                                      item.quantity
                                    )}
                                    value={item.size}
                                    className={`${cssClass.Select}`}
                                  >
                                    {item.totalSize.map((size) => (
                                      <option value={size.value}>
                                        {size.value}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="p-1">
                                  <select
                                    onChange={this.quantity.bind(
                                      this,
                                      item.productId,
                                      item.size
                                    )}
                                    value={item.quantity}
                                    className={cssClass.Select}
                                  >
                                    {this.state.quantityArray.map(
                                      (quantity) => (
                                        <option value={quantity}>
                                          {quantity}
                                        </option>
                                      )
                                    )}
                                  </select>
                                </div>
                              </div>
                              {/* end Select  section */}
                            </div>

                            <div
                              className={`col-md-4 col-sm-4 col-12 ${cssClass.QuantityPrice}`}
                            >
                              <div className="mt-1 py-2">
                                <p>
                                  {item.spl_price} X {item.quantity}
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <hr className='row border'/> */}
                          {/* Start Remove button section */}

                          <div
                            className={`row  btn btn-inline ${cssClass.RemoveButton}`}
                          >
                            <button
                              // onClick={this.removeItemFromCart.bind(
                              //   this,
                              //   item.productId,
                              //   item.size
                              // )}
                              onClick={this.OpenRemoveModal.bind(
                                this,
                                item.productId,
                                item.size
                              )}
                              value={(item.productId, item.size)}
                              className="border"
                            >
                              remove
                            </button>
                          </div>
                          <Modal
                            isOpen={this.state.isRemoveOpen}
                            className={cssClass.RemoveModal}
                            style={{
                              overlay: { background: "rgba(0,0,0,.3)" },
                              content: {},
                            }}
                          >
                            <div>
                              <div className="container-fluid">
                                <div className="row p-4">
                                  <div className="col-sm-12 col-12 border rounded">
                                    Are you sure you want to remove this product
                                    from your cart?
                                    <hr />
                                    <div className="row pb-4">
                                      <div className="col-sm-6 col-6 py-2">
                                        <button
                                          onClick={this.closeRemoveModal}
                                          className={cssClass.no}
                                        >
                                          No
                                        </button>
                                      </div>
                                      <div className="col-sm-6 col-6 py-2 ">
                                        <button
                                          onClick={this.removeItemFromCart.bind(
                                            this,
                                            this.state.removeItemId,
                                            this.state.removeItemSize
                                          )}
                                          className={`${cssClass.yes} float-right `}
                                        >
                                          Yes
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                          {/* End Remove button section */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-sm-4 col-12">
                  <PriceCalculate />
                </div>
              </div>
            ) : (
              <div className="container-fluid  ">
                <div className="row">
                  <div className={`col-sm-12 col-12 ${cssClass.emptyCart}`}>
                    <div className="d-flex flex-column">
                    <ShoppingCartOutlined twoToneColor='#FFA500' style={{fontSize:'200px' ,color:'orange'}}/>
                      <div className=''>
                        <div className='my-3 ml-2'>
                        <p>Your cart is Empty {this.props.name}</p>
                        </div>
                        <div className='my-5 ml-4'>
                        <Link to="/" className={cssClass.ContinueShoppingButton}>Continue shopping</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/*End Product card */}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cartUpdate: (
      BagTotal,
      BagDiscount,
      couponDiscount,
      orderTotal,
      deliveryCharge,
      currentComponent
    ) => {
      dispatch({
        type: "UPDATE_TOTAL",
        payload: {
          BagTotal,
          BagDiscount,
          couponDiscount,
          orderTotal,
          deliveryCharge,
          currentComponent,
        },
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Cart);
