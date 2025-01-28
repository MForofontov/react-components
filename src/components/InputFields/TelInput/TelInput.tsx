import React from 'react';
import './TelInput.css';

// Define the props for the TelInput component
interface TelInputProps {
  label: string; // The label for the telephone input
  value: string; // The current value of the telephone input
  onChange: (value: string) => void; // The function to call when the telephone input value changes
  placeholder?: string; // Optional placeholder text for the telephone input
  disabled?: boolean; // Optional prop to disable the telephone input
}

// TelInput functional component
const TelInput: React.FC<TelInputProps> = ({ label, value, onChange, placeholder, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="tel-label">{label}</label>
      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="tel-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default TelInput;