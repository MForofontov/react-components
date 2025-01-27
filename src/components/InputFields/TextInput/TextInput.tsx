import React from 'react';
import './TextInput.css';

// Define the props for the TextInput component
interface TextInputProps {
  label: string; // The label for the input field
  placeholder: string; // The placeholder text for the input field
  value: string; // The current value of the input field
  onChange: (value: string) => void; // The function to call when the input value changes
  disabled?: boolean; // Optional prop to disable the input field
}

// TextInput functional component
const TextInput: React.FC<TextInputProps> = ({ label, placeholder, value, onChange, disabled = false }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default TextInput;