import { createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import theme from "../theme/theme";

export const useColorTheme = () => {
  const [mode, setMode] = useState("dark");

  const toggleTheme = () => {
    const appElem = document.getElementById("app");
    appElem.setAttribute("data-theme", "light");
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const modifiedTheme = useMemo(
    () => createTheme({ ...theme, palette: { ...theme.palette, mode } }),
    [mode]
  );

  return {
    mode,
    toggleTheme,
    theme: modifiedTheme,
  };
};
