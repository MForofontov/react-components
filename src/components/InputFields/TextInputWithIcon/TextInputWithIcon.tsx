import React from 'react';
import './TextInputWithIcon.css';

// Define the props for the TextInputWithIcon component
interface TextInputWithIconProps {
  label: string; // The label for the text input
  value: string; // The current value of the text input
  onChange: (value: string) => void; // The function to call when the text input value changes
  placeholder?: string; // Optional placeholder text for the text input
  icon: React.ReactNode; // The icon to display inside the text input
}

// TextInputWithIcon functional component
const TextInputWithIcon: React.FC<TextInputWithIconProps> = ({ label, value, onChange, placeholder, icon }) => {
  return (
    <div className="input-field">
      <label className="input-label">{label}</label>
      <div className="input-with-icon">
        <span className="icon">{icon}</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="text-input"
        />
      </div>
    </div>
  );
};

export default TextInputWithIcon;