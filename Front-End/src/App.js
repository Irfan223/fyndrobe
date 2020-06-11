import React, { Component } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./admin/containers/DefaultLayout'));

// Pages
// Start Importing Admin pages --------
const AdminLogin = React.lazy(() => import('./admin/views/Pages/Login'));
const AdminRegister = React.lazy(() => import('./admin/views/Pages/Register'));
const Page404 = React.lazy(() => import('./admin/views/Pages/Page404'));
const Page500 = React.lazy(() => import('./admin/views/Pages/Page500'));
// End Importing Admin pages --------
// Start Importing User pages --------
const Home = React.lazy(() => import('./user/home/home'));
const UserLogin = React.lazy(() => import('./user/login/login'));
const UserRegsiter = React.lazy(() => import('./user/register/register'));
const ProductList = React.lazy(() => import('./user/products/product-list/product-list'));
const ProductDetails = React.lazy(() => import('./user/products/product-details/product-details'));
const Checkout = React.lazy(() => import('./user/checkout/checkout'));
const Cart = React.lazy(() => import('./user/cart/cart'));
const Address = React.lazy(() => import('./user/address/address'));
const Profile = React.lazy(() => import('./user/profile/profile'));
const Orders = React.lazy(() => import('./user/orders/order'));
const Payment = React.lazy(() => import('./user/payment/payment'));
const Confirmation = React.lazy(() => import('./user/confirmation/confirmation'));
// End Importing Admin pages --------
class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {/* Start Admin routes */}
              <Route exact path="/admin/login" name="Login Page" render={props => <AdminLogin {...props}/>} />
              <Route exact path="/admin/register" name="Register Page" render={props => <AdminRegister {...props}/>} />
              <Route exact path="/admin/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/admin/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/admin" name="admin" render={props => <DefaultLayout {...props}/>} />
              {/* End Admin Routes */}
              {/* Start User Routes */}
              <Route exact path="/" name="Home" render={props => <Home {...props}/>} />
              <Route exact path="/login" name="Login" render={props => <UserLogin {...props}/>} />
              <Route exact path="/register" name="Register" render={props => <UserRegsiter {...props}/>} />
              <Route exact path="/products/:gender" name="Product" render={props => <ProductList {...props}/>} />
              <Route exact path="/products/:gender/:productType" name="Product" render={props => <ProductList {...props}/>} />
              <Route exact path="/product-details/:productTitle/:id" name="Product Title" render={props => <ProductDetails {...props}/>} />
              <Route exact path="/cart" name="cart" render={props => <Cart {...props}/>} />
              <Route exact path="/checkout" name="Checkout" render={props => <Checkout {...props}/>} />
              <Route exact path="/address" name="Address" render={props => <Address {...props}/>} />
              <Route exact path="/profile" name="Profile" render={props => <Profile {...props}/>} />
              <Route exact path="/orders" name="Orders" render={props => <Orders {...props}/>} />
              <Route exact path="/payment" name="Payment" render={props => <Payment {...props}/>} />
              <Route exact path="/confirmation" name="Confirmation" render={props => <Confirmation {...props}/>} />
              {/* End User Routes */}
            </Switch>
          </React.Suspense>
          </BrowserRouter>
    );
  }
}

export default App;
