import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Searchs from "./reducers/searchs";

const history = createHistory();

const app = combineReducers({
  Searchs,
  router: routerReducer
});
// Allow the passed state to be garbage-collected

const store = createStore(app);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <App />
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
