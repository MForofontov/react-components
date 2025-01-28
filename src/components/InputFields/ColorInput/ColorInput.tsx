import React from 'react';
import './ColorInput.css';

// Define the props for the ColorInput component
interface ColorInputProps {
  label: string; // The label for the color input
  value: string; // The current value of the color input
  onChange: (value: string) => void; // The function to call when the color input value changes
  disabled?: boolean; // Optional prop to disable the color input
}

// ColorInput functional component
const ColorInput: React.FC<ColorInputProps> = ({ label, value, onChange, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="color-label">{label}</label>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="color-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default ColorInput;