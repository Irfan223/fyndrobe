import React, { Component } from 'react';
const Header = React.lazy(() => import('../header/header'));
class Profile extends Component {
    render() {
        localStorage.setItem('curUrl', this.props.match.url);
        return (
            <div className="App">
                <Header />
                <div className="body">
                    Profile
                </div>
            </div>
        );
    }
}

export default Profile;