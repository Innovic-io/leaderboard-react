import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Provider from "./components/context/Context";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));
registerServiceWorker();
