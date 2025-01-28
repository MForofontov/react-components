import React from 'react';
import './RangeSlider.css';

// Define the props for the RangeSlider component
interface RangeSliderProps {
  label: string; // The label for the range slider
  value: number; // The current value of the range slider
  onChange: (value: number) => void; // The function to call when the range slider value changes
  min: number; // The minimum value for the range slider
  max: number; // The maximum value for the range slider
  step: number; // The step value for the range slider
}

// RangeSlider functional component
const RangeSlider: React.FC<RangeSliderProps> = ({ label, value, onChange, min, max, step }) => {
  return (
    <div className="input-field">
      <label className="range-slider-label">{label}</label>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-slider-input"
      />
      <div className="range-slider-value">{value}</div>
    </div>
  );
};

export default RangeSlider;