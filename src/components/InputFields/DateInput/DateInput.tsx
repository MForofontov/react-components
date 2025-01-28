import React from 'react';
import './DateInput.css';

// Define the props for the DateInput component
interface DateInputProps {
  label: string; // The label for the input field
  value: string; // The current value of the input field
  onChange: (value: string) => void; // The function to call when the input value changes
  placeholder?: string; // Optional placeholder text for the input field
  disabled?: boolean; // Optional prop to disable the input field
}

// DateInput functional component
const DateInput: React.FC<DateInputProps> = ({ label, value, onChange, placeholder, disabled = false }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="date-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default DateInput;