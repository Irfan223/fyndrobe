import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import Home from './Component/Home/Home';
import ExploreCategories from './Component/ExploreCategories/ExploreCategories';
import productDetails from './Component/productDetails/productDetails';
import checkout from './Component/checkout/checkout';
import Address from './Component/address/address';
import Payment from './Component/payment/payment';
import Admin from './Component/Admin/admin';
import AdminPage from './Component/admin-page/adminPage';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter} from 'react-router-dom';

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const routing = (
  <BrowserRouter>
    <div>
      <Route exact  path="/" component={Home} />
      <Route path="/explore" component={ExploreCategories} />
      <Route path="/product" component={productDetails}></Route>
      <Route path="/checkout" component={checkout}></Route>
      <Route path="/address" component={Address}></Route>
      <Route path="/payment" component={Payment}></Route>
      <Route path="/admin-login" component={Admin}></Route>
      <Route path="/admin-page" component={AdminPage}></Route>
    </div>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
