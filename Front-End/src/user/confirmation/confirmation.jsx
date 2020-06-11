import React, { Component } from 'react';
const Header = React.lazy(() => import('../header/header'));
class Confirmation extends Component {
    render() {
        localStorage.setItem('curUrl', this.props.match.url);
        return (
            <div className="App">
                 <Header />
                Confirmation
            </div>
        );
    }
}

export default Confirmation;