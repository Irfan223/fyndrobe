import React, { Component } from 'react';
import './CRegister.css';
import ModalLogin from '../Modal/ModalLogin';
const axios = require('axios');
export default class CRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userEmail: '',
            userNumber: '',
            userPassword: ''
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.login = this.login.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        // this.setState({ [event.target.name]: event.target.value });
    }

    register = event => {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const name = this.state.userName;
        const email = this.state.userEmail;
        const mobile = this.state.userNumber;
        const password = this.state.userPassword;
        const params = 'name='+name+'&email='+email+"&mobile="+mobile+'&password='+password
        axios.post('http://localhost:4000/api/CusLogin?'+params)
        .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    // componentDidMount() {
    // }

    render() {
        return (
            <div>
                <div className="logintitle">Sign Up</div>
                <br /><div className="title">Discover Fashion!</div>
                <div className="texttitle">You're just one step away from signing up</div><br />
                {/* <div className="socialLogin">
                    <button className="fb">Facebook</button>&nbsp;&nbsp;
              <button className="google">Google</button>
                </div><br /> */}
                {/* <hr /> */}
                {/* <div className="or">Or</div><br /> */}
                {/* <form onSubmit={this.register}>
                    <input className="inputText" type="text" name="userName" value={this.state.userName} onChange={this.handleChange} placeholder="Please Enter Your Name" required /><br /><br />
                    <input className="inputText" type="email" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} placeholder="Please Enter Your Email" required /><br /><br />
                    <input className="inputText" type="number" name="userNumber" value={this.state.userNumber} onChange={this.handleChange} placeholder="Please Enter Your Phone" required /> <br /><br />
                    <input className="inputText" type="password" name="userPassword" value={this.state.userPassword} onChange={this.handleChange} placeholder="Please Enter Password" required /><br />
                    <br /><input type="submit" className="registerButton" value="Register" />
                </form> */}
                <ModalLogin />
            </div>
        );
    }
}