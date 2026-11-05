
import { useToggle } from "../context/ToggleContext";

function ToggleButton() {
  const { theme, toggleTheme } = useToggle();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

export default ToggleButton;
