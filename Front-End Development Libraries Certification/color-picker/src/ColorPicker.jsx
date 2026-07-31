import { useState } from "react";

const ColorPicker = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleChange = (e) => {
    setBgColor(e.target.value);
  };

  return (
    <div id="color-picker-container" style={{ backgroundColor: bgColor }}>
      <input
        type="color"
        value={bgColor}
        onChange={handleChange}
        id="color-input"
      />
    </div>
  );
};

export default ColorPicker;
