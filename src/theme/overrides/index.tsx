import Button from "./button.tsx";
import Switch from "./switch.tsx";

export default function ComponentsOverrides(theme) {
  return Object.assign(Button(theme), Switch(theme));
}
