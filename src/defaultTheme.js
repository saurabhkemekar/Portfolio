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
    fontFamily: ['"Segoe UI"', "Roboto"].join(","),
    h1: {
      fontSize: "42px",
      fontWeight: 700,
      lineHeight: "64px",
      "@media (max-width:600px)": {
        fontSize: "28px",
      },
    },
    h3: {
      fontSize: "28px",
    },
    h4: {
      fontSize: "20px",
    },
    body1: {
      fontSize: "14px",
      lineHeight: "28px",
    },
    allVariants: {
      color: "#21243D",
    },
  },
});
