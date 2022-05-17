import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App3'
import store from './store';
import 'antd/dist/antd.less'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { StoreContext } from './utils/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);