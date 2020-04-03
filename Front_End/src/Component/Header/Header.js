
import React, { Component } from 'react';
import './Header.css';
// import ModalLogin from '../Modal/ModalLogin';
import ModalLoginRegister from '../LoginRegisterModal/ModalLoginRegister';
import Logout from '../logout/logout';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
         customerLoggedIn: cookies.get('customer_id')
        };
    }
    render() {
        // alert(this.state.customerLoggedIn)
        return (
            <div className="App">
                <div className="bs-example">
                    <div className="top-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-9">
                                    <div className="row">
                                        <div> Phone: +919836372183 </div> &nbsp;&nbsp;|&nbsp;&nbsp;
                                    <div> Email: mdirfan844@gmail.com</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="row">
                                        <div >
                                            <a href="#"> Gift Card</a>
                                        </div>&nbsp;&nbsp;|&nbsp;
                                        <div >&nbsp;
                                            <a href="#">Track Order</a>
                                        </div>
                                        <div >&nbsp;&nbsp;|&nbsp;
                                            <a href="#">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-md navbar-light white">
                        <a href="#" className="navbar-brand">Brand</a>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/explore/Mens">Men</Link>
                                <Link className="nav-item nav-link" to="/explore/Womens">Women</Link>
                                <Link className="nav-item nav-link" to="/explore/Kids">Kids</Link>
                            </div>
                            <form className="form-inline">
                                <div className="input-group">
                                    <input id="inputType" type="text" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button id="searchButton" type="button"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </form>

                            <div className="navbar-nav">
                                <div className="row">
                                <div className="col-sm-3">
                                        {/* Wishlist */}
                                    </div>
                                    <div className="col-sm-3">
                                        <div>
                                            {(() => {
                                                if (this.state.customerLoggedIn == 1) {
                                                    return (
                                                        <Logout />
                                                    )
                                                } else {
                                                    return (
                                                        <ModalLoginRegister />
                                                    )
                                                }
                                            })()}
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        Wishlist
                                    </div>
                                    <div className="col-sm-3">
                                        <Link to="/checkout/cart">
                                            <div className="cart"><i className="fa fa-shopping-cart fa_custom fa-2x"></i></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}