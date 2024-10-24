import React, { createContext, useContext } from "react";
import { createTheme, Theme } from "@mui/material";
import { useColorTheme } from "../hooks/useColorTheme";

export const ThemeContext = createContext({
  mode: "dark",
  toggleTheme: () => {},
  theme: createTheme(),
});

const ThemeContextProvider = ({ children }) => {
  const value = useColorTheme();
  console.log("value", value);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
