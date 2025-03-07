import useSettings from "../hooks/useSettings.tsx";
import React, { useMemo } from "react";
import ComponentsOverrides from "../theme/overrides/index.tsx";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";

export default function ThemeColorPresets({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultTheme = useTheme();
  const { color } = useSettings();

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: { main: color },
      },
    }),
    [color, defaultTheme]
  );

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
