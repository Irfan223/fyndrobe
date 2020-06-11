import React, { Component, Fragment } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import cssClass from "./header.module.css";
import { Link, NavLink } from "react-router-dom";
import axios from "../../axiosConfig";
import Cookies from "universal-cookie";
import { withRouter } from "react-router";
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
    this.getCart();
  }
  getCart() {
    axios
      .get("cart" + "/" + this.state.userId)
      .then((res) => {
        console.log(res);
        this.setState({
          cart: res.data.products,
          totalProducts: res.data.products.length,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cartItems !== this.props.cartItems) {
      this.setState({
        totalProducts: this.props.cartItems,
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
    cookies.remove("userId", { path: "/" });
    cookies.remove("firstName", { path: "/" });
    cookies.remove("lastName", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("mobile", { path: "/" });
    cookies.remove("token", { path: "/" });
    cookies.remove("address", { path: "/" });
    this.setState(
      {
        isLoggedIn: localStorage.getItem("isLoggedIn"),
      },
      () => {
        window.location.reload(false);
      }
    );
  };
  render() {
    console.log("LoggedIN User iD " + cookies.get("userId"));

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
            Fashion Focus
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
                    Dupattas and Shawls
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
                    Kurtas
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
          <form className={`form-inline my-2 my-lg-0 ${cssClass.SignInCart}`}>
            <div className={`${cssClass.SearchBar}`}>
              <span>
                <i onClick={() => alert("Hello")} className="fa fa-search"></i>
              </span>
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>

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
            <div>
              <li className={`nav-item ${cssClass.NavItem}`}>
                <Link to="/cart" className={`nav-link ${cssClass.NavLink}`}>
                  <span className="fa fa-shopping-cart"></span>
                </Link>
              </li>
              <div className={cssClass.cartItem}>
                <span className={cssClass.circle}>
                  {this.state.totalProducts}
                </span>
              </div>
            </div>
          </form>
        </nav>
      </div>
    );
  }
}
export default withRouter(Header);
