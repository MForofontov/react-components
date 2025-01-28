import React from 'react';
import './TextareaInput.css';

// Define the props for the TextareaInput component
interface TextareaInputProps {
  label: string; // The label for the textarea field
  value: string; // The current value of the textarea field
  onChange: (value: string) => void; // The function to call when the textarea value changes
  placeholder?: string; // Optional placeholder text for the textarea field
  disabled?: boolean; // Optional prop to disable the textarea field
}

// TextareaInput functional component
const TextareaInput: React.FC<TextareaInputProps> = ({ label, value, onChange, placeholder, disabled = false }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="textarea-input"
        disabled={disabled} // Apply the disabled prop
      />
    </div>
  );
};

export default TextareaInput;