import React from 'react';
import './SelectInput.css';

// Define the props for the SelectInput component
interface SelectInputProps {
  label: string; // The label for the select input
  value: string; // The current value of the select input
  onChange: (value: string) => void; // The function to call when the select input value changes
  options: string[]; // The options to display in the select input
  disabled?: boolean; // Optional prop to disable the select input
}

// SelectInput functional component
const SelectInput: React.FC<SelectInputProps> = ({ label, value, onChange, options, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="select-label">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select-input"
        disabled={disabled} // Apply the disabled prop
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;