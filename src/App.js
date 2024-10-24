import React from "react";
import { ThemeProvider } from "@emotion/react";
import Main from "./components/Main";
import ThemeContextProvider, {
  useThemeContext,
} from "./provider/ThemeContextProvider";
import "./App.css";
import { CssBaseline } from "@mui/material";
function App() {
  const { mode, theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="app">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
