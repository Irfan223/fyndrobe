import React, { Component, Suspense } from 'react';
import baseUrl from '../../axiosConfig';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const Header = React.lazy(() => import('../header/header'));
const Footer = React.lazy(() => import('../footer/footer'));
// const baseRL = React.lazy(() => import('../baseUrl'));



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  login = event => {
    const user = {
        email: this.state.userEmail,
        password: this.state.userPassword
    }
    event.preventDefault();
    baseUrl.post('/userLogin', user)
      .then(function (response) {
        console.log(response.data)
        console.log(cookies.getAll())
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  signOut(e) {
    e.preventDefault()
    this.props.history.push('/admin/login')
  }
  render() {
    return (
      <div className="App">
        <Suspense fallback={this.loading()}>
          <Header onLogout={e => this.signOut(e)} />
        </Suspense>
        <form onSubmit={this.login}>
          <input className="inputText" type="email" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} placeholder="Please Enter Email/Phone" required /><br /><br />
          <input className="inputText" type="password" name="userPassword" value={this.state.userPassword} onChange={this.handleChange} placeholder="Please Enter Password" required />
          <br /><br /><input type="submit" className="LRButton" value="Login" />
        </form>
      </div>
    );
  }
}

export default Home;
