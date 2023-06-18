import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HabitProvider, useHabit } from "./contexts/HabitContext.jsx";
import { BrowserRouter } from "react-router-dom";

export { useHabit };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HabitProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HabitProvider>
  </React.StrictMode>
);
