import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [mode, setMode] = useState("");

  const toggleMode = (modeValue) => {
    setMode(modeValue);
  };

  //set class based on whatever mode is applied to body
  const setBodyCssClass = (theme) => {
    document.body.className = theme;
  };

  //set body css class based on mode change
  useEffect(() => {
    setBodyCssClass(mode);
  }, [mode]);

  return [mode, toggleMode];
}
