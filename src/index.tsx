import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals.ts";
// import { onCLS, onFID, onLCP } from "web-vitals";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import SettingsProvider from "./contexts/settings/settingsProvider.tsx";
import { store } from "./redux/store.tsx";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// onCLS((metric) => console.log("CLS:", metric));
// onFID((metric) => console.log("FID:", metric));
// onLCP((metric) => console.log("LCP:", metric));

root.render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <SettingsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </ReduxProvider>
  // </React.StrictMode>
);

reportWebVitals();
