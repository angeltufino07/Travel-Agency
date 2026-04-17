import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/store/store";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>   // Enables client-side routing across the entire app
      <Provider store={store}>  // Exposes the Redux store to every component
        <App/>              // The root component — all UI lives here
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
