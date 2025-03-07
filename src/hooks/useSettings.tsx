import { useContext } from "react";
import { SettingsContext } from "../contexts/settings/settingsContext.tsx";

const useSettings = () => useContext(SettingsContext);
export default useSettings;
