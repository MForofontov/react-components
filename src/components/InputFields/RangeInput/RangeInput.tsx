import React from 'react';
import './RangeInput.css';

// Define the props for the RangeInput component
interface RangeInputProps {
  label: string; // The label for the range input
  value: number; // The current value of the range input
  onChange: (value: number) => void; // The function to call when the range input value changes
  min: number; // The minimum value for the range input
  max: number; // The maximum value for the range input
  step?: number; // Optional step value for the range input
  disabled?: boolean; // Optional prop to disable the range input
}

// RangeInput functional component
const RangeInput: React.FC<RangeInputProps> = ({ label, value, onChange, min, max, step = 1, disabled = false }) => {
  return (
    <div className="input-field">
      <label className="range-label">{label}</label>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-input"
        disabled={disabled} // Apply the disabled prop
      />
      <div className="range-value">{value}</div>
    </div>
  );
};

export default RangeInput;