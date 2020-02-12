import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { TrackerProvider, Tracker } from "react-tracker";
import RootReducer from "./reducers/index";
import signupreducer from "./reducers/signupreducer";
import loginreducer from "./reducers/LoginReducer";
import { reducer as formReducer } from "redux-form";
//Middleware setup

const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStore(RootReducer, composePlugin(applyMiddleware(thunk)));
const tracker = new Tracker([]);
ReactDOM.render(
  <Provider store={store}>
    {/* <TrackerProvider tracker={tracker}> */}
    <App />
    {/* </TrackerProvider> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
