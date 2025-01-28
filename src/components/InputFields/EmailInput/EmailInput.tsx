import React from 'react';
import './EmailInput.css';

// Define the props for the EmailInput component
interface EmailInputProps {
  label: string; // The label for the input field
  value: string; // The current value of the input field
  onChange: (value: string) => void; // The function to call when the input value changes
  placeholder?: string; // Optional placeholder text for the input field
  disabled?: boolean; // Optional prop to disable the input field
}

// EmailInput functional component
const EmailInput: React.FC<EmailInputProps> = ({ label, value, onChange, placeholder, disabled = false }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="email-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default EmailInput;