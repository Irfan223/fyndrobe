import React, { Component } from 'react';
const Header = React.lazy(() => import('../header/header'));
const Footer = React.lazy(() => import('../footer/footer'));
class Checkout extends Component {
    state = {  }
    render() { 
        localStorage.setItem('curUrl', this.props.match.url);
        return ( 
            <div className="app">
                 <Header />
                 <div className="body">
                    Checkout
                 </div>
                <Footer />
            </div>
         );
    }
}
 
export default Checkout;