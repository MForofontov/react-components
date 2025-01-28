import React from 'react';
import './NumberInputProps.css';

// Define the props for the NumberInput component
interface NumberInputProps {
  label: string; // The label for the input field
  value: number; // The current value of the input field
  onChange: (value: number) => void; // The function to call when the input value changes
  placeholder?: string; // Optional placeholder text for the input field
  disabled?: boolean; // Optional prop to disable the input field
}

// NumberInput functional component
const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, placeholder, disabled = false }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder={placeholder}
        className="number-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default NumberInput;