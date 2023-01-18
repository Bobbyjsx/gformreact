import React, { useState } from 'react';

const ThemeChanger = () => {
  const [color, setColor] = useState('Blue');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="Blue">Blue</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
        <option value="Orange">Orange</option>
        <option value="Purple">Purple</option>
        <option value="Pink">Pink</option>
        <option value="Brown">Brown</option>
        <option value="Gray">Gray</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Turquoise">Turquoise</option>
        <option value="Teal">Teal</option>
        <option value="Silver">Silver</option>
        <option value="Rose">Rose</option>
        <option value="Navy">Navy</option>
        <option value="Maroon">Maroon</option>
        <option value="Lime">Lime</option>
        <option value="Khaki">Khaki</option>
        <option value="Ivory">Ivory</option>
        <option value="Indigo">Indigo</option>
        <option value="Gold">Gold</option>
        <option value="Crimson">Crimson</option>
        <option value="Coral">Coral</option>
        <option value="Cobalt">Cobalt</option>
        <option value="Chartreuse">Chartreuse</option>
      </select>
      <div style={{ backgroundColor: color }}>Current color: {color}</div>
    </div>
  );
};

export default ThemeChanger;
