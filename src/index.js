import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*-------- HERE ALL THE SETUP FOR REACT REDUX DEPENDENCIES ----- */
import { Provider } from "react-redux";
import STORE from "./event-handlers";

/* ------------------------------------------------------------- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={STORE}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
