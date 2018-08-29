import React from "react";
import ReactDOM from "react-dom";
import App from "../shared/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../shared/reducers/index";
import { BrowserRouter } from 'react-router-dom';
import thunk from "redux-thunk";


const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__

const store = createStore(rootReducer, preloadedState,applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("app"));