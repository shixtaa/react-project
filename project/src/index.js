import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { configStore } from './Redux/Store/store';

import Loading from './Component/Loading/Loading';
import Modal from './Component/Modal/Modal';

/* components */

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={ configStore() }>
    <App />
    <Modal></Modal>
    <Loading></Loading>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
