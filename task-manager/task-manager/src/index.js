import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

