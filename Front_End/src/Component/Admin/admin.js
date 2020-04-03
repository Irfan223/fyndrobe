import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './admin.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router';
const cookies = new Cookies();
const axios = require('axios');

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            isLoggedin: ''
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ [event.target.name]: event.target.value });
    }

    login = event => {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const email = this.state.userEmail;
        const password = this.state.userPassword;
        var params = {
            email: email,
            password: password
        }
        axios.post('http://localhost:4000/api/admin', null, { params })
            .then(function (response) {
                console.log(response.data);
                cookies.set('user', response.data['admin_user']);
                cookies.set('code', response.data['code']);
                if (response.data['code'] === 200) {
                    // alert('hello')
                window.location = '/admin-page';
                } else {
                    alert('Wrong credential');
                }
            })
            .catch(function (error) {
                alert(error);
            });
    }
    render() {

        return (
            <div className="App">
                <div className="body"><br /><br /><br /><br />
                    <div id="Login-Form" className="shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="title">Admin Login</div><br />
                        <form className="form" onSubmit={this.login}>
                            <input type="email" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} placeholder="Enter user id" required /><br /><br />
                            <input type="password" name="userPassword" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" required /><br /> <br />
                            <input type="submit" className="buttonAdmin" value="Login" />
                        </form>
                        <div className="container" id="user-action">
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="checkbox"></input>&nbsp;keep me sign in
                            </div>
                                <div className="col-sm-6">
                                    <a href="#">Forgot Password</a>
                                </div>
                            </div>
                        </div>
                        {/* <div>
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
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;