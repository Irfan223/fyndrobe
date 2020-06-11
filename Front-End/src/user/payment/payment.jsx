import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import cssClass from './payment.module.css'
const PriceCalculate = React.lazy(() =>
  import("../price-calculate/price-calculate")
);
class Payment extends Component {
  componentDidMount() {
    this.props.cartUpdate(this.props.location.pathname);
  }
  render() {
    localStorage.setItem("curUrl", this.props.match.url);
    return (
      <div className="App">
        <Header />
        <div className="body">
          <nav aria-label='breadcrumb'>
            <ol className={`breadcrumb ${cssClass.Breadcrumbs}`}>
                <Link to='/cart' className="breadcrumb-item " aria-current="page">
                  Cart
                </Link>
                <Link to='/address' className="breadcrumb-item">
                 Address
                </Link>
                <span  className="breadcrumb-item active">
                 Payment
                </span>
            </ol>
          </nav>
          <div className="row">
            <div className="col-sm-8 col-12"></div>
            <div className="col-sm-4 col-12">
              <PriceCalculate />
            </div>
          </div>
        </div>
        <Footer />
      </div>
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
export default connect(null, mapDispatchToProps)(Payment);
