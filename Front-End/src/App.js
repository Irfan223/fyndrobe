import React, { Component } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./admin/containers/DefaultLayout'));

// Pages
// Start Importing Admin pages --------
const Login = React.lazy(() => import('./admin/views/Pages/Login'));
const Register = React.lazy(() => import('./admin/views/Pages/Register'));
const Page404 = React.lazy(() => import('./admin/views/Pages/Page404'));
const Page500 = React.lazy(() => import('./admin/views/Pages/Page500'));
// End Importing Admin pages --------
// Start Importing User pages --------
const Home = React.lazy(() => import('./user/home/home'));
// End Importing Admin pages --------
class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {/* Start Admin routes */}
              <Route exact path="/admin/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/admin/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/admin/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/admin/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/admin" name="admin" render={props => <DefaultLayout {...props}/>} />
              {/* End Admin Routes */}
              {/* Start User Routes */}
              <Route path="/" name="Home" render={props => <Home {...props}/>} />
              {/* End User Routes */}
            </Switch>
          </React.Suspense>
          </BrowserRouter>
    );
  }
}

export default App;
