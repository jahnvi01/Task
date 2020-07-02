import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const store=createStore (rootReducer);
const history = createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
serviceWorker.register();