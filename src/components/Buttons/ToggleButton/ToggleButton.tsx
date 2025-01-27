import React, { useState } from 'react';
import './ToggleButton.css';

// Define the props for the ToggleButton component
interface ToggleButtonProps {
  label: string; // The text to display on the button
}

// ToggleButton functional component
const ToggleButton: React.FC<ToggleButtonProps> = ({ label }) => {
  // State to track whether the button is toggled on or off
  const [toggled, setToggled] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    setToggled(!toggled); // Toggle the state
  };

  return (
    <button
      className={`toggle-btn ${toggled ? 'on' : 'off'}`} // Apply different classes based on the toggled state
      onClick={handleClick} // Set the click handler
      aria-pressed={toggled} // Accessibility attribute to indicate the pressed state
    >
      {label} {toggled ? 'On' : 'Off'} {/* Display the label and the current state */}
    </button>
  );
};

export default ToggleButton;