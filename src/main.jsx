import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import Store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
    {/* // in context Api we have to pass the value to Provider ut in react-redux we
    have to pass only stre . use btana h ki humaa store kon sa hai */}
  </React.StrictMode>
);
