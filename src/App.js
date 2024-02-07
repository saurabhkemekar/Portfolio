import { ThemeProvider } from "@emotion/react";
import Main from "./components/Main";
import { defaultTheme } from "./defaultTheme";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <Main />
      </Box>
    </ThemeProvider>
  );
}

export default App;
