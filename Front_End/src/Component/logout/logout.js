import React, { Component } from 'react';
import './logout.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default class Logout extends Component {

    logout() {
        cookies.remove('customer_id');
        window.location.reload();
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.logout.bind(this)} className="LogoutButton">Logout</button>
            </div>
        );
    }
}