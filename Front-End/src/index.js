import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { Provider } from 'react-redux';
import cartReducer from './redux/reducers/cartReducer';
import { PersistGate } from 'redux-persist/integration/react';
// const store = createStore(cartReducer);
const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, cartReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export default () => {
    return { store, persistor }
  }
//   loading={<Loading />}
ReactDOM.render(<Provider store={store}><PersistGate loading={null} persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
