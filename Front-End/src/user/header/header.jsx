import React, { Component, Fragment } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import cssClass from "./header.module.css";
import { Link, NavLink } from "react-router-dom";
import axios from "../../axiosConfig";
import Cookies from "universal-cookie";
import { withRouter } from "react-router";
import logo from "../../assets/images/FyndrobeLogo.png";
import * as getCartFun from "../../helpers/getCartHelper";
const Drawer = React.lazy(() => import("../Drawer/drawer"));
const cookies = new Cookies();
class Header extends Component {
  state = {
    collapsed: "true",
    prevUrl: localStorage.getItem("curUrl"),
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    cart: [],
    totalProducts: 0,
    userId: cookies.get("userId"),
    cartUpdate: false,
  };

  componentDidMount() {
    getCartFun.getCart(this.state.userId).then((res) => {
      console.log(res);
      this.setState({
        cart: res,
      });
    });
  }
  getCart() {
    if (this.state.userId === undefined) {
      // alert(localStorage.getItem("localcart"));
      if (localStorage.getItem("localcart")) {
        this.setState(
          {
            cart: JSON.parse(localStorage.getItem("localcart")),
          },
          () => {
            console.log("not signed in");
          }
        );
      }
    } else {
      console.log(this.state.userId);
      axios
        .get("cart/" + this.state.userId)
        .then((res) => {
          var cartcopy = res.data.products;
          if (localStorage.getItem("localcart")) {
            let localcart = JSON.parse(localStorage.getItem("localcart"));
            cartcopy = cartcopy.concat(localcart);
          }
          cartcopy = cartcopy.filter(
            (v, i, a) =>
              a.findIndex(
                (t) => t.productId === v.productId && t.size === v.size
              ) === i
          );
          this.setState(
            {
              cart: cartcopy,
            },
            () => {
              localStorage.setItem(
                "localcart",
                JSON.stringify(this.state.cart)
              );
              console.log("signed in");
            }
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cartItems !== this.props.cartItems) {
      this.setState({
        cart: JSON.parse(localStorage.getItem("localcart")),
      });
    }
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logout = (event) => {
    localStorage.setItem("isLoggedIn", null);
    let localcart = JSON.parse(localStorage.getItem("localcart"));
    cookies.remove("userId", { path: "/" });
    cookies.remove("firstName", { path: "/" });
    cookies.remove("lastName", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("mobile", { path: "/" });
    cookies.remove("token", { path: "/" });
    cookies.remove("address", { path: "/" });
    const param = {
      userId: this.state.userId,
      localcart: localcart,
    };
    axios.patch("cart", param).then((res) => {
      console.log(res);
      if (res.status === 201) {
        localStorage.removeItem("localcart");
        this.setState(
          {
            isLoggedIn: localStorage.getItem("isLoggedIn"),
          },
          () => {
            window.location.reload(false);
          }
        );
      }
    });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const userID = cookies.get("userId");
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    const windowWidth = window.innerWidth;
    console.log("window width " + windowWidth);
    let user = "";

    if (isLoggedIn == "true") {
      user = (
        <div
          className={`dropdown-menu  ${cssClass.DropdownMenu}`}
          style={{ columnCount: "1", top: "65px", right: "0px" }}
          aria-labelledby="navbarDropdown"
        >
          <a href="#" className={`dropdown-item  ${cssClass.DropdownItem}`}>
            Orders
          </a>
          <a href="#" className={`dropdown-item ${cssClass.DropdownItem}`}>
            Profile
          </a>
          <Link
            to={this.state.prevUrl}
            className={`dropdown-item   ${cssClass.DropdownItem}`}
            onClick={this.logout}
          >
            Logout
          </Link>
        </div>
      );
    } else {
      user = (
        <div
          className={`dropdown-menu ${cssClass.DropdownMenu}`}
          aria-labelledby="navbarDropdown"
          style={{ columnCount: "1", top: "65px", right: "0px" }}
        >
          <Link
            to="/login"
            className={`dropdown-item ${cssClass.DropdownItem}`}
            href="#"
          >
            LogIn
          </Link>
        </div>
      );
    }

    return (
      <div>
        <nav
          className={`navbar shadow-sm   navbar-expand-lg navbar-light bg-light fixed-top ${cssClass.Navbar}`}
        >
          <a className={`navbar-brand ${cssClass.NavbarBrand}`} href="/">
            <img src={logo} width="170px" />
          </a>
          {/* Start Mobile View Navigation */}
          <div className="d-block d-sm-none">
            <Drawer />
          </div>
          {/* End Mobile View Navigation */}
          <div
            className={`${classOne} ${cssClass.Collapse} collapse navbar-collapse`}
            id="navbarSupportedContent"
            style={{
              transform:
                collapsed && windowWidth == 360
                  ? "translate3d(-100%,0,0)"
                  : "translate3d(0,0,0)",
            }}
          >
            <button
              className={`${cssClass.tooglerBarButton} navbar-toggler`}
              onClick={this.toggleNavbar}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={`fa fa-times fa-x2 ${cssClass.FaTimes}`}></span>
            </button>
            <br /> <hr />
            <ul className={`navbar-nav ${cssClass.category}`}>
              {/* Dropdown start */}
              <li
                className={`nav-item dropdown ${cssClass.NavItem} ${cssClass.Dropdown}`}
              >
                <NavLink
                  className={`nav-link ${cssClass.NavLink}`}
                  activeClassName={cssClass.IsActive}
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  // data-toggle='dropdown'
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Mens
                  <span className="fa fa-angle-down ml-2"></span>
                </NavLink>
                {/* <div
                  className={`dropdown-menu ${cssClass.DropdownMenu}`}
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    to="/products/mens/shirts"
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                    href="https://www.myntra.com"
                  >
                    Shirts
                  </Link>
                </div> */}
              </li>
              {/* Dropdown end */}
              <li
                className={`nav-item dropdown ${cssClass.NavItem} ${cssClass.Dropdown}`}
              >
                <NavLink
                  className={`nav-link ${cssClass.NavLink}`}
                  activeClassName={cssClass.IsActive}
                  to="/"
                  // id="navbarDropdown"
                  role="button"
                  // data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Womens
                  <span className="fa fa-angle-down ml-2"></span>
                </NavLink>

                <div
                  className={`dropdown-menu ${cssClass.DropdownMenu}`}
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    to="/products/women/Kurta"
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                  >
                    Kurtas
                  </Link>

                  <Link
                    to="/products/women/Kurta-with-leggins"
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                  >
                    Kurtas with dupattas
                  </Link>

                  <Link
                    to="/products/women/Kurta-with-dupatta"
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                  >
                    Kurtas with leggins
                  </Link>

                  <Link
                    to="/products/women/Dupattas-and-Shawls"
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                  >
                    Dupattas and Shawls
                  </Link>
                </div>
              </li>
              <li
                className={`nav-item dropdown ${cssClass.NavItem} ${cssClass.Dropdown}`}
              >
                <NavLink
                  className={`nav-link ${cssClass.NavLink}`}
                  activeClassName={cssClass.IsActive}
                  to="/"
                  // id="navbarDropdown"
                  role="button"
                  // data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kids
                  <span className="fa fa-angle-down ml-2"></span>
                </NavLink>
                {/* <div className="row">
                  <div
                    className={`dropdown-menu ${cssClass.DropdownMenu}`}
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="col-sm-6">
                      <Link
                        className={`dropdown-item ${cssClass.DropdownItem}`}
                        href="https://www.myntra.com"
                      >
                        Action
                      </Link>
                      <Link
                        className={`dropdown-item ${cssClass.DropdownItem}`}
                        to=""
                      >
                        Another action
                      </Link>

                      <Link
                        className={`dropdown-item ${cssClass.DropdownItem}`}
                        to=""
                      >
                        Something else here
                      </Link>
                      <Link
                        className={`dropdown-item ${cssClass.DropdownItem}`}
                        to=""
                      >
                        Something else here
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link
                        className={`dropdown-item ${cssClass.DropdownItem}`}
                        to=""
                      >
                        Something else here
                      </Link>
                      <Link
                        className={`dropdown-item ${cssClass.DropdownItem}`}
                        to=""
                      >
                        Something else here
                      </Link>
                      <Link
                        className={`dropdown-item ${cssClass.DropdownItem}`}
                        to=""
                      >
                        Something else here
                      </Link>
                    </div>
                  </div>
                </div> */}
              </li>
              <li
                className={`nav-item dropdown ${cssClass.NavItem} ${cssClass.Dropdown}`}
              >
                <NavLink
                  className={`nav-link ${cssClass.NavLink}`}
                  activeClassName={cssClass.IsActive}
                  to="/"
                  role="button"
                  // data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accesories <sup style={{ color: "orange" }}>Essential</sup>
                  {/* <span className="fa fa-angle-down ml-2"></span> */}
                </NavLink>
                {/* <div
                  className={`dropdown-menu ${cssClass.DropdownMenu}`}
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                    href="https://www.myntra.com"
                  >
                    Action
                  </a>
                  <a
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                    href="#"
                  >
                    Another action
                  </a>

                  <a
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                    href="#"
                  >
                    Something else here
                  </a>
                  <a
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                    href="#"
                  >
                    Something else here
                  </a>
                  <a
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                    href="#"
                  >
                    Something else here
                  </a>
                  <a
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                    href="#"
                  >
                    Something else here
                  </a>
                  <a
                    className={`dropdown-item ${cssClass.DropdownItem}`}
                    href="#"
                  >
                    Something else here
                  </a>
                </div> */}
              </li>
            </ul>
          </div>
          <div className={`d-flex align-items-center  ${cssClass.SignInCart}`}>
            <div
              className={`d-flex flex-row-reverse align-items-center ${cssClass.SearchBar}`}
            >
              <span>
                <i
                  onClick={() =>
                    this.setState({ SearchBar: !this.state.SearchBar })
                  }
                  className="fa fa-search float-right px-2"
                />
              </span>
              <input
                className="form-control  shadow-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            {/* start For mobile */}
            <div
              className={cssClass.MobileSearch}
              style={
                this.state.SearchBar
                  ? { display: "translateY(0%)" }
                  : { transform: "translateY(-150%)" }
              }
            >
              <span onClick={() => this.setState({ SearchBar: false })}>
                <i className="fa fa-arrow-left"></i>{" "}
              </span>
              <input
                className="form-control  shadow-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: window.innerWidth - 80 }}
              />
              <span>
                <i className="fa fa-search"></i>
              </span>
            </div>
            {/*end For mobile */}

            <div className="d-none d-sm-block">
              <ul className="navbar-nav mr-auto ">
                {/* Dropdown start */}
                <li
                  className={`nav-item dropdown dropleft ${cssClass.NavItem} ${cssClass.Dropdown}`}
                >
                  <a
                    className={`nav-link ${cssClass.NavLink}`}
                    to="/login"
                    id="navbarDropdown"
                    role="button"
                    // data-toggle='dropdown'
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="fa fa-user"></span>
                  </a>

                  {user}
                </li>
              </ul>
            </div>
            <div className="">
              <li className={`nav-item ${cssClass.NavItem}`}>
                <Link to="/cart" className={`nav-link ${cssClass.NavLink}`}>
                  <span className="fa fa-shopping-cart"></span>
                </Link>
              </li>
              <div className={cssClass.cartItem}>
                <span className={cssClass.circle}>
                  {this.state.cart.length}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Header);
