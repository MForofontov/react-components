import React from 'react';
import './URLInput.css';

// Define the props for the URLInput component
interface URLInputProps {
  label: string; // The label for the URL input
  value: string; // The current value of the URL input
  onChange: (value: string) => void; // The function to call when the URL input value changes
  placeholder?: string; // Optional placeholder text for the URL input
  disabled?: boolean; // Optional prop to disable the URL input
}

// URLInput functional component
const URLInput: React.FC<URLInputProps> = ({ label, value, onChange, placeholder, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="url-label">{label}</label>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="url-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default URLInput;