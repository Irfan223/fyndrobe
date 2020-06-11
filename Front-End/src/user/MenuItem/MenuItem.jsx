import React, { Component } from "react";
import img1 from "../../assets/images/tshirt.jpg";
import cssClass from "./MenuItem.module.css";
export default class Body extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-4 mb-2 col-12">
            <div className={cssClass.tilehumb}>
              <a href="" className={cssClass.scaleImg}>
                <div className={`${cssClass.htilebtn} text-uppercase-bold`}>
                  t-shirts
                </div>
                <img src={img1} alt="" className="image" />
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 mb-2 col-12">
            <div className={cssClass.tilehumb}>
              <a href="" className={cssClass.scaleImg}>
                <div className={`${cssClass.htilebtn} text-uppercase-bold`}>
                  t-shirts
                </div>
                <img src={img1} alt="" className="image" />
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 mb-2 col-12">
            <div className={cssClass.tilehumb}>
              <a href="" className={cssClass.scaleImg}>
                <div className={`${cssClass.htilebtn} text-uppercase-bold`}>
                  t-shirts
                </div>
                <img src={img1} alt="" className="image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


