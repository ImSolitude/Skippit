import React, { useState } from "react";

import "./Switch.scss";

const Switch = () => {
  const [darkMode, setDarkMode] = useState(true);
  const handleToggle = () => {
    if (!darkMode) {
      document.documentElement.style.setProperty(
        "--background-color",
        "#000000"
      );
      document.documentElement.style.setProperty("--text-color", "  #ffffff");
      setDarkMode(true);
    } else if (darkMode) {
      document.documentElement.style.setProperty(
        "--background-color",
        "#ffffff"
      );
      document.documentElement.style.setProperty("--text-color", "#000000");
      setDarkMode(false);
    }
  };
  return (
    <div className="switch_box box_2">
      <input type="checkbox" className="switch_2" onClick={handleToggle} />
    </div>
  );
};

export default Switch;
