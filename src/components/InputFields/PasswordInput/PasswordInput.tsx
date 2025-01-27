import React, { useState } from 'react';
import './PasswordInput.css';

// Define the props for the PasswordInput component
interface PasswordInputProps {
  label: string; // The label for the input field
  placeholder: string; // The placeholder text for the input field
  value: string; // The current value of the input field
  onChange: (value: string) => void; // The function to call when the input value changes
  disabled?: boolean; // Optional prop to disable the input field
}

// PasswordInput functional component
const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder, value, onChange, disabled = false }) => {
  // State to track whether the password is visible or hidden
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility of the password
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <div className="password-input-wrapper">
        <input
          type={isVisible ? 'text' : 'password'} // Toggle between text and password input types
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="password-input"
          disabled={disabled} // Apply the disabled prop
        />
        <button
          type="button"
          className="toggle-visibility-btn"
          onClick={toggleVisibility}
          aria-label={isVisible ? 'Hide password' : 'Show password'} // Accessibility label
        >
          {isVisible ? 'Hide' : 'Show'} {/* Button text */}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;