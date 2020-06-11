import React, { Component } from 'react';
const Header = React.lazy(() => import('../header/header'));
const Footer = React.lazy(() => import('../footer/footer'));
class Order extends Component {
    render() {
        localStorage.setItem('curUrl', this.props.match.url);
        return (
            <div className="App">
                 <Header />
                 <div className="body">
                    Orders
                 </div>
                <Footer />
            </div>
        );
    }
}

export default Order;