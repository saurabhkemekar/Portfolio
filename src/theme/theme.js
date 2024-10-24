const theme = {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "red",
          light: "#ffffff",
        },
        text: {
          primary: "#00000",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#000000",
          light: "#ffffff",
        },
        text: {
          primary: "#ffffff",
        },
      },
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
    h2: {
      fontSize: "38px",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "24px",
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
  },
};
export default theme;
