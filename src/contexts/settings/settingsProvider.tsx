import React from "react";
import { defaultSettings } from "../../config.tsx";
import useLocalStorage from "../../hooks/useLocalStorage.tsx";
import { SettingsContext } from "./settingsContext.tsx";

const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: defaultSettings.themeMode,
    themeDirection: defaultSettings.themeDirection,
    themeColorPresets: defaultSettings.themeColorPresets,
  });

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "dark" ? "light" : "dark",
    });
  };
  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection: settings.themeDirection === "ltr" ? "rtl" : "ltr",
    });
  };
  const onChangeColor = (event) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value,
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: defaultSettings.themeMode,
      themeDirection: defaultSettings.themeDirection,
      themeColorPresets: defaultSettings.themeColorPresets,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleMode,
        onToggleDirection,
        onChangeColor,
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
