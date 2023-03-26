import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PetsProvider } from "./contexts/PetsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PetsProvider>
      <App />
    </PetsProvider>
  </React.StrictMode>
);
