import React from "react";
import Router from "./routes/index.tsx";
import ThemeProvider from "./theme/themeProvider.tsx";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
