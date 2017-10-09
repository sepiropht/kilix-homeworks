import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import { combineReducers } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Searchs from "./reducers/searchs";
const preloadedState = window.__PRELOADED_STATE__;
const history = createHistory();

const app = combineReducers({
  Searchs,
  router: routerReducer
});
// Allow the passed state to be garbage-collected

const store = createStore(app);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
