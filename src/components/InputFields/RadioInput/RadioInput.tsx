import React from 'react';
import './RadioInput.css';

// Define the props for the RadioInput component
interface RadioInputProps {
  name: string; // The name attribute for the radio input (used to group radio buttons)
  label: string; // The label for the radio input
  value: string; // The value of the radio input
  selectedValue: string; // The currently selected value in the group of radio inputs
  onChange: (value: string) => void; // The function to call when the radio input value changes
  disabled?: boolean; // Optional prop to disable the radio input
}

// RadioInput functional component
const RadioInput: React.FC<RadioInputProps> = ({ name, label, value, selectedValue, onChange, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="radio-label">
        <input
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
          onChange={() => onChange(value)}
          disabled={disabled} // Apply the disabled prop
          className="radio-input"
        />
        {label}
      </label>
    </div>
  );
};

export default RadioInput;