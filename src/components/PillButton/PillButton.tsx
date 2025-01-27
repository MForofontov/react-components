import React from 'react';
import './PillButton.css';

// Define the props for the PillButton component
interface PillButtonProps {
  label: string; // The text to display on the button
  onClick: () => void; // The function to call when the button is clicked
  disabled?: boolean; // Optional prop to disable the button
}

// PillButton functional component
const PillButton: React.FC<PillButtonProps> = ({ label, onClick, disabled = false }) => (
  <button className="pill-btn" onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default PillButton;