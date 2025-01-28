import React from 'react';
import './MultipleCheckboxInput.css';

// Define the props for the MultipleCheckboxInput component
interface MultipleCheckboxInputProps {
  label: string; // The label for the group of checkboxes
  options: string[]; // The options to display as checkboxes
  selectedOptions: string[]; // The currently selected options
  onChange: (selected: string[]) => void; // The function to call when the selected options change
}

// MultipleCheckboxInput functional component
const MultipleCheckboxInput: React.FC<MultipleCheckboxInputProps> = ({
  label,
  options,
  selectedOptions,
  onChange,
}) => {
  // Handle checkbox change
  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option)); // Remove option if already selected
    } else {
      onChange([...selectedOptions, option]); // Add option if not selected
    }
  };

  return (
    <div className="input-field">
      <label className="checkbox-group-label">{label}</label>
      {options.map((option, index) => (
        <div key={index} className="checkbox-option">
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="checkbox-input"
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultipleCheckboxInput;