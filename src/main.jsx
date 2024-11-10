import React from "react";
import ReactDOM from "react-dom/client";
import "react-multi-carousel/lib/styles.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QJQ6YGXyE7DqlV8yCFisSMWfkn305hInVMZYrIH4wq0CINZHgBTnKojeSpj73UJzbe1WY00LHvU8rit3qgHA4rs00RJ081Eb3"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Elements>
);
