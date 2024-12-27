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
          main: "red",
          light: "#ffffff",
        },
        text: {
          primary: "#ffffff",
        },
      },
    },
  },

  typography: {
    fontFamily: ["Sora"].join(","),
    h1: {
      fontSize: "3.2rem",
      fontWeight: 700,
      lineHeight: "64px",
      "@media (max-width:600px)": {
        fontSize: "2.1rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.74rem",
      fontWeight: 800,
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: "28px",
    },
    p: {
      fontSize: "1rem",
    },
  },
};
export default theme;
