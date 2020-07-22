import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./components/Router";
import { store } from "./redux/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();