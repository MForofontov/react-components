import React from 'react';
import './MonthInput.css';

// Define the props for the MonthInput component
interface MonthInputProps {
  label: string; // The label for the month input
  value: string; // The current value of the month input
  onChange: (value: string) => void; // The function to call when the month input value changes
  placeholder?: string; // Optional placeholder text for the month input
  disabled?: boolean; // Optional prop to disable the month input
}

// MonthInput functional component
const MonthInput: React.FC<MonthInputProps> = ({ label, value, onChange, placeholder, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="month-label">{label}</label>
      <input
        type="month"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="month-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default MonthInput;