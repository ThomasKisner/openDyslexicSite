import React, { useContext, useEffect } from "react";
import { node } from "prop-types";
import DarkModeContext from "./DarkModeContext";
import useDarkmode from "./useDarkMode";

const DarkModeProvider = ({ children }) => {
  const [mode, toggleMode] = useDarkmode();

  // To set default value when page is refreshed
  let defaultMode = "dark";
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    defaultMode = "dark";
  }

  useEffect(() => {
    toggleMode(defaultMode);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Adding eventListener wehen mode is changed
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        toggleMode("dark");
      } else {
        toggleMode("light");
      }
    });

  return (
    <DarkModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: node.isRequired,
};

export default DarkModeProvider;

// Context that we consume in components
export const useDarkmodeContext = () => useContext(DarkModeContext);
