import { Theme } from "./colors";

// set colors dynamically based on the mode from Theme
// color: ${Theme[mode].blackNewRgba};

export const setThemeMode = (mode) => {
  const colors = {
    bgColor: Theme[mode].appColor,
  };

  return colors;
};
