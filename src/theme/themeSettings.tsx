import React, { ReactNode } from "react";
import ThemeColorPresets from "./themeColorPresets.tsx";

const ThemeSettings: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeColorPresets>{children}</ThemeColorPresets>;
};

export default ThemeSettings;
