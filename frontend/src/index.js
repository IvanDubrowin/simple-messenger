import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import AuthRouter from "./components/Router";
import Snackbar from "./components/Snackbars";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Snackbar/>
        <AuthRouter/>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();