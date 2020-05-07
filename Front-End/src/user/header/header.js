import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import headerStyle from './header.module.css';
import cx from 'classnames';
// import  './header.css';
// import { Link } from 'react-router-dom';
// import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="header navbar navbar-expand-lg navbar-light bg-white shadow border-outline-success">
                    <a className="navbar-brand" href="#">Fashion Focus</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown position-static">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    WOMEN <i class="fa fa-angle-down"></i>
                                </a>
                                <div className="dropdown-menu w-100 shadow border-outline-success" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">kurti</a>
                                    <a className="dropdown-item" href="#">leggins</a>
                                    <a className="dropdown-item" href="#">dupatta</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    MEN <i class="fa fa-angle-down"></i>
                                </a>
                                <div className="dropdown-menu shadow border-outline-success" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">T-Shirt</a>
                                    <a className="dropdown-item" href="#">Shirts</a>
                                    <a className="dropdown-item" href="#">Jeans</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    KIDS <i class="fa fa-angle-down"></i>
                                </a>
                                <div className="dropdown-menu shadow border-outline-success" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">T-Shirt</a>
                                    <a className="dropdown-item" href="#">Shirts</a>
                                    <a className="dropdown-item" href="#">Jeans</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
