import React from 'react';
import './CheckboxInput.css';

// Define the props for the CheckboxInput component
interface CheckboxInputProps {
  label: string; // The label for the checkbox
  checked: boolean; // The current checked state of the checkbox
  onChange: (checked: boolean) => void; // The function to call when the checkbox state changes
  disabled?: boolean; // Optional prop to disable the checkbox
}

// CheckboxInput functional component
const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, checked, onChange, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled} // Apply the disabled prop
          className="checkbox-input"
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;