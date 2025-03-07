import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, defaultValue: object) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  // Use useEffect to listen for changes in localStorage from other tabs or windows
  useEffect(() => {
    const listener = (event) => {
      if (event.storageArea === localStorage && event.key === key) {
        setValue(JSON.parse(event.newValue));
      }
    };

    // Add event listener to listen for changes in localStorage
    window.addEventListener("storage", listener);

    // Cleanup the listener when the component is unmounted
    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue) => {
    return setValue((currentValue) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
