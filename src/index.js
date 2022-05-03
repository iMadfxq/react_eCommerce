import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./contexts/cart.context";

const container = document.getElementById("root");
const root = createRoot(container);

//any component in which we want to use routing should be wrapped by the BrowserRouter

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
      <CartProvider>
            <App />
      </CartProvider>
          </ProductsProvider>
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
