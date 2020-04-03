import React, { Component } from 'react';
import './adminPage.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: cookies.get('user'),
            code: cookies.get('code')
        };
    }

    render() {
        // alert(this.state.code);
        return (
            <div className="App">
                <div>hello</div>
            </div>
        );
    }
}

export default AdminPage;