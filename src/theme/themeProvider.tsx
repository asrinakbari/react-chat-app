import { createTheme, CssBaseline, StyledEngineProvider } from "@mui/material";
import React, { useContext, useMemo } from "react";
import useSettings from "../hooks/useSettings.tsx";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import breakpoints from "./breakpoints.tsx";
import palette from "./palette.tsx";
import typography from "./typography.tsx";
import ComponentsOverrides from "./overrides/index.tsx";
import { SettingsContext } from "../contexts/settings/settingsContext.tsx";

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { themeMode, themeDirection } = useSettings();
  useContext(SettingsContext);

  const isLight = themeMode === "light";

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
