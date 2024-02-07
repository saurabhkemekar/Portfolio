import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#FF6464",
    },
    text: {
      primary: "#21243D",
    },
  },
  typography: {
    fontFamily: 'Apercu,"Source Sans Pro",system,system-ui,',
    h1: {
      fontSize: "44px",
      fontWeight: 700,
      lineHeight: "64px",
      "@media (max-width:600px)": {
        fontSize: "30px",
      },
    },
    h3: {
      fontSize: "30px",
    },
    h4: {
      fontSize: "22px",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "28px",
    },
    allVariants: {
      color: "#21243D",
    },
  },
});
