import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import './ModalLoginRegister.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const axios = require('axios');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};
export default class ModalLoginRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginOpened: false,
            signupOpened: false,
            userEmail: '',
            userPassword: ''
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
        axios.post('http://localhost:4000/api/CusLogin', null, { params })
            .then(function (response) {
                cookies.set('customer_id', response.data.customer_id, { path: '/' });
                cookies.set('customer_fname', response.data.customer_fname, { path: '/' });
                cookies.set('customer_lname', response.data.customer_lname, { path: '/' });
                cookies.set('customer_email', response.data.customer_email, { path: '/' });
                cookies.set('customer_mobile', response.data.customer_mobile, { path: '/' });
                cookies.set('customer_postcode1', response.data.customer_postcode1, { path: '/' });
                cookies.set('customer_city1', response.data.customer_city1, { path: '/' });
                cookies.set('customer_address1', response.data.customer_address1, { path: '/' });
                cookies.set('customer_postcode2', response.data.customer_postcode2, { path: '/' });
                cookies.set('customer_city2', response.data.customer_city2, { path: '/' });
                cookies.set('customer_address2', response.data.customer_address2, { path: '/' });
            })
            .catch(function (error) {
                alert(error);
            });
            window.location.reload();
    }
    register = event => {
        event.preventDefault();
        this.setState({
        loginOpened: true,
        signupOpened: false
        });
    }
    openModal = modalType => () => {
        if (modalType === "login") {
            this.setState({
                loginOpened: true,
                signupOpened: false
            });
        } else if (modalType === "signup") {
            this.setState({
                loginOpened: false,
                signupOpened: true
            });
        }
    };
    closeModal = modalType => () => {
        if (modalType === "login") {
            this.setState({
                loginOpened: false
            });
        } else if (modalType === "signup") {
            this.setState({
                signupOpened: false
            });
        }
    };
    render() {
        const { loginOpened, signupOpened } = this.state;
        return (
            <div className="modalBody">
                <Modal isOpen={loginOpened} onRequestClose={this.closeModal("login")} style={customStyles}>
                    <button className="crossButton" onClick={this.closeModal("login")}><i className="fa fa-times-thin fa-2x" aria-hidden="true"></i> </button>
                    <div>
                        <div className="logintitle">Log In</div>
                        <br /><div className="title">Discover Fashion!</div>
                        <div className="texttitle">You're just one step away from signing up</div><br />
                        <div className="socialLogin">
                            <button className="fb">Facebook</button>&nbsp;&nbsp;
                            <button className="google">Google</button>
                        </div>
                        <hr />
                        <div className="or">Or</div>
                        <form onSubmit={this.login}>
                            <input className="inputText" type="email" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} placeholder="Please Enter Email/Phone" required /><br /><br />
                            <input className="inputText" type="password" name="userPassword" value={this.state.userPassword} onChange={this.handleChange} placeholder="Please Enter Password" required />
                            <br /><br /><input type="submit" className="LRButton" value="Login" />
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            New to here?
                        </div>
                        <div className="col-6">
                            <button onClick={this.openModal("signup")} className="loginsignup">Signup</button>
                        </div>
                    </div>
                </Modal>
                <Modal isOpen={signupOpened} onRequestClose={this.closeModal("signup")} style={customStyles}>
                    <button className="crossButton" onClick={this.closeModal("signup")}><i className="fa fa-times-thin fa-2x" aria-hidden="true"></i> </button>
                    <div>
                        <div className="logintitle">Sign Up</div>
                        <br /><div className="title">Discover Fashion!</div>
                        <div className="texttitle">You're just one step away from signing up</div><hr />
                        <form onSubmit={this.register}>
                            <input className="inputText" type="text" name="userName" value={this.state.userName} onChange={this.handleChange} placeholder="Please Enter Your Name" required /><br /><br />
                            <input className="inputText" type="email" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} placeholder="Please Enter Your Email" required /><br /><br />
                            <input className="inputText" type="number" name="userNumber" value={this.state.userNumber} onChange={this.handleChange} placeholder="Please Enter Your Phone" required /> <br /><br />
                            <input className="inputText" type="password" name="userPassword" value={this.state.userPassword} onChange={this.handleChange} placeholder="Please Enter Password" required /><br />
                            <br /><input type="submit" className="LRButton" value="Register" />
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            have an account?
                        </div>
                        <div className="col-4">
                            <button onClick={this.openModal("login")} className="loginsignup">Login</button>
                        </div>
                    </div>
                </Modal>
                <button onClick={this.openModal("login")} className="LoginButton">Login</button>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ModalLoginRegister />, rootElement);
