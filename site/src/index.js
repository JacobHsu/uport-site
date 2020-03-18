import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import createMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import configureStore from "./store"; // eslint-disable-line import/default
import history from "./utils/history";

import './index.css';
// import App from './App';
import createRootReducer from "./reducers";
import sagas from "./sagas";
import Routes from "./routes";


const sagaMiddleware = createMiddleware();
const rootReducer = createRootReducer(history);
const store = configureStore(rootReducer, sagaMiddleware, routerMiddleware(history));
sagaMiddleware.run(sagas);

const render = Component => ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>, document.getElementById("root"));
render(Routes);
