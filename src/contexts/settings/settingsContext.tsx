import { createContext } from "react";
import { defaultSettings } from "../../config.tsx";
import { defaultPreset } from "../../utils/getColorPresets.tsx";

const defaultValue = {
  ...defaultSettings,
  onToggleMode: () => {},
  onToggleDirection: () => {},
  onChangeColor: () => {},
  onResetSetting: () => {},
  setColor: defaultPreset,
};

export const SettingsContext = createContext(defaultValue);
